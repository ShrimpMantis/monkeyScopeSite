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
    flex-basis: 1 1 400px
`;

const StyleTextCompContainer = styled.div`
    width: 50%;
    flex-basis: 1 1 600px
`;


const SideBySideTextImageContainer = ({isFlip, imageInfo, content, title}) => {
   
    console.log("isFlip", isFlip);
    return (
        <StyledParent $isFlip={isFlip}>
           <StyledImageContainer>
                <ImageContainerStyled 
                    src={imageInfo.src}
                    alt={imageInfo.alt}
                />
            </StyledImageContainer>
            <StyleTextCompContainer>
                <TextContainerComponent
                    showButton={false}
                    content={content}
                >
                   <h3>{title}</h3> 
                </TextContainerComponent>
            </StyleTextCompContainer>
        </StyledParent>
    );
};

export default memo(SideBySideTextImageContainer);