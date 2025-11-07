'use client';
import { useEffect, useState } from "react";
import TextContainerComponent from "@/components/TextContainer.component";
import { useParams, useRouter } from "next/navigation";
import styles from '@/utilities/page.module.css';
import { ParallaxLayer } from "@react-spring/parallax";
import { url } from "@/utilities/helper";

const action = async ({id}) => {
    const currUrl = `/api/newsDetail?id=${id}`;
    const res = await fetch(currUrl);
    return res;
};

const Page = () => {
 const[newsDetail, setNewsDetail] = useState();
 const params = useParams();
 const router = useRouter();
 useEffect(() => {
    const result = async() => {
        const res = await action(params.id);
        const resultDetail = await res.json();
        setNewsDetail(resultDetail);
    };
    result();
 }, []);

    return (
        <>
            <ParallaxLayer 
                offset={0} 
                factor={1} 
                speed={1}
                style={{
                    backgroundImage: url('/kukili.png', true),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </ParallaxLayer>

            <ParallaxLayer offset={1} factor={1} speed={1}>
                <div className={styles.section}>
                    <div className={styles.contentContainer}>
                        {newsDetail && 
                                <TextContainerComponent 
                                        content={newsDetail.content}
                                        showButton={true}
                                        btnText={"More"}
                                        hrefParamValue={newsDetail.link}
                                >
                                    <h1>{newsDetail.title}</h1>
                                </TextContainerComponent> 
                            } 
                        {/* {newsDetail && <div>
                                <span><Facebook></Facebook></span>
                                <span><Twitter></Twitter></span>
                                <span></span>
                            </div>} */}
                    </div>
                </div>
            </ParallaxLayer>
        </>
     
    );
}

export default Page;