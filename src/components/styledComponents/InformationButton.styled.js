import styled from "styled-components";
import Link from "next/link";
import { media } from "@/utilities/breakpoints";

const InformationButtonStyled = styled.span`
    background: ${props => props.$primary ? "#2c6878" : "white"}; 
    color: ${props => props.$primary ? "white" : "#2c6878"};
    font-size: 14px;
    margin: 10px;
    border: 2px solid #2c6878;
    border-radius: 25px;
    cursor: pointer;
    opacity: 100%;
    width: 200px;
    max-width: 100%;
    height: 40px;
    padding: 10px 5px;
    z-index:10;
    overflow:hidden;
    &:hover {
        font-size: 18px;
        transition: 0.5s ease-in;
    }
    display: inline-block;
    text-align:center;

    ${media.tablet} {
        width: min(200px, 80vw);
        margin: 10px auto;
        display: block;
    }
`;

export const InformationButton = ({children, hrefParam}) => {
    return(
        <Link href={hrefParam} passHref>
            <InformationButtonStyled>{children}</InformationButtonStyled>
        </Link>
    );
}
