'use client'
import ProductionDetail from "@/components/ProductionDetail";
import { ParallaxLayer } from "@react-spring/parallax";
import { url } from "@/utilities/helper";
import styles from '@/utilities/page.module.css';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const action = async (id) => {
 const baseUrl = '/api/productionDetail';
 const currUrl = `${baseUrl}?id=${id}`;
 const fetchResult = await fetch(currUrl);
 const productionDeets = await fetchResult.json();
 return productionDeets;
};

const StyledHeader = styled.h1`
    text-align:center;
`;

const Page = () => {
    const params = useParams();
    const [detail, setDetail] = useState(null);

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
        <>
            <ParallaxLayer
                offset={0}
                speed={1}
                factor={1}
                style={{
                    backgroundImage: url(`${detail?.mainImage?.src}`, true),
                    backgroundSize: 'contain',
                   // backgroundColor:'red'
                }}
            >
                {/* <Image src={detail.mainImage.src} objectFit="contain" fill={true} alt={detail.mainImage.alt}/> */}
            </ParallaxLayer>

            <ParallaxLayer offset={0.99} speed={0.8} style={{ opacity: 0.1}}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.8} style={{ opacity: 0.1}}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>
            <ParallaxLayer offset={0.99} speed={0.8} style={{ opacity: 0.1}}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={2} >
                <StyledHeader>{detail.title}</StyledHeader>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer
                offset={1}
                speed={4}
                factor={0.5}
            >
                <div className={styles.section}>
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
                </div>
            </ParallaxLayer>

        </>
        )
    );
}

export default Page;