'use client'
import ImageContainerStyled from "@/components/styledComponents/ImageContainer.styled";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { memo } from "react";
import styled from "styled-components";
import { url } from "@/utilities/helper";
import TextContainerComponent from "@/components/TextContainer.component";
import styles from '@/utilities/page.module.css';

const StyledParentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const StyledImageWrapper = styled.div`
    width:50%;
`;

const ImageTiles = ({productions}) => {
    return productions.map((production, index) => {
        return (
            <StyledImageWrapper>
                 <ImageContainerStyled
                    src={production.image.src}
                    alt={production.image.alt}
                    key={`${index}-image-production`}
                />
            </StyledImageWrapper>
           
        );
    });
};

const ProductionComponent = ({productions}) => {
    console.log("test1000");
    return (
        <div>
            <Parallax pages={3}>
                <ParallaxLayer
                offset={0}
                speed={1}
                factor={1}
                 style={{
                    backgroundImage: url('/bhagoruwa.png', true),
                    backgroundSize: 'contain'}}
                >  
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1}
                    speed={-0.2}
                    factor={1}
                >  
                <h2> All </h2>
                <h2>Film</h2>
                <h2>Documentary</h2>
                </ParallaxLayer>

                {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} /> */}
                {/* <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#87BCDE' }} /> */}

                <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={url('/monkeyScope.png', false)} style={{ width: '15%', marginLeft: '70%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1} factor={3}>
                    <div className={styles.section}>
                        {/* <div className={styles.contentContainer}> */}
                            <h2>Productions</h2>
                            <StyledParentWrapper>
                                <ImageTiles
                                    productions={productions}
                                />
                            </StyledParentWrapper>
                        {/* </div> */}
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
};

export default memo(ProductionComponent);