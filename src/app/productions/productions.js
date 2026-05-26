'use client'
import ImageContainerStyled from "@/components/styledComponents/ImageContainer.styled";
import { ParallaxLayer } from "@react-spring/parallax";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { url } from "@/utilities/helper";
import { useRouter } from "next/navigation";
import { media } from "@/utilities/breakpoints";


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
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2%;
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
    min-height: auto;
    padding-top: 5%;
    padding-bottom: 56px;
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
        padding-bottom: 64px;

        h2 {
            padding: 0 4%;
        }
    }

    ${media.mobile} {
        padding-top: 10%;
        padding-bottom: 48px;

        h2 {
            padding: 0 4%;
        }
    }
`;

const getLayoutValues = (viewport) => {
    if (viewport === 'mobile') {
        return {
            contentOffset: 1,
            contentFactor: 1.45,
            footerOffset: 2.55,
            footerFactor: 0.5,
        };
    }

    if (viewport === 'tablet') {
        return {
            contentOffset: 1,
            contentFactor: 1.3,
            footerOffset: 2.45,
            footerFactor: 0.45,
        };
    }

    return {
        contentOffset: 1,
        contentFactor: 1.05,
        footerOffset: 2.1,
        footerFactor: 0.3,
    };
};

const ProductionComponent = ({productions}) => {
   
    const router = useRouter();
    const [viewport, setViewport] = useState('desktop');

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

    const handleImageTileClick = (id) => {
        router.push(`/productions/${id}`);
    };

    const heroFactor = 1;
    const { contentOffset, contentFactor, footerOffset, footerFactor } = getLayoutValues(viewport);

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
                    offset={heroFactor * 0.85}
                    speed={0}
                    factor={2}
                    style={{ backgroundColor: '#FAF7EF' }}
                >  
                </ParallaxLayer>

                <ParallaxLayer offset={contentOffset + 0.2} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={url('/monkeyScope.png', false)} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>

           {/*      <ParallaxLayer offset={contentOffset} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer> */}

           {/*      <ParallaxLayer offset={contentOffset + 0.4} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer> */}
{/* 
                <ParallaxLayer offset={contentOffset} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer> */}
{/* 
                <ParallaxLayer offset={contentOffset + 0.25} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer> */}

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
                    <StyledSection>
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
