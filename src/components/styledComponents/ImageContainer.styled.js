import styled from "styled-components"

const ImageContainerStyled = styled.img`
    cursor: pointer;
    width:100%;
    height:100%;
    &:hover{ 
        transform: scale(1.05);
    }
`;

export default ImageContainerStyled;