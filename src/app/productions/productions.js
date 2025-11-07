'use client'
import ImageContainerStyled from "@/components/styledComponents/ImageContainer.styled";
import { ParallaxLayer } from "@react-spring/parallax";
import { memo } from "react";
import styled from "styled-components";
import { url } from "@/utilities/helper";
import styles from '@/utilities/page.module.css';
import { useRouter } from "next/navigation";


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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const StyledImageWrapper = styled.div`
    width:50%;
`;

const ProductionComponent = ({productions}) => {
   
    const router = useRouter();
    const handleImageTileClick = (id) => {
        router.push(`/productions/${id}`);
    };

    return (
        <>
                <ParallaxLayer
                offset={0}
                speed={0}
                factor={3}
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
                {/* <h2> All </h2>
                <h2>Film</h2>
                <h2>Documentary</h2> */}
                </ParallaxLayer>

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
                            <h2>Productions</h2>
                            <StyledParentWrapper>
                                <ImageTiles
                                    productions={productions}
                                    onClickCb={handleImageTileClick}
                                />
                            </StyledParentWrapper>
                    </div>
                </ParallaxLayer>
        </>
    );
};

export default memo(ProductionComponent);