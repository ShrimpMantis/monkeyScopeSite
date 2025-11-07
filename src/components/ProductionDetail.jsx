import SideBySideTextImageStyled from "./styledComponents/SideBySideTextImage.styled";
import HorizontalCarousel from "./HorizontalCarousel.component";
import styled from "styled-components";
const StyledListPara = styled.div`
    text-align: left;
    padding: 5%;
`;
const StyledCarouselWrapper = styled.div`
    margin-top: 10%;
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
                />
            </StyledCarouselWrapper>
        </div>
    );
}

export default ProductionDetail;