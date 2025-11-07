'use client'
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import styled from "styled-components";
//#89CFF0;
const StyledWrapper = styled.div`
    width: 100%;
    height: ${props => props.$shouldShow ? '30%' : '0%'};
    position: absolute;
    background-color: #1A1A1A;
    bottom:0%;
    transition: 0.5s ease-out;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const StyledFooterUnits = styled.div`
    width: 10%;
    display: ${props => props.$shouldShow ? 'block' : 'none'};
    text-align: center;
`;

const StyledIconsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: #F7F4E8;
    margin: auto;
    align-items: center;
    justify-content: space-between;
`;

const StyledImageLogo = styled.img`
    width: 10%;
`;

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding:1%;
`;

const FooterComponent = ({shouldRender}) => {
    return(
        <StyledWrapper $shouldShow={shouldRender}>
            <StyledIconsWrapper>
                <StyledFooterUnits $shouldShow={shouldRender}>
                        <Facebook/>
                </StyledFooterUnits>
                <StyledFooterUnits $shouldShow={shouldRender}>
                        <Instagram/>
                </StyledFooterUnits>
                <StyledFooterUnits $shouldShow={shouldRender}>
                        <Twitter/>
                </StyledFooterUnits>
                <StyledFooterUnits $shouldShow={shouldRender}>
                        <Youtube/>
                </StyledFooterUnits>
            </StyledIconsWrapper>
            <ImageWrapper>
                <StyledImageLogo src="/whiteLogoText.webp" alt="monkeyScopeText"/>
            </ImageWrapper>
        </StyledWrapper>
    );
};

export default FooterComponent;