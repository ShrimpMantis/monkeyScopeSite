import styled from "styled-components";
import ImageContainerStyled from "./ImageContainer.styled";
import TextContainerComponent from "../TextContainer.component";
import { memo } from "react";
import { media } from "@/utilities/breakpoints";

const StyledParent = styled.div`
    display: flex;
    width:100%;
    height: 100%;
    gap:10px;
    justify-content: space-evenly;
    padding:2%;
    flex-direction: ${props=> props.$isFlip ? 'row-reverse' : 'row'};
    text-align: left;

    ${media.narrowPortrait} {
        flex-direction: column;
        padding: 4%;
        gap: 16px;
    }

    ${media.compactLandscape}, ${media.tabletLandscape} {
        flex-direction: ${props => props.$isFlip ? 'row-reverse' : 'row'};
        padding: 3% 4%;
        gap: 12px;
        align-items: flex-start;
    }
`;

const StyledImageContainer = styled.div`
    width:50%;
    flex-basis: 1 1 400px;
    overflow: hidden;

    ${media.narrowPortrait} {
        width: 100%;
        flex-basis: auto;
        max-height: 260px;
    }

    ${media.compactLandscape} {
        width: 38%;
        flex-basis: auto;
        max-height: min(42vh, 220px);
    }

    ${media.tabletLandscape} {
        width: 40%;
        max-height: min(48vh, 280px);
    }
`;

const StyleTextCompContainer = styled.div`
    width: 50%;
    flex-basis: 1 1 600px;

    ${media.narrowPortrait} {
        width: 100%;
        flex-basis: auto;
    }

    ${media.compactLandscape}, ${media.tabletLandscape} {
        width: 55%;
        flex: 1;
        min-width: 0;
    }
`;

const SideBySideTextImageContainer = ({isFlip, imageInfo, content, title, children, btnText, hrefValue}) => {
   
    return (
        <StyledParent $isFlip={isFlip}>
           <StyledImageContainer>
               { imageInfo && <ImageContainerStyled  src={imageInfo.src}
                    alt={imageInfo.alt}/>
                }
            </StyledImageContainer>
            <StyleTextCompContainer>
                <TextContainerComponent
                    showButton={true}
                    content={content}
                    btnText={btnText !== '' || btnText !== null || typeof btnText !== 'undefined' ? btnText : "More"}
                    hrefParamValue={hrefValue}
                >
                   <h3>{title}</h3>
                </TextContainerComponent>
                {children}
            </StyleTextCompContainer>
        </StyledParent>
    );
};

export default memo(SideBySideTextImageContainer);
