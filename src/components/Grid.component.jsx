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

const GridComponent = ({childrenList, children, clickCb}) => {
    const Tiles = ({itemList}) => (
        <>
            {
                itemList.map((child, index) => {
                    return (
                        <div style={{overflow:'hidden', width:'30%'}} key={`${index}-flash-parent-div`} 
                            onClick={() =>clickCb(index)}>
                            <FlashCardComponent
                                imageInfo={child.imageInfo}
                                content={child.description}
                                title={child.title}
                                key={`${index}-flash-card-component`}

                            />
                        </div>
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