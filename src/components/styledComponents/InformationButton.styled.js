import styled from "styled-components";
import Link from "next/link";
import { media } from "@/utilities/breakpoints";
import { touchTarget, typography } from "@/utilities/accessibility";

const InformationButtonStyled = styled.span`
    background: ${props => props.$primary ? "#2c6878" : "white"}; 
    color: ${props => props.$primary ? "white" : "#2c6878"};
    font-size: ${typography.input};
    margin: 10px;
    border: 2px solid #2c6878;
    border-radius: 25px;
    cursor: pointer;
    opacity: 100%;
    width: 200px;
    max-width: 100%;
    min-height: ${touchTarget.min};
    padding: 12px 16px;
    z-index: 10;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: ${typography.bodyLineHeight};
    touch-action: manipulation;

    &:hover {
        background: ${props => props.$primary ? "#245a68" : "#f5f5f5"};
        transition: background-color 0.2s ease-in;
    }

    ${media.tablet} {
        width: min(200px, 80vw);
        margin: 10px auto;
        display: flex;
    }
`;

export const InformationButton = ({children, hrefParam}) => {
    return(
        <Link href={hrefParam} passHref>
            <InformationButtonStyled>{children}</InformationButtonStyled>
        </Link>
    );
}
