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
 h2 {
    text-decoration-line: none;
 }

 ${media.tablet} {
    display: none;
 }
`;

const MobileTitleHeader = styled.div`
  display: none;

  ${media.tablet} {
    display: block;
    width: 100%;
    padding: 0 4% 20px;
    text-align: center;
    box-sizing: border-box;

    h2 {
      text-decoration-line: none;
    }
  }
`;

const StyledMediaContainer = styled(ImageTextContainer)`
  width: 61%;
  margin-left: auto;
  flex-shrink: 0;

  ${media.tablet} {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
  }
`;

const StyledScrollerWrapper = styled.div`
  ${media.tablet} {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
  }
`;

const StyledParallaxContent = styled.div`
    width: 100%;
    padding: 10% 10% 10% 2%;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;

    ${media.tablet} {
        padding: 4% 5%;
        justify-content: stretch;
    }
`;

const VerticalScroller = ({items, itemClickedHandler, children}) => {
    const numberOfPages = items.length;
    const alignCenter = { display: 'flex', alignItems: 'center'};
    const fetchStickyLayerStyle = useCallback((justifyContentPosition) => {
        return {
            ...alignCenter,
            pointerEvents: 'none',
            justifyContent: justifyContentPosition
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
                    <ParallaxLayer key={ind} offset={ind} speed={1.5} factor={0.99} 
                        style={fetchParallaxLayerStyle('flex-end')}
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
                            />
                        </StyledParallaxContent>
                    </ParallaxLayer>
            );
        });
    };

    return (
        <StyledScrollerWrapper>
            <MobileTitleHeader>{children}</MobileTitleHeader>
            <Parallax pages={numberOfPages} style={fetchParallaxStyle()} >
                <ParallaxLayer sticky={{start: 0, end: numberOfPages}} style={fetchStickyLayerStyle('flex-start')}>
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
