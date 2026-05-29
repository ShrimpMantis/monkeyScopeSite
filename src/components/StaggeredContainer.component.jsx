import SideBySideTextImageContainer from "./styledComponents/SideBySideTextImage.styled";
import styled from "styled-components";
import { media } from "@/utilities/breakpoints";

const StyledDivWrapper = styled.div`
    display: flex;
    flex-direction:column;
    gap:20px;
    justify-content:space-evenly;
    padding:5%;
    height:100%;

    ${media.narrowPortrait} {
        padding: 3%;
        gap: 24px;
    }

    ${media.compactLandscape} {
        padding: 2% 3%;
        gap: 16px;
    }

    ${media.tabletLandscape} {
        padding: 3% 4%;
        gap: 20px;
    }
`;

const StaggeredContainer = ({sections, children, btnText, clickCb}) => {
    const RenderedList = ({sections}) => {
        return sections.map((section, index) => {
            const shouldFlip = ((index+2)%2) === 0;

            return (
                <div key={`${index}-image-container-wrapper`}>
                    <SideBySideTextImageContainer 
                        content={section.content}
                        imageInfo={section.imageInfo}
                        isFlip={shouldFlip}
                        key={`${index}-section`}
                        title={section.title}
                        btnText={btnText}
                        clickCb={clickCb}
                        hrefValue={section.link}
                    />
                </div>
            );
        });
    };
        
    return (
        <StyledDivWrapper>
            {children}
            <RenderedList sections={sections} />
        </StyledDivWrapper>
    );
};

export default StaggeredContainer;
