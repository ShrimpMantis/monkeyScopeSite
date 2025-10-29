'use client'
import React, { memo, useRef } from 'react';
import TextContainer from '@/components/TextContainer.component';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import VerticalScroller from '@/components/VerticalScroller.component';
import HorizontalCarousel from '@/components/HorizontalCarousel.component';
import { url } from '@/utilities/helper';
import styles from '@/utilities/page.module.css';

const Home = ({mediaItems, productions}) => {

  const parallax = useRef(null);
    return (
      <>
      {/* div className={styles.mainContainer}</> */}

      <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={6}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('/hero2.png', true),
            backgroundSize: 'cover',
          }}
        />

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

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('/monkeyScope.png', false)} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={1}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            backgroundImage: url('/bhag.png', true),
            backgroundSize: 'cover',
          // }}>
          {/* <img src={url('/bhagoruwa.png', false)} style={{ width: '100%' }} /> */}
        {/* </ParallaxLayer> */} 

        <ParallaxLayer
          offset={2}
          speed={-0.1}
          factor={1}
          style={{
             backgroundImage: url('/kukili3.png', true),
             backgroundSize: 'cover',
             backgroundPosition: 'center'
          }}>
             <div className={styles.section}>
                <div className={styles.contentContainer}>
                   <h2>Productions</h2>
                   <div style={{marginTop: '5px', padding: '2%', zIndex:'999'}}>
                      <HorizontalCarousel items={productions}/>
                   </div>
                </div>
              </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0.3}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: url('/kukili3.png', true),
          }}
        >
           <div className={styles.section}>
            <div className= {styles.contentContainer}>
                    <VerticalScroller 
                        items={mediaItems}
                        key={1}
                    />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('/monkeyScope.png', false)} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <img src={url('/monkeyScope.png', false)} style={{ width: '20%' }} /> */}
            <div className={styles.section}>
                <div className={styles.contentContainer}>
                 <TextContainer 
                  // remove this later
                    title={'About'}
                    content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                  containing Lorem Ipsum passages, `}
                  isPrimary={true}
                  showButton={true}
                 >
                  <h2>{"About"}</h2>
                  </TextContainer>
                </div>
             </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          {/* <img src={url('/monkeyscope.png', false)} style={{ width: '40%' }} /> */}
          <div className={styles.section}>
              <div className={styles.contentContainer}>
                 <TextContainer 
                  content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                  containing Lorem Ipsum passages, `}
                  showButton={true}
                 >
                  <h2>{"Awards"}</h2>
                </TextContainer>
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
          onClick={() => parallax.current.scrollTo(0)}>
          {/* <img src={url('/monkeyscope.png', false)} style={{ width: '40%' }} /> */}
          {/* <div className={styles.section}>
                <div className={styles.contentContainer}>
                 <TextContainer 
                  // remove this later
                    title={''}
                    content={` `}
                 />
                </div>
             </div> */}
        </ParallaxLayer>

      </Parallax>
      </div>
 
          
          
          {/* <div className={styles.section}>
              <div className={styles.widgetContainer}> work reel</div>
          </div>
          <div className={styles.section}>
          <div className={styles.widgetContainer}> in the press</div>
          </div>
            </div> */} 
      </>
        
    );
}
export default memo(Home);