'use client'
import React, { memo } from 'react';
import TextContainer from '@/components/TextContainer.component';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import VerticalScroller from '@/components/VerticalScroller.component';
import HorizontalCarousel from '@/components/HorizontalCarousel.component';
import { url } from '@/utilities/helper';
import styles from '@/utilities/page.module.css';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import ContactUsComponent from '@/components/Contactus.component';
import { media, breakpoints } from '@/utilities/breakpoints';
import { useViewport } from '@/utilities/viewport';
import { InformationButton } from '@/components/styledComponents/InformationButton.styled';

const laptopMinWidth = parseInt(breakpoints.laptop, 10);

const getHomeParallaxLayout = (width) => {
  if (width >= laptopMinWidth) {
    return { footerFactor: 0.32 };
  }
  return { footerFactor: 0.7 };
};

const HeroLogo = styled.img`
  width: 40%;

  ${media.tablet} {
    width: min(70vw, 280px);
  }

  ${media.compactLandscape} {
    width: min(45vw, 220px);
  }

  ${media.tabletLandscape} {
    width: min(50vw, 260px);
  }
`;

const HomeSection = styled.div`
  ${media.tablet} {
    padding-top: 2%;
  }

  ${media.compactLandscape} {
    padding-top: 1%;
  }
`;

const ProductionsSection = styled.div`
  min-height:4000px;
  ${media.tablet} {
    height: auto;
    min-height: 100%;
  }
`;

const ProductionsContentContainer = styled(HomeSection)`
  background-color: white;
  opacity: 70%;
  height: 100%;
  width: 100%;
  padding: 3%;
  position: relative;
  z-index: 1;

  ${media.tablet} {
    height: auto;
    min-height: 100%;
    padding: 5% 4%;
    opacity: 85%;
  }

  ${media.compactLandscape} {
    padding: 3% 4%;
    min-height: auto;
  }

  ${media.tabletLandscape} {
    padding: 4%;
  }
`;

const ProductionsCarouselWrap = styled.div`
  margin-top: 5px;
  padding: 2%;
  position: relative;
  z-index: 2;
`;

const ContactSection = styled.div`
  width: 100%;
  padding-bottom: clamp(80px, 10vh, 120px);

  ${media.tablet} {
    padding-bottom: clamp(140px, 20vh, 200px);
  }

  ${media.compactLandscape} {
    padding-bottom: clamp(64px, 12vh, 100px);
  }

  ${media.tabletLandscape} {
    padding-bottom: clamp(80px, 14vh, 120px);
  }

  ${media.laptopUp} {
    padding-bottom: clamp(40px, 5vh, 64px);
  }
`;

const Home = ({mediaItems, productions}) => {
  const router = useRouter();
  const { width } = useViewport();
  const layout = getHomeParallaxLayout(width);

  const productionsFactor = 1;
  const newsOffset = 3;
  const awardsOffset = 4;
  const contactOffset = 5;
  const footerOffset = 6;

  const handleItemClicked = (itemId) => {
    router.push(`/news/${itemId}`);
  };

  const submitHandler = (e) => {
    console.log("formSubmit", e);
  };
    return (
      <>
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

        <ParallaxLayer
          offset={2}
          speed={-0.1}
          factor={productionsFactor}
          style={{
             backgroundImage: url('/kukili3.png', true),
             backgroundSize: 'cover',
             backgroundPosition: 'center',
            
          }}>
             <ProductionsSection className={styles.section}>
                <ProductionsContentContainer>
                   <h2>Productions</h2>
                   <ProductionsCarouselWrap>
                      <HorizontalCarousel items={productions} variant="productions" />
                   </ProductionsCarouselWrap>
                </ProductionsContentContainer>
              </ProductionsSection>
        </ParallaxLayer>

        <ParallaxLayer
          offset={newsOffset}
          speed={-0.3}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: url('/kukili3.png', true),
          }}
        >
           <div className={styles.section}>
            <HomeSection className={styles.contentContainer}>
                    <VerticalScroller 
                        items={mediaItems}
                        key={1}
                        itemClickedHandler={handleItemClicked}
                    >
                      <TextContainer 
                        title={'Latest News'}
                        showButton={false}
                        btnText={'More News'}
                        hrefParamValue={'/news'}
                      >
                         <h2>{"Latest News"}</h2>
                         <p>
                          <InformationButton hrefParam={'/news'}>
                            More News
                          </InformationButton>
                         </p>
                      </TextContainer>
                       
                    </VerticalScroller>
            </HomeSection>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <HeroLogo src={url('/monkeyScope.png', false)} alt="MonkeyScope" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div className={styles.section}>
                <HomeSection className={styles.contentContainer}>
                 <TextContainer 
                    title={'About'}
                    content={`Monkey Scope is a premier, forward-thinking production house born from the vibrant cultural landscape of Assam, 
                      Northeast India, built with a sharp, uncompromising global vision. 
                      We don’t just create visuals; we capture the rhythm of a region that pulses with untapped stories, 
                      cinematic landscapes, and raw artistic talent.
                      Our portfolio spans the entire spectrum of modern visual storytelling. 
                      We cross genres, push aesthetic boundaries, and fluidly transition between intimate independent art and massive commercial scale. 
                      Monkey Scope has become a trusted name for:
Mainstream Commercials & Cinema: Designing and producing high-production-value music videos for major Bollywood artists and theatrical motion pictures.
Independent & Corporate Labels: Collaborating with leading independent music labels to shape the visual identity of breakout artists.
Cultural Preservation & Innovation: Partnering with iconic folk-rock bands to translate regional musical heritage into cutting-edge, contemporary visual narratives.`}
                    isPrimary={true}
                    showButton={true}
                    btnText={'More'}
                    hrefParamValue={'/about'}
                 >
                  <h2>{"About"}</h2>
                  </TextContainer>
                </HomeSection>
             </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={awardsOffset}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
           >
           
          <div className={styles.section}>
              <HomeSection className={styles.contentContainer}>
                 <TextContainer 
                  content={`
Driven by a relentless pursuit of cinematic excellence, Monkey Scope has quickly earned critical acclaim both regionally and nationally. 
Our foundational creative team leads by example: co-founder Kulanandini Mahanta was honored with the prestigious National Film Award for her 
groundbreaking feature film *Emuthi Puthi*, while co-founder Poonam Gurung secured the Prag Cine Award for Best Actress, cementing our house's reputation for top-tier storytelling and performance. 
This caliber of artistry extends seamlessly into our music production pipelines; notably, our music video *Panthoibi* caught international attention, 
being featured in *Rolling Stone India* for its striking visual aesthetic and cultural resonance. At Monkey Scope, our accolades reflect our core mission: bringing powerful, 
award-winning narratives from the heart of the Northeast to the global stage.`}
                  showButton={true}
                  btnText={'More Info'}
                  hrefParamValue={'/awards'}
                  className={styles.textContainer}
                 >
                  <h2>{"Awards"}</h2>
                </TextContainer>
              
              </HomeSection>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={contactOffset}
          speed={0}
          factor={1}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundImage: url('/bhag.png', true),
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          >
             <ContactSection className={styles.section}>
              <HomeSection className={styles.contentContainer}>
                  <ContactUsComponent handleSubmitCb={submitHandler}>
                    <h2>{"Contact us"}</h2>
                  </ContactUsComponent>
              </HomeSection>
            </ContactSection>
        </ParallaxLayer>

        <ParallaxLayer
          offset={footerOffset}
          speed={0}
          factor={layout.footerFactor}
          style={{ backgroundColor: 'transparent' }}
        />
        
      </>
        
    );
}
export default memo(Home);