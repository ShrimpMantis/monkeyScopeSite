'use client';

import GridComponent from "@/components/Grid.component";
import { ParallaxLayer } from "@react-spring/parallax";
import { url } from "@/utilities/helper";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "@/utilities/breakpoints";

const StyledNewsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
    padding-top: 5%;
    padding-bottom: 56px;
    background-color: #FAF7EF;
    opacity: 1;
    text-align: center;

    h2 {
        width: 100%;
        text-align: center;
        margin-bottom: clamp(20px, 4vw, 40px);
    }

    ${media.tablet} {
        padding-top: 10%;
        padding-bottom: 72px;
    }
`;

const StyledContentContainer = styled.div`
    background-color: #FAF7EF;
    opacity: 1;
    width: 100%;
    height: auto;
    padding: 3%;
    box-sizing: border-box;
    text-align: center;

    ${media.tablet} {
        padding: 4%;
    }
`;

const NewsComponent = ({newsList}) => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const updateViewport = () => setIsMobile(mediaQuery.matches);
        updateViewport();
        mediaQuery.addEventListener('change', updateViewport);
        return () => mediaQuery.removeEventListener('change', updateViewport);
    }, []);

    const handleClickCb = (id) => {
        router.push(`/news/${id}`);
    };

    const heroFactor = 1;
    const contentOffset = 0.78;
    const layout = isMobile
        ? { contentFactor: 1.85, footerOffset: 2.35, footerFactor: 0.35 }
        : { contentFactor: 1.05, footerOffset: 1.72, footerFactor: 0.32 };

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
            }}
        />

        <ParallaxLayer
            offset={heroFactor * 0.85}
            speed={0}
            factor={1.2}
            style={{ backgroundColor: '#FAF7EF' }}
        />

        <ParallaxLayer
            offset={contentOffset}
            speed={1}
            factor={layout.contentFactor}
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                backgroundColor: '#FAF7EF',
            }}
        >
            <StyledNewsSection>
                <StyledContentContainer>
                    <GridComponent childrenList={newsList} clickCb={handleClickCb}>
                            <h2>{"News"}</h2>
                    </GridComponent>
                </StyledContentContainer>
            </StyledNewsSection>
        </ParallaxLayer>

        <ParallaxLayer
            offset={layout.footerOffset}
            speed={0}
            factor={layout.footerFactor}
            style={{ backgroundColor: '#FAF7EF' }}
        />
    </>
    );
};

export default NewsComponent;
