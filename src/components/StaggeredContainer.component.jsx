import SideBySideTextImageContainer from "./styledComponents/SideBySideTextImage.styled";
import styled from "styled-components";

const StyledDivWrapper = styled.div`
    display: flex;
    flex-direction:column;
    gap:20px;
    justify-content:space-evenly;
    padding:5%;
    height:100%;
`;

const StaggeredContainer = ({sections, children}) => {
    const RenderedList = ({sections}) => {
        return sections.map((section, index) => {
            console.log("index", index);
            const shouldFlip = ((index+2)%2) === 0;
            console.log("shouldFlip", shouldFlip);

            return (
                <div>
                    <SideBySideTextImageContainer 
                        content={section.content}
                        imageInfo={section.imageInfo}
                        isFlip={shouldFlip}
                        key={`${index}-section`}
                        title={section.title}
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