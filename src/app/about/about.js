'use client'
import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import { url } from '@/utilities/helper';
import TextContainerComponent from '@/components/TextContainer.component';
import styles from '@/utilities/page.module.css';
import GridComponent from '@/components/Grid.component';
import StaggeredContainer from '@/components/StaggeredContainer.component';
import { useRouter } from 'next/navigation';
import { useViewport } from '@/utilities/viewport';

const About = ({teamInfo, mission, vision, history, specializations}) => {
    const router = useRouter();
    const { isNarrow, isCompact } = useViewport();
    const useCompactHero = isNarrow || isCompact;

    const heroFactor = useCompactHero ? 1 : 3;
    const teamTileGap = isCompact ? '20px' : isNarrow ? '100px' : undefined;

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
                    backgroundSize: useCompactHero ? 'cover' : 'contain',
                    ...(useCompactHero ? { backgroundPosition: 'center' } : {}),
                }}>
                
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#FAF7EF' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#FAF7EF' }} />
                {/* 805E73 */}
                {/* 87BCDE */}
                {/* #FAF7EF, #FAF7EF */}

                <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none', opacity: 0.1 }}>
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

                <ParallaxLayer offset={1} speed={1.5} factor={3}>
                    <div className={styles.section}>
                        <div className={styles.contentContainer}>
                            <TextContainerComponent
                                content={`We believe the most profound truths are found in the unexpected. Our mission is to take universal human stories and flip the script, telling them through a quirky, unconventional, and fiercely original lens. We break away from standard formulas to deliver cinematic experiences that surprise the senses, challenge conventions, and linger in the mind long after the screen goes dark. By blending deep, relatable themes with an eccentric visual style, we make the familiar feel entirely brand new.`}
                                isPrimary={true}
                            >
                             <h2>{"Mission"}</h2>
                             </TextContainerComponent>

                            <TextContainerComponent
                                content={`At the heart of Monkey Scope is a singular, unwavering mission: "to bring to life the stories we have lived in." We exist to carve out a creative sanctuary for the relentless, creating a space built by and for the ones who refuse to give up. The world is full of quiet, forgotten narratives that carry an unmistakable, powerful charm. These are the stories that slip through the cracks of mainstream media but hold the very soul of who we are. Our purpose is to unearth these hidden gems, giving voice to the resilient and breathing cinematic life into the spaces, struggles, and triumphs that shape our collective memory. We do not just capture images; we honor the survival, the beauty, and the stubborn grit of our people, transforming local truths into universal art.

We tell stories. You decide what they mean. We make films. The rest is yours.`}
                                isPrimary={true}
                            >
                                <h2>{"Vision"}</h2>
                            </TextContainerComponent>

                            <TextContainerComponent
                                content={`Monkey Scope began simply because we needed a name for the work we were already completely immersed in. Looking back, we realized we were unknowingly doing the full, heavy lifting of a production house, just without calling ourselves one. Monkey Scope Motion Pictures was born out of that reality, created out of doing first and defining later.We built our foundation on the ground, creating momentum through pure action before ever stopping to write a title on a door. Today, that same raw, uncalculated energy pushes us forward. Monkey Scope is driven by a singular instinct: tell the story truthfully, and the rest will follow.`}
                                isPrimary={true}
                            >
                                <h2>{"History"}</h2>
                            </TextContainerComponent>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={isNarrow? 2 : 2} speed={isNarrow? 2: 0} factor={0.45}>
                    <div className={styles.section}>
                        <div className={styles.contentContainer}>
                            <GridComponent
                                childrenList={teamInfo.teamList}
                                clickCb={handleClickOnTeam}
                                mobileTileGap={teamTileGap}
                            >
                                <h2>{teamInfo.title}</h2>
                            </GridComponent>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.97} speed={1} factor={0.25}>
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
                    offset={isNarrow? 5.9 : 4.5}
                    speed={isNarrow? 1:0}
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