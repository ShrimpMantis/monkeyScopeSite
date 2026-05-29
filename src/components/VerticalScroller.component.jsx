import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { memo, useCallback } from "react";
import TextContainer from "./TextContainer.component";
import styled from "styled-components";
import ImageTextContainer from "./ImageText.component";
import { media } from "@/utilities/breakpoints";
import styles from "@/utilities/page.module.css";

const StyledTextStickyContainer = styled(TextContainer)`
 width: 30%;
 flex-shrink: 0;
 z-index: 2;
 pointer-events: auto;
 h2 {
    text-decoration-line: none;
 }

 ${media.narrowPortrait} {
    display: none;
 }

 ${media.compactLandscape}, ${media.tabletLandscape} {
    display: block;
    width: 28%;
    min-width: 160px;
 }
`;

const MobileTitleHeader = styled.div`
  display: none;

  ${media.narrowPortrait} {
    display: block;
    width: 100%;
    padding: 0 4% 20px;
    text-align: center;
    box-sizing: border-box;
   
    h2 {
      text-decoration-line: none;
    }
  }

  ${media.compactLandscape}, ${media.tabletLandscape} {
    display: none;
  }
`;

const StyledMediaContainer = styled(ImageTextContainer)`
  width: 61%;
  flex-shrink: 0;

  ${media.narrowPortrait} {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    margin-left: auto;
  }

  ${media.compactLandscape}, ${media.tabletLandscape} {
    width: 68%;
    margin-left: auto;
    max-width: none;
  }
`;

const StyledScrollerWrapper = styled.div`
  ${media.narrowPortrait} {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
  }

  ${media.compactLandscape}, ${media.tabletLandscape} {
    min-height: auto;
    display: block;
  }
`;

const StyledParallaxContent = styled.div`
    width: 100%;
    padding: 10% 10% 10% 2%;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    height: 900px;

    ${media.narrowPortrait} {
        padding: 4% 5%;
        justify-content: stretch;
        height: min(85vh, 640px);
    }

    ${media.compactLandscape} {
        padding: 3% 4%;
        height: min(88vh, 480px);
        justify-content: flex-end;
    }

    ${media.tabletLandscape} {
        padding: 4% 5%;
        height: min(90vh, 560px);
        justify-content: flex-end;
    }
`;

/** Half-page steps keep panels tight; speed must stay 0 (see @react-spring/parallax Math.floor(offset)). */
const PANEL_SPACE_FACTOR = 0.5;

const VerticalScroller = ({items, itemClickedHandler, children}) => {
    const numberOfPages = items.length;
    const alignCenter = { display: 'flex', alignItems: 'center'};
    const fetchStickyLayerStyle = useCallback((justifyContentPosition) => {
        return {
            ...alignCenter,
            pointerEvents: 'none',
            justifyContent: justifyContentPosition,
            
        };
    }, []);
    const fetchParallaxLayerStyle = useCallback((justifyContentPosition) => {
        {
            return {
                ...alignCenter,
                justifyContent: justifyContentPosition,
                cursor: 'pointer',
            };
        };
    }, []);

    const fetchParallaxStyle = useCallback(() => {
        return {
            width: '100%',
            pointerEvents: 'auto'
        };
    }, []);

    const PagesList = ({pagesList, itemClickCallBack}) => {
        return pagesList.map((page, ind) => {
            return(
                     <ParallaxLayer key={ind} offset={ind * PANEL_SPACE_FACTOR} speed={0} factor={1} 
                        style={fetchParallaxLayerStyle('flex-start')}
                        onClick={() => itemClickCallBack(ind)}
                        >
                        <StyledParallaxContent>
                            <StyledMediaContainer
                                content={page.content}
                                title={page.title}
                                key={`${ind}-text-container`}
                                isPrimary={false}
                                hasPicture={true}
                                imageInfo={page.imageInfo}
                                className={styles.mediaContainer}
                            />
                        </StyledParallaxContent>
                    </ParallaxLayer>
            );
        });
    };

    const totalPages = ((numberOfPages - 1) * PANEL_SPACE_FACTOR) + 1;
    return (
        <StyledScrollerWrapper>
            <MobileTitleHeader>{children}</MobileTitleHeader>
            <Parallax pages={totalPages} style={fetchParallaxStyle()}
             className={styles.parallaxContainer}
            >
                <ParallaxLayer sticky={{start: 0, end: totalPages}} style={fetchStickyLayerStyle('flex-start')}>
                    <StyledTextStickyContainer
                        isPrimary={false}
                        hasPicture={false}
                        key={'sticky-div-001'}
                        className={styles.stickyContainer}
                    >
                       {children}
                    </StyledTextStickyContainer>
                </ParallaxLayer>
                <PagesList 
                     pagesList={items}
                     itemClickCallBack={itemClickedHandler}
                />
            </Parallax>
        </StyledScrollerWrapper>
    );
};

export default memo(VerticalScroller);
