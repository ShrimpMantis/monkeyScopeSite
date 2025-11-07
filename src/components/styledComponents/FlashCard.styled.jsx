import { memo } from "react";
import ImageContainerStyled from "./ImageContainer.styled";
import styled from "styled-components";

const StyledProfileInfoWrapper = styled.div`
    height: 20%;
`;
const StyledImageWrapper = styled.div`
    height: 400px;
    overflow:hidden;
`;
const FlashCard = ({title, content, imageInfo, className}) => {
    return (
        <div className={className}>
            <StyledImageWrapper>
                <ImageContainerStyled src={imageInfo.src} alt={imageInfo.alt}/>
            </StyledImageWrapper>
            <StyledProfileInfoWrapper>
                <h3>{title}</h3>
                <p>{content}</p>
            </StyledProfileInfoWrapper>
        </div>
    );
};
//flex: 1 1 350px;
const StyledFlashCard = styled(FlashCard)`
    display:flex;
    flex-direction:column;
    
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export default memo(StyledFlashCard);