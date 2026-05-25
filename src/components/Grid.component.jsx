import { memo } from "react";
import styled from "styled-components";
import FlashCardComponent from "./styledComponents/FlashCard.styled";

const StyledTilesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    align-items: flex-start;

`;
const StyledParentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const FlashCardComponentWrapper = styled.div`
    overflow: hidden;
    width: 30%;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 398px;
`;

const GridComponent = ({childrenList, children, clickCb}) => {
    const Tiles = ({itemList}) => (
        <>
            {
                itemList.map((child, index) => {
                    return (
                        <FlashCardComponentWrapper key={`${index}-flash-parent-div`} 
                            onClick={() => clickCb(index)}>
                            <FlashCardComponent
                                imageInfo={child.imageInfo}
                                content={child.description}
                                title={child.title}
                                key={`${index}-flash-card-component`}

                            />
                        </FlashCardComponentWrapper>
                    );
                })
            }
        </>
    );

    return (
        <StyledParentContainer>
            {children}
            <StyledTilesContainer>
                <Tiles itemList={childrenList}/>
            </StyledTilesContainer>
        </StyledParentContainer>
    );
};

export default memo(GridComponent);