'use client'
import ImageContainerStyled from "@/components/styledComponents/ImageContainer.styled";
import { ParallaxLayer } from "@react-spring/parallax";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { url } from "@/utilities/helper";
import { useRouter } from "next/navigation";
import { media } from "@/utilities/breakpoints";
import { useParallaxPages } from "@/contexts/ParallaxPagesContext";
import {
    buildProductionLayout,
    contentHeightToFactor,
    estimateContentFactor,
} from "@/utilities/productionParallaxLayout";


const ImageTiles = ({productions, onClickCb}) => {
    return productions.map((production, index) => {
        return (
            <StyledImageWrapper key={`${index}-image-wrapper`}>
                 <ImageContainerStyled
                    src={production.image.src}
                    alt={production.image.alt}
                    key={`${index}-image-production`}
                    onClick={() => onClickCb(index)}
                />
            </StyledImageWrapper>
           
        );
    });
};

const StyledParentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(10px, 2vw, 16px);
    width: 100%;
    max-width: var(--grid-max-width);
    margin: 0 auto;
    padding: 0 var(--page-gutter);
    box-sizing: border-box;

    ${media.tablet} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        padding: 0 4%;
    }

    ${media.mobile} {
        gap: 10px;
        padding: 0 4%;
    }
`;

const StyledImageWrapper = styled.div`
    width: 100%;
    min-width: 0;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    cursor: pointer;

    ${media.tablet} {
        aspect-ratio: 16 / 11;
    }

    ${media.mobile} {
        aspect-ratio: 1 / 1;
    }
`;

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    height: auto;
    min-height: 0;
    padding-top: 5%;
    padding-bottom: clamp(72px, 10vh, 120px);
    box-sizing: border-box;

    h2 {
        color: #171717;
        width: 100%;
        text-align: center;
        margin-bottom: clamp(20px, 4vw, 40px);
        padding: 0 2%;
    }

    ${media.tablet} {
        padding-top: 8%;
        padding-bottom: clamp(80px, 12vh, 140px);

        h2 {
            padding: 0 4%;
        }
    }

    ${media.mobile} {
        padding-top: 10%;
        padding-bottom: clamp(64px, 10vh, 100px);

        h2 {
            padding: 0 4%;
        }
    }
`;

const ProductionComponent = ({productions}) => {
   
    const router = useRouter();
    const sectionRef = useRef(null);
    const { setPagesOverride, clearPagesOverride } = useParallaxPages();
    const [viewport, setViewport] = useState('desktop');
    const [layout, setLayout] = useState(() =>
        buildProductionLayout(
            estimateContentFactor(productions?.length ?? 0, 'desktop'),
            'desktop',
        ),
    );

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 480px)');
        const tabletQuery = window.matchMedia('(max-width: 768px)');

        const updateViewport = () => {
            if (mobileQuery.matches) {
                setViewport('mobile');
            } else if (tabletQuery.matches) {
                setViewport('tablet');
            } else {
                setViewport('desktop');
            }
        };

        updateViewport();
        mobileQuery.addEventListener('change', updateViewport);
        tabletQuery.addEventListener('change', updateViewport);

        return () => {
            mobileQuery.removeEventListener('change', updateViewport);
            tabletQuery.removeEventListener('change', updateViewport);
        };
    }, []);

    useEffect(() => {
        const estimated = estimateContentFactor(productions?.length ?? 0, viewport);
        setLayout(buildProductionLayout(estimated, viewport));
    }, [productions?.length, viewport]);

    useLayoutEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const measure = () => {
            const vh = window.innerHeight || 1;
            const measuredFactor = contentHeightToFactor(sectionEl.scrollHeight, vh);
            const estimatedFactor = estimateContentFactor(productions?.length ?? 0, viewport);
            const contentFactor = Math.max(measuredFactor, estimatedFactor);
            const nextLayout = buildProductionLayout(contentFactor, viewport);

            setLayout((prev) =>
                Math.abs(prev.contentFactor - nextLayout.contentFactor) < 0.02 &&
                Math.abs(prev.footerOffset - nextLayout.footerOffset) < 0.02
                    ? prev
                    : nextLayout,
            );
            setPagesOverride(nextLayout.pagesCount);
        };

        measure();

        const resizeObserver = new ResizeObserver(measure);
        resizeObserver.observe(sectionEl);
        window.addEventListener('resize', measure);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', measure);
        };
    }, [productions?.length, viewport, setPagesOverride]);

    useEffect(() => () => clearPagesOverride(), [clearPagesOverride]);

    const handleImageTileClick = (id) => {
        router.push(`/productions/${id}`);
    };

    const heroFactor = 1;
    const { contentOffset, contentFactor, footerOffset, footerFactor, heroBgOffset, backgroundFactor } = layout;

    return (
        <>
                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={heroFactor}
                    style={{
                        backgroundImage: url('/bhagoruwa.png', true),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>  
                </ParallaxLayer>
                <ParallaxLayer
                    offset={heroBgOffset}
                    speed={0}
                    factor={backgroundFactor}
                    style={{ backgroundColor: '#FAF7EF' }}
                >  
                </ParallaxLayer>

                <ParallaxLayer offset={contentOffset + 0.2} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <img src={url('/monkeyScope.png', false)} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={contentOffset}
                    speed={0.15}
                    factor={contentFactor}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}
                >
                    <StyledSection ref={sectionRef}>
                            <h2>Productions</h2>
                            <StyledParentWrapper>
                                <ImageTiles
                                    productions={productions}
                                    onClickCb={handleImageTileClick}
                                />
                            </StyledParentWrapper>
                    </StyledSection>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={footerOffset}
                    speed={0}
                    factor={footerFactor}
                    style={{ backgroundColor: '#FAF7EF' }}
                />
        </>
    );
};

export default memo(ProductionComponent);
