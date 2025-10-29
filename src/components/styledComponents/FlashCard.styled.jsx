import { memo } from "react";
import ImageContainerStyled from "./ImageContainer.styled";
import styled from "styled-components";

const FlashCard = ({title, content, imageInfo, className}) => {
    return (
        <div className={className}>
            <ImageContainerStyled src={imageInfo.src} alt={imageInfo.alt}/>
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
};

const StyledFlashCard = styled(FlashCard)`
    display:flex;
    flex-direction:column;
    flex: 1 1 350px;
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export default memo(StyledFlashCard);