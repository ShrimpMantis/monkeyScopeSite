'use client';
import { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { url } from "@/utilities/helper";
import { useParams } from "next/navigation";
import SideBySideTextImageStyled from "@/components/styledComponents/SideBySideTextImage.styled";

const action = async (id) => {
    const baseUrl = '/api/teamDetail';
    const currUrl = `${baseUrl}?id=${id}`;
    const fetchResult = await fetch(currUrl);
    const teamDeets = await fetchResult.json();
    return teamDeets;
   };

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
        <>
        <ParallaxLayer
                offset={0}
                speed={1}
                factor={1}
                style={{
                    backgroundImage: url(`${detail?.mainImage?.src}`, true),
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom 30%'
                // backgroundColor:'red'
        }}
        />

        {detail &&  <ParallaxLayer
                offset={1}
                speed={1}
                factor={1}
            >
                <SideBySideTextImageStyled 
                    content={detail.content}
                    title={"Title"}
                    imageInfo={detail.imageInfo}
                    isFlip={false}
                    hrefValue={detail.link}
                    btnText={"more"}
                >
                    <h1>Name</h1>
                </SideBySideTextImageStyled>
            </ParallaxLayer>}
           
        </>
        
    );
}

export default Page;