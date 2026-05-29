import { memo } from "react";
import ImageContainerStyled from "./ImageContainer.styled";
import styled from "styled-components";
import { media } from "@/utilities/breakpoints";

const StyledProfileInfoWrapper = styled.div`
    height: 20%;
`;
const StyledImageWrapper = styled.div`
    height: 400px;
    overflow:hidden;

    ${media.narrowPortrait} {
        height: 220px;
    }

    ${media.compactLandscape} {
        height: min(160px, 32vh);
    }

    ${media.tabletLandscape} {
        height: min(200px, 36vh);
    }

    ${media.mobile} {
        height: 300px;
    }
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
const StyledFlashCard = styled(FlashCard)`
    display:flex;
    flex-direction:column;
    
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    p {
        line-height: 1.6;
    }

    ${media.tablet} {
        p {
            font-size: max(1rem, 16px);
        }
    }
`;

export default memo(StyledFlashCard);
