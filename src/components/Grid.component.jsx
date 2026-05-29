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

    ${media.narrowPortrait} {
        flex-direction: column;
        align-items: stretch;
        gap: ${props => props.$mobileTileGap ?? '16px'};
    }

    ${media.compactLandscape} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: ${props => props.$mobileTileGap ?? '12px'};
    }

    ${media.tabletLandscape} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 16px;
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

    ${media.narrowPortrait} {
        width: 100%;
        flex-basis: auto;
    }

    ${media.compactLandscape} {
        width: calc(50% - 8px);
        flex-basis: auto;
        max-width: 320px;
    }

    ${media.tabletLandscape} {
        width: 30%;
        flex-basis: min(360px, 32%);
        max-width: 400px;
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
