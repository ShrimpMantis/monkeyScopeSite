import styled from "styled-components";

export const InformationButton = styled.button`
    background: ${props => props.$primary ? "#2c6878" : "white"};
    color: ${props => props.$primary ? "white" : "#2c6878"};
    font-size: 14px;
    margin: 10px;
    border: 2px solid #2c6878;
    border-radius: 25px;
    cursor: pointer;
    opacity: 100%;
    width: 200px;
    height: 40px;
    padding: 10px 5px;
    z-index:10;
    overflow:hidden;
    &:hover {
        font-size: 20px;
    }

`;