import { memo } from "react";
import styled from "styled-components";
import FlashCardComponent from "./styledComponents/FlashCard.styled";
import { media } from "@/utilities/breakpoints";

const StyledTilesContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    align-items: flex-start;

    ${media.tablet} {
        flex-direction: column;
        align-items: stretch;
        gap: ${props => props.$mobileTileGap ?? '16px'};
    }
`;
const StyledParentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    ${media.tablet} {
        gap: 24px;
    }
`;

const FlashCardComponentWrapper = styled.div`
    overflow: hidden;
    width: 30%;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 398px;

    ${media.tablet} {
        width: 100%;
        flex-basis: auto;
    }
`;

const GridComponent = ({childrenList, children, clickCb, mobileTileGap}) => {
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
            <StyledTilesContainer $mobileTileGap={mobileTileGap}>
                <Tiles itemList={childrenList}/>
            </StyledTilesContainer>
        </StyledParentContainer>
    );
};

export default memo(GridComponent);
