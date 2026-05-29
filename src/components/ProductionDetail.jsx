import SideBySideTextImageStyled from "./styledComponents/SideBySideTextImage.styled";
import HorizontalCarousel from "./HorizontalCarousel.component";
import styled from "styled-components";
import { media } from "@/utilities/breakpoints";

const StyledListPara = styled.div`
    text-align: left;
    padding: 5%;

    ${media.narrowPortrait}, ${media.compactLandscape} {
        padding: 3% 4%;
    }
`;
const StyledCarouselWrapper = styled.div`
    margin-top: 10%;
    padding: 0 2%;

    ${media.narrowPortrait} {
        margin-top: 5%;
        padding: 0 4%;
    }

    ${media.compactLandscape}, ${media.tabletLandscape} {
        margin-top: 3%;
        padding: 0 3%;
    }
`;
const ProductionDetail = ({title, content, imageInfo, images, children, hrefParam}) => {
    return (
        <div>
            <SideBySideTextImageStyled 
                content={content}
                imageInfo={imageInfo}
                isFlip={true}
                title={title}
                key={"uniqueKey1"}
                btnText={"Videos"}
                hrefValue={hrefParam}
            />
            <StyledListPara>
                {children}
            </StyledListPara>
            <StyledCarouselWrapper>
                <HorizontalCarousel
                    items={images}
                    variant="gallery"
                />
            </StyledCarouselWrapper>
        </div>
    );
}

export default ProductionDetail;
