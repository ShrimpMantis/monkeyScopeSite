'use client'
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import styled from "styled-components";
import { media } from "@/utilities/breakpoints";
import { touchTarget } from "@/utilities/accessibility";

const StyledWrapper = styled.div`
    width: 100%;
    height: ${props => props.$shouldShow ? '30%' : '0'};
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
    background-color: #1A1A1A;
    transition: 0.5s ease-out;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: hidden;
    pointer-events: ${props => props.$shouldShow ? 'auto' : 'none'};

    ${media.tablet} {
        height: ${props => props.$shouldShow ? 'auto' : '0'};
        min-height: ${props => props.$shouldShow ? '120px' : '0'};
        padding: ${props => props.$shouldShow ? '2% 0' : '0'};
    }
`;

const StyledFooterUnits = styled.div`
    width: 10%;
    display: ${props => props.$shouldShow ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    min-width: ${touchTarget.min};
    min-height: ${touchTarget.min};
    text-align: center;

    ${media.tablet} {
        width: auto;
    }
`;

const StyledIconsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: #F7F4E8;
    margin: auto;
    align-items: center;
    justify-content: space-between;

    ${media.tablet} {
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }
`;

const StyledImageLogo = styled.img`
    width: ${props => props.$shouldShow ? '10%' : '0'};

    ${media.tablet} {
        width: ${props => props.$shouldShow ? 'min(40vw, 160px)' : '0'};
    }
`;

const ImageWrapper = styled.div`
    display: ${props => props.$shouldShow ? 'flex' : 'none'};
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
            <ImageWrapper $shouldShow={shouldRender}>
                <StyledImageLogo $shouldShow= {shouldRender} src="/whiteLogoText.webp" alt="monkeyScopeText"/>
            </ImageWrapper>
        </StyledWrapper>
    );
};

export default FooterComponent;
