'use client'
import { ParallaxLayer } from '@react-spring/parallax';
import React, { useEffect, useState } from 'react';
import { url } from '@/utilities/helper';
import TextContainerComponent from '@/components/TextContainer.component';
import styles from '@/utilities/page.module.css';
import GridComponent from '@/components/Grid.component';
import StaggeredContainer from '@/components/StaggeredContainer.component';
import { useRouter } from 'next/navigation';

const About = ({teamInfo, mission, vision, history, specializations}) => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const updateViewport = () => setIsMobile(mediaQuery.matches);
        updateViewport();
        mediaQuery.addEventListener('change', updateViewport);
        return () => mediaQuery.removeEventListener('change', updateViewport);
    }, []);

    const heroFactor = isMobile ? 1 : 3;

    const handleClickCb = () => {
        router.push('/productions');
    };
    const handleClickOnTeam = (id) => {
        router.push(`/about/${id}`);
    }
    return (
        <>
                <ParallaxLayer offset={0} speed={0} factor={heroFactor}
                    style={{
                    backgroundImage: url('/bhagoruwa.png', true),
                    backgroundSize: isMobile ? 'cover' : 'contain',
                    ...(isMobile ? { backgroundPosition: 'center' } : {}),
                }}>
                
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#FAF7EF' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#FAF7EF' }} />
                {/* 805E73 */}
                {/* 87BCDE */}

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

          {/*       <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
                </ParallaxLayer> */}

                {/* <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer> */}

                <ParallaxLayer offset={1} speed={1.5} factor={3}>
                    <div className={styles.section}>
                        <div className={styles.contentContainer}>
                            <TextContainerComponent
                                content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages `}
                                isPrimary={true}
                            >
                             <h2>{"Mission"}</h2>
                             </TextContainerComponent>

                            <TextContainerComponent
                                content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages `}
                                isPrimary={true}
                            >
                                <h2>{"Vision"}</h2>
                            </TextContainerComponent>

                            <TextContainerComponent
                                content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages `}
                                isPrimary={true}
                            >
                                <h2>{"History"}</h2>
                            </TextContainerComponent>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0} factor={0.99}>
                    <div className={styles.section}>
                        <div className={styles.contentContainer}>
                            <GridComponent
                                childrenList={teamInfo.teamList}
                                clickCb={handleClickOnTeam}
                                mobileTileGap="100px"
                            >
                                <h2>{teamInfo.title}</h2>
                            </GridComponent>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={3} speed={1.5} factor={0.99}>
                    <div className={styles.section}>
                        <div className={styles.contentContainer}>
                            <StaggeredContainer sections={specializations} 
                                    btnText={'Portfolio'} clickCb={handleClickCb}>
                                <h2>Our Specializations</h2>
                            </StaggeredContainer>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={5}
                    speed={-0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: url('/bhag.png', true),
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                </ParallaxLayer>

                {/* <ParallaxLayer offset={4} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                </ParallaxLayer> */}
        </>
    );
}

export default About;