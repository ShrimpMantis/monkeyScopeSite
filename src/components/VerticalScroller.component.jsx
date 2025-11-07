import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { memo, useCallback } from "react";
import TextContainer from "./TextContainer.component";
import styled from "styled-components";
import ImageTextContainer from "./ImageText.component";

const StyledTextStickyContainer = styled(TextContainer)`
 width: 30%;
 h2 {
    text-decoration-line: none;
 }
`;

const StyledMediaContainer = styled(ImageTextContainer)`
  width: 61%; 
`;

const VerticalScroller = ({items, itemClickedHandler, children}) => {
    const numberOfPages = items.length;
    const alignCenter = { display: 'flex', alignItems: 'center'};
    const fetchStickyLayerStyle = useCallback((justifyContentPosition) => {
        return {
            ...alignCenter,
            //needed here so that clicking on the div works
            pointerEvents: 'none',
            justifyContent: justifyContentPosition
        };
    });
    const fetchParallaxLayerStyle = useCallback((justifyContentPosition) => {
        {
            return {
                ...alignCenter,
                justifyContent: justifyContentPosition,
                padding:'10%',
                cursor: 'pointer',
            };
        };
    }, items);

    const fetchParallaxStyle = useCallback(() => {
        return {
            width: '100%',
            pointerEvents: 'auto'
        };
    }, items);

    const PagesList = ({pagesList, itemClickCallBack}) => {
        return pagesList.map((page, ind) => {
            return(
                    <ParallaxLayer key={ind} offset={ind} speed={1.5} factor={0.32} 
                        style={fetchParallaxLayerStyle('flex-end')}
                        onClick={() => itemClickCallBack(ind)}
                        >
                        <StyledMediaContainer
                            content={page.content}
                            title={page.title}
                            key={`${ind}-text-container`}
                            isPrimary={false}
                            hasPicture={true}
                            imageInfo={page.imageInfo}
                        />
                    </ParallaxLayer>
            );
        });
    };

    return (
        <div>
            <Parallax pages={numberOfPages} style={fetchParallaxStyle()} >
                <ParallaxLayer sticky={{start: 0, end: numberOfPages}} style={fetchStickyLayerStyle('flex-start')}>
                    <StyledTextStickyContainer
                        isPrimary={false}
                        hasPicture={false}
                        key={'sticky-div-001'}
                    >
                       {children}
                    </StyledTextStickyContainer>
                </ParallaxLayer>
                <PagesList 
                     pagesList={items}
                     itemClickCallBack={itemClickedHandler}
                />
            </Parallax>
        </div>
    );
};

export default memo(VerticalScroller);