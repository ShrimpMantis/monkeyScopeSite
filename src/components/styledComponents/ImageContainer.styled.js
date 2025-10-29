import styled from "styled-components";

const ImageContainerStyled = styled.img`
    cursor: pointer;
    width:100%;
    height:100%;
    &:hover{ 
        transition: transform 0.3s ease;
        transform: scale(1.05);
    }
    object-fit: cover;
    overflow: hidden;
`;

export default ImageContainerStyled;