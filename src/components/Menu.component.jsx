'use client'
import { useEffect, useState, memo} from "react";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const StyledNavParent  = styled.div`
    display: flex;
    flex-direction: column;
    overflow:hidden;
    position: fixed;
    top: 0;
    z-index:999;
    background-color: ${props =>props.$shouldChange || props.$shouldExpandMenu ? '#89CFF0': 'transparent'};
    color: ${props => props.$shouldChange || props.$shouldExpandMenu ? 'black' : 'white'};
    height: ${props => props.$shouldExpandMenu ? '35%':'15%'};
    width:100%;
    transition: 0.5s ease-in;
`;

const StyledNavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap:10px;
    justify-content: space-between;
    width: 100%;
    padding-left: 2%;
    padding-right: 2%;
    font-size:27px;
    cursor: pointer;
`;

const StyledNavButton = styled.div`
    padding: 2%;
    width: 15%;
    height: 100%;
`;

const StyledSpan = styled.span`
    padding: 2px;
    padding-left:10px;
    box-sizing:border-box;
    min-height:50px;
    min-width:50px;
    height:100px;
    width:100px;
    width: auto;
    display:inline-block;
    &:hover {
     transition: transform 3s ease-in;
     transform: scale(1.2);
    }
`;

const StyledExpandedMenu = styled.div`
    display: ${props => props.$shouldExpand ? 'flex' : 'none'};
    flex-direction: row;
    justify-content: space-evenly;
    gap:10px;
    height: ${props => props.$shouldExpand ? '100%' : '0%'};
    
`;

const StyledLongMenuNavButton = styled(StyledNavButton)`
    font-size:20px;
    &:hover{
        transition: 3s ease-in;
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

    //Use a variable to hold the icons, which defaults to a stable element
    const MenuIcon = hasMounted ? Menu : () => <span>M</span>;
    const XIcon = hasMounted ? X : () => <span>X</span>;
   
    const handleClick = () => {
        //expand styledNavWrapper
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