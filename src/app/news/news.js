'use client';

import GridComponent from "@/components/Grid.component";
import { ParallaxLayer } from "@react-spring/parallax";
import styles from '@/utilities/page.module.css';
import { url } from "@/utilities/helper";
import { useRouter } from "next/navigation";
const NewsComponent = ({newsList}) => {
    const router = useRouter();
    const handleClickCb = (id) => {
        router.push(`/news/${id}`);
    };
    return (
        <>
        <ParallaxLayer offset={0} speed={0} factor={1.5}
                    style={{
                    backgroundImage: url('/bhagoruwa.png', true),
                    backgroundSize: 'contain'
                }}>
                
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} factor={1}>
            <div className={styles.section}>
                <div className={styles.contentContainer}>
                    <GridComponent childrenList={newsList} clickCb={handleClickCb}>
                            <h2>{"News"}</h2>
                    </GridComponent>
                </div>
            </div>
        </ParallaxLayer>
    </>
    );
};

export default NewsComponent;