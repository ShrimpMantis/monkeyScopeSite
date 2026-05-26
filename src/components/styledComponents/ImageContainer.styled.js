import styled from "styled-components";

const ImageContainerStyled = styled.img`
    cursor: pointer;
    width:100%;
    height:100%;
    &:hover{ 
        transition: transform 0.3s ease-in;
        transform: scale(1.05);
    }
    object-fit: cover;
    overflow: hidden;
   
    max-width: 600px;
    max-height: 600px;
    object-position: right;
    margin: auto;
`;

export default ImageContainerStyled;