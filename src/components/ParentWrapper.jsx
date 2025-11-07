'use client'
import { Parallax } from "@react-spring/parallax";
import { usePathname} from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import MenuComponent from "@/components/Menu.component";
import FooterComponent from "@/components/FooterComponent";

const ParentWrapper = ({children, menuItems}) => {
    const pathName = usePathname();
    const pathValue = pathName.trim().split('/')[1];
    const pagesCount = pathValue === 'productions' || pathValue === 'news' ? 2.5 : 6;
    const [hasMounted, setHasMounted] = useState(false);
    const [shouldChangeFontColor, setFontColor] = useState(false);
    const [shouldShowFooter, setShouldShowFooter]= useState(false);

    useEffect(() => {
        setHasMounted(true); // Runs ONLY on the client after mount
    }, []);

    const currentRef = useCallback((scrollElement) => {
        if(scrollElement !== null && scrollElement.container !== null && scrollElement.container.current !== null) {
            const scrollHandle = (event) => {
                if(scrollElement && scrollElement.container && scrollElement.container.current && scrollElement.container.current.scrollTop > 300) {
                    setFontColor(true);
                } else {
                    setFontColor(false);
                }
                const isAtBottom = (scrollElement.container.current.scrollHeight - scrollElement.container.current.scrollTop) <= scrollElement.container.current.clientHeight ;
                setShouldShowFooter(isAtBottom);
            };
            
            if(scrollElement) {
                scrollElement.container.current.addEventListener("scroll", scrollHandle);
            }
            return () => {
                if(scrollElement) {
                    scrollElement.container.current.removeEventListener("scroll", scrollHandle);
                }
            }
        }
    });

    // Use a stable, server-friendly placeholder
    if (!hasMounted) {
        return <div style={{ minHeight: '100vh', background: '#253237' }} />; 
    } 
    
    return (
        <>
            <div className="menuContainer">
                <MenuComponent menuItems={menuItems} shouldChangeFontColor={shouldChangeFontColor}/> 
            </div> 
                <div style={{ width: '100%', height: '100%', background: '#253237' }} >
                    <Parallax pages={pagesCount}  ref={currentRef}>
                        {children}
                    </Parallax>
                </div>
            <FooterComponent shouldRender={shouldShowFooter}/>
        </>
    );
};

export default ParentWrapper;