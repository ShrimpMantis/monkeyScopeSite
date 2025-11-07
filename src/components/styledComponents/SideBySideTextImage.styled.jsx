import styled from "styled-components";
import ImageContainerStyled from "./ImageContainer.styled";
import TextContainerComponent from "../TextContainer.component";
import { memo } from "react";

const StyledParent = styled.div`
    display: flex;
    width:100%;
    height: 100%;
    gap:10px;
    justify-content: space-evenly;
    padding:2%;
    flex-direction: ${props=> props.$isFlip ? 'row-reverse' : 'row'};
    text-align: left;
    
`;

const StyledImageContainer = styled.div`
    width:40%;
    flex-basis: 1 1 400px;
    overflow: hidden;
`;

const StyleTextCompContainer = styled.div`
    width: 50%;
    flex-basis: 1 1 600px
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