import { memo } from "react";
import styled from "styled-components";
import FlashCardComponent from "./styledComponents/FlashCard.styled";

const StyledParentContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    align-items: flex-start;

`;

const GridComponent = ({childrenList, children}) => {
    const Tiles = ({itemList}) => (
        <>
            {
                itemList.map((child, index) => {
                    return (
                        <div style={{overflow:'hidden', width:'450px'}} key={`${index}-flash-parent-div`}>
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
        <div>
            {children}
            <StyledParentContainer>
                <Tiles itemList={childrenList}/>
            </StyledParentContainer>
        </div>
    );
};

export default memo(GridComponent);