'use client'
import ImageContainerStyled from "@/components/styledComponents/ImageContainer.styled";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { url } from "@/utilities/helper";
import { useRouter } from "next/navigation";
import { media } from "@/utilities/breakpoints";
import { useParallaxPages } from "@/contexts/ParallaxPagesContext";
import { useViewport } from "@/utilities/viewport";
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

const StyledHeader = styled.h1`
    text-align:center;
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    padding: 0 4%;
    color:rgb(250, 245, 245);
`;

const StyledParentWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: clamp(10px, 2vw, 16px);
    width: 100%;
    --productions-gutter: clamp(0.75rem, 3vw, 3cm);
    max-width: calc(100% - (var(--productions-gutter) * 2));
    margin: 0 auto;
    padding: 0 var(--productions-gutter);
    box-sizing: border-box;

    ${media.narrowPortrait}, ${media.mobileOnly} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        max-width: 100%;
        padding: 0 4%;
    }

    ${media.compactLandscape} {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
    }

    ${media.tabletLandscape} {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: clamp(10px, 1.5vw, 14px);
    }

    ${media.mobile} {
        gap: 10px;
        max-width: 100%;
        padding: 0 4%;
    }
`;

const StyledImageWrapper = styled.div`
    width: 100%;
    min-width: 0;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    cursor: pointer;

    ${media.narrowPortrait}, ${media.mobileOnly} {
        aspect-ratio: 16 / 11;
    }

    ${media.compactLandscape}, ${media.tabletLandscape} {
        aspect-ratio: 4 / 3;
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

    ${media.narrowPortrait} {
        padding-top: 8%;
        padding-bottom: clamp(80px, 12vh, 140px);

        h2 {
            padding: 0 4%;
        }
    }

    ${media.compactLandscape} {
        padding-top: clamp(2.5rem, 8vh, 3.5rem);
        padding-bottom: clamp(48px, 10vh, 72px);

        h2 {
            margin-bottom: clamp(12px, 2vh, 20px);
            padding: 0 2%;
        }
    }

    ${media.tabletLandscape} {
        padding-top: 6%;
        padding-bottom: clamp(64px, 10vh, 100px);
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
    const { layout: layoutProfile } = useViewport();
    const [layout, setLayout] = useState(() =>
        buildProductionLayout(
            estimateContentFactor(productions?.length ?? 0, 'tabletLandscape'),
            'tabletLandscape',
        ),
    );

    useEffect(() => {
        const estimated = estimateContentFactor(productions?.length ?? 0, layoutProfile);
        setLayout(buildProductionLayout(estimated, layoutProfile));
    }, [productions?.length, layoutProfile]);

    useLayoutEffect(() => {
        const sectionEl = sectionRef.current;
        if (!sectionEl) return;

        const measure = () => {
            const vh = window.innerHeight || 1;
            const measuredFactor = contentHeightToFactor(sectionEl.scrollHeight, vh);
            const contentFactor = measuredFactor;
            const nextLayout = buildProductionLayout(contentFactor, layoutProfile);

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
    }, [productions?.length, layoutProfile, setPagesOverride]);

    useEffect(() => () => clearPagesOverride(), [clearPagesOverride]);

    const handleImageTileClick = (id) => {
        router.push(`/productions/${id}`);
    };

    const heroFactor = 0.8;
    const { contentOffset, contentFactor, footerOffset, footerFactor, heroBgOffset, backgroundFactor } = layout;

    return (
        < >
                <ParallaxLayer
                    offset={0}
                    speed={1}
                    factor={heroFactor}
                    style={{
                        backgroundImage: url('/bhagoruwa.png', true),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>  
                </ParallaxLayer>

                <ParallaxLayer offset={0.30} speed={0.8} style={{ opacity: 0.1, pointerEvents: 'none' }} >
                    <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={contentOffset - 0.5} speed={0.3} style={{ opacity: 0.1, pointerEvents: 'none' }}>
                    <img src={url('/monkeyScope.png', false)} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={0.25} speed={1.5} factor={0.1}>
                    <StyledHeader>Productions</StyledHeader>
                </ParallaxLayer>

                <ParallaxLayer offset={0.70} speed={0.8} style={{ opacity: 0.1 }} >
                    <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={0.75} speed={0.5} style={{ opacity: 0.1 }} >
                    <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                    <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={0.99} speed={0.8} style={{ opacity: 0.1}}>
                    <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer> 
                <ParallaxLayer offset={0.99} speed={0.8} style={{ opacity: 0.1}}>
                    <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                    <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer> 

                <ParallaxLayer
                    offset={contentOffset+0.1}
                    speed={1.8}
                    factor={contentFactor}
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}
                >
                    <StyledSection ref={sectionRef}>
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
