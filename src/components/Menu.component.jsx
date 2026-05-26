'use client'
import { useEffect, useState, memo} from "react";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { media } from "@/utilities/breakpoints";
import { touchTarget, typography } from "@/utilities/accessibility";

const StyledNavParent  = styled.div`
    display: flex;
    flex-direction: column;
    overflow:hidden;
    position: fixed;
    top: 0;
    z-index:999;
    background-color: ${props =>props.$shouldChange || props.$shouldExpandMenu ? '#89CFF0': 'transparent'};
    color: ${props => props.$shouldChange || props.$shouldExpandMenu ? 'black' : 'white'};
    height: ${props => props.$shouldExpandMenu ? 'auto' : '15%'};
    min-height: ${props => props.$shouldExpandMenu ? '50vh' : '60px'};
    width:100%;
    transition: 0.5s ease-in;

    ${media.tablet} {
        min-height: ${props => props.$shouldExpandMenu ? '55vh' : '56px'};
    }
`;

const StyledNavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap:10px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2%;
    font-size: clamp(1rem, 4vw, 1.7rem);
    cursor: pointer;

    ${media.tablet} {
        padding: 3% 4%;
    }
`;

const StyledNavButton = styled.div`
    padding: 2%;
    width: auto;
    min-width: 0;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${media.tablet} {
        padding: 1%;
    }
`;

const StyledSpan = styled.span`
    padding: 2px;
    padding-left:10px;
    box-sizing:border-box;
    min-height: ${touchTarget.min};
    min-width: ${touchTarget.min};
    height: auto;
    width: auto;
    display:inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    touch-action: manipulation;
    &:hover {
     transition: transform 0.2s ease-in;
     transform: scale(1.05);
    }

    ${media.tablet} {
        padding-left: 6px;
    }
`;

const StyledExpandedMenu = styled.div`
    display: ${props => props.$shouldExpand ? 'flex' : 'none'};
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap:10px;
    padding: 2% 4% 4%;
    width: 100%;

    ${media.tablet} {
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
        padding: 2% 6% 6%;
    }
`;

const StyledLongMenuNavButton = styled(StyledNavButton)`
    font-size: clamp(1rem, 3vw, 1.25rem);
    line-height: ${typography.bodyLineHeight};
    width: auto;
    text-align: center;
    min-height: ${touchTarget.min};
    display: flex;
    align-items: center;
    justify-content: center;

    ${media.tablet} {
        width: 100%;
        padding: 12px 8px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    &:hover{
        transition: 0.2s ease-in;
        text-decoration: underline;
    }
`;

const MenuTiles = ({menuItems, onNavBtnClicked}) => {
    return menuItems.map((item, index) => {
        return (
            <div key={`${index}-link-parent`} onClick={onNavBtnClicked}>
                <StyledLongMenuNavButton key={`${index}-link-wrapper`}>
                    <Link href={item.link}>{item.title.toUpperCase()}</Link>
                </StyledLongMenuNavButton>
            </div>
        )});
};
const MenuComponent = ({menuItems, shouldChangeFontColor}) => {
   
    const [shouldExpandMenu, setShouldExpandMenu] = useState(false);


    const [hasMounted, setHasMounted] = useState(false);
    
    useEffect(() => {
        setHasMounted(true);
    }, []);

    const MenuIcon = hasMounted ? Menu : () => <span>M</span>;
    const XIcon = hasMounted ? X : () => <span>X</span>;
   
    const handleClick = () => {
        setShouldExpandMenu(!shouldExpandMenu);
    };
    const handleNavBtnClicked = () => {
        setShouldExpandMenu(false);
    };
    return(
        
        <StyledNavParent $shouldChange={shouldChangeFontColor} $shouldExpandMenu={shouldExpandMenu}>
            <StyledNavWrapper >
                <StyledNavButton>MonkeyScope</StyledNavButton>
                <StyledNavButton onClick={handleClick}>
                    <span>{"Menu"}</span> 
                    <StyledSpan>
                        {shouldExpandMenu ? <XIcon /> : <MenuIcon />}
                    </StyledSpan>
                </StyledNavButton>
            </StyledNavWrapper>
            <StyledExpandedMenu $shouldExpand={shouldExpandMenu}>
                {menuItems && <MenuTiles menuItems={menuItems} onNavBtnClicked={handleNavBtnClicked}/>}
            </StyledExpandedMenu>
        </StyledNavParent>
        
    );

};

export default memo(MenuComponent);
