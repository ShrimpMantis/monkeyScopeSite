import ImageContainerStyled from "@/components/styledComponents/ImageContainer.styled";
import styled from "styled-components";
import { media } from "@/utilities/breakpoints";


const ImageTextContainer = ({title, content, imageInfo, className, clickCallBack}) => {
    return (
        <div className={className} onClick={clickCallBack}>
            <ImageContainerStyled src={imageInfo.src} alt={imageInfo.alt} />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
};

const ImageTextContainerStyled = styled(ImageTextContainer)`
    cursor: pointer;
    z-index: 100;
    pointer-events: auto;
    overflow: hidden;
    h3 {
        text-align: left;
        box-sizing: border-box;
    }
    p {
        text-align: left;
        font-size: max(1rem, 16px);
        line-height: 1.6;
        margin-inline: initial;
    }

    img {
        max-height: 420px;
        object-fit: cover;
    }

    ${media.narrowPortrait} {
        img {
            max-height: 220px;
            padding-left: 9%;
            padding-right: 9%;
        }

        h3, p {
            padding: 0 2%;
        }
    }

    ${media.compactLandscape} {
        img {
            max-height: min(36vh, 180px);
        }

        h3, p {
            padding: 0 3%;
        }
    }

    ${media.tabletLandscape} {
        img {
            max-height: min(42vh, 240px);
        }
    }
`;

export default ImageTextContainerStyled;
