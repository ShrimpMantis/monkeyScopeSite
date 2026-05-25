'use client'
import React, { memo } from 'react';
import TextContainer from '@/components/TextContainer.component';
import { ParallaxLayer } from '@react-spring/parallax';
import VerticalScroller from '@/components/VerticalScroller.component';
import HorizontalCarousel from '@/components/HorizontalCarousel.component';
import { url } from '@/utilities/helper';
import styles from '@/utilities/page.module.css';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import ContactUsComponent from '@/components/Contactus.component';
import { media } from '@/utilities/breakpoints';

const StyledAboutComponent = styled(TextContainer)`
  p {
    font-size: 25px;
  }

  ${media.tablet} {
    p {
      font-size: clamp(0.95rem, 3.5vw, 1.1rem);
    }
  }
`;

const HeroLogo = styled.img`
  width: 40%;

  ${media.tablet} {
    width: min(70vw, 280px);
  }
`;

const HomeSection = styled.div`
  ${media.tablet} {
    padding-top: 2%;
  }
`;

const ProductionsSection = styled.div`
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
`;

const ProductionsCarouselWrap = styled.div`
  margin-top: 5px;
  padding: 2%;
  position: relative;
  z-index: 2;
`;

const Home = ({mediaItems, productions}) => {
  const router = useRouter();

  const productionsFactor = 1;
  const newsOffset = 3;
  const awardsOffset = 4;
  const contactOffset = 5;

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
             backgroundPosition: 'center'
          }}>
             <ProductionsSection className={styles.section}>
                <ProductionsContentContainer>
                   <h2>Productions</h2>
                   <ProductionsCarouselWrap>
                      <HorizontalCarousel items={productions} />
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
                 <StyledAboutComponent 
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
                    btnText={'More'}
                    hrefParamValue={'/about'}
                 >
                  <h2>{"About"}</h2>
                  </StyledAboutComponent>
                </HomeSection>
             </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={awardsOffset}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
           >
           
          <div className={styles.section}>
              <HomeSection className={styles.contentContainer}>
                 <TextContainer 
                  content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                  containing Lorem Ipsum passages, `}
                  showButton={true}
                  btnText={'More Info'}
                  hrefParamValue={'/awards'}
                 >
                  <h2>{"Awards"}</h2>
                </TextContainer>
              
              </HomeSection>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={contactOffset}
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
             <div className={styles.section}>
              <HomeSection className={styles.contentContainer}>
                  <ContactUsComponent handleSubmitCb={submitHandler}>
                    <h2>{"Contact Us"}</h2>
                  </ContactUsComponent>
              </HomeSection>
            </div>
        </ParallaxLayer>
        
      </>
        
    );
}
export default memo(Home);