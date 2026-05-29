'use client'
import ProductionDetail from "@/components/ProductionDetail";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { url } from "@/utilities/helper";
import styles from '@/utilities/page.module.css';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "@/utilities/breakpoints";
import { useViewport } from "@/utilities/viewport";

const getDetailParallaxLayout = (layout) => {
    if (layout === 'mobile') {
        return { pages: 1.85, offset: 0.42, factor: 1.28 };
    }
    if (layout === 'mobileLandscape' || layout === 'tabletLandscape') {
        return { pages: 1.45, offset: 0.52, factor: 0.78 };
    }
    if (layout === 'tablet') {
        return { pages: 1.35, offset: 0.55, factor: 0.72 };
    }
    return { pages: 1.30, offset: 0.55, factor: 0.62 };
};

const action = async (id) => {
 const baseUrl = '/api/productionDetail';
 const currUrl = `${baseUrl}?id=${id}`;
 const fetchResult = await fetch(currUrl);
 const productionDeets = await fetchResult.json();
 return productionDeets;
};

const StyledHeader = styled.h1`
    text-align:center;
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    padding: 0 4%;
`;

const StyledDetailSection = styled.div`
    ${media.narrowPortrait} {
        padding-top: 8%;
    }

    ${media.compactLandscape} {
        padding-top: clamp(2.5rem, 10vh, 3.5rem);
    }

    ${media.tabletLandscape} {
        padding-top: 6%;
    }
`;

const Page = () => {
    const params = useParams();
    const [detail, setDetail] = useState(null);
    const { layout } = useViewport();
    const detailParallax = getDetailParallaxLayout(layout);

    useEffect(() => {
        const res = async () => {
            const result = await action(params.id);
            setDetail(result);
        }
        res();
    }, []);

    return ( 
        detail &&
        (
        <Parallax pages={detailParallax.pages} >
            <ParallaxLayer
                offset={0}
                speed={1}
                factor={0.25}
                style={{
                    backgroundImage: url(`${detail?.mainImage?.src}`, true),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </ParallaxLayer>

          
            <ParallaxLayer offset={0.30} speed={0.8} style={{ opacity: 0.1}} >
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>
           
            <ParallaxLayer offset={0.45} speed={1.5} factor={0.1}>
                <StyledHeader>{detail.title}</StyledHeader>
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
                offset={detailParallax.offset}
                speed={2}
                factor={detailParallax.factor}
                style={{ overflow: 'visible' }}
            >
                <StyledDetailSection className={styles.section}>
                    <div className={styles.contentContainer}>
                        <ProductionDetail
                            content={detail.content}
                            title={"Synopsis"}
                            imageInfo={detail.mainImage}
                            images={detail.images}
                            hrefParam={detail.link}
                        >
                            <div>
                                <h3>{"Credits"}</h3>
                                <div>
                                    {detail.credits && Object.keys(detail.credits).map((key, index) => {
                                        const currString = Array.isArray(detail.credits[key]) 
                                                            && detail.credits[key].length > 0 
                                                            ? detail.credits[key].join(',') 
                                                            : detail.credits[key];
                                        const currTitle = Array.isArray(detail.credits[key]) 
                                                            ? detail.credits[key].length > 0
                                                            : ((detail.credits[key]) !== '' && typeof detail.credits[key] !== 'undefined');
                                        return (
                                            detail.credits[key]  &&
                                                <li key={`${index}-parent-li`}>
                                                    {currTitle && <span>{key}</span>}
                                                    {currTitle && <span>{':'}</span>}
                                                    <span>{currString}</span>
                                                </li>
                                        );
                                    })}
                                </div>
                            </div>
                        </ProductionDetail>
                    </div>
                </StyledDetailSection>
            </ParallaxLayer>

        </Parallax>
        )
    );
}

export default Page;