'use client';

import GridComponent from "@/components/Grid.component";
import { ParallaxLayer } from "@react-spring/parallax";
import { url } from "@/utilities/helper";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { media } from "@/utilities/breakpoints";
import { useViewport } from "@/utilities/viewport";

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

    ${media.narrowPortrait} {
        padding-top: 10%;
        padding-bottom: 72px;
    }

    ${media.compactLandscape} {
        padding-top: clamp(2.5rem, 8vh, 3.5rem);
        padding-bottom: 48px;
    }

    ${media.tabletLandscape} {
        padding-top: 6%;
        padding-bottom: 56px;
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

    ${media.narrowPortrait}, ${media.compactLandscape} {
        padding: 4%;
    }
`;

const getNewsParallaxLayout = (layoutProfile) => {
    if (layoutProfile === 'mobileLandscape') {
        return { contentFactor: 1.35, footerOffset: 2.05, footerFactor: 0.32 };
    }
    if (layoutProfile === 'tabletLandscape') {
        return { contentFactor: 1.2, footerOffset: 1.9, footerFactor: 0.3 };
    }
    if (layoutProfile === 'mobile' || layoutProfile === 'tablet') {
        return { contentFactor: 1.85, footerOffset: 2.35, footerFactor: 0.35 };
    }
    return { contentFactor: 1.05, footerOffset: 1.72, footerFactor: 0.32 };
};

const NewsComponent = ({newsList}) => {
    const router = useRouter();
    const { layout: layoutProfile } = useViewport();

    const handleClickCb = (id) => {
        router.push(`/news/${id}`);
    };

    const heroFactor = 1.01;
    const contentOffset = 0.78;
    const layout = getNewsParallaxLayout(layoutProfile);

    return (
        <>
        <ParallaxLayer
            offset={0}
            speed={0}
            factor={heroFactor}
            style={{
                backgroundImage: url('/monkeyHillsHero.png', true),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        />

       {/*  <ParallaxLayer
            offset={heroFactor * 0.85}
            speed={0}
            factor={1}
            style={{ backgroundColor: '#FAF7EF' }}
        /> */}

        <ParallaxLayer
            offset={contentOffset + 0.1}
            speed={0.6}
            factor={layout.contentFactor}
            style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
               /* backgroundColor: '#FAF7EF', */ 
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
        />
    </>
    );
};

export default NewsComponent;
