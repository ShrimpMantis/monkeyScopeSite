'use client'
import { Parallax } from "@react-spring/parallax";
import { usePathname} from "next/navigation";
import { useState, useEffect, useRef } from "react";
import MenuComponent from "@/components/Menu.component";
import FooterComponent from "@/components/FooterComponent";

const ParentWrapper = ({children, menuItems}) => {
    const pathName = usePathname();
    const pathValue = pathName.trim().split('/')[1];
    const [hasMounted, setHasMounted] = useState(false);
    const [pagesCount, setPageCount] = useState(6);
    const [shouldChangeFontColor, setFontColor] = useState(false);
    const [shouldShowFooter, setShouldShowFooter]= useState(false);
    const [customKey, setCustomKey] = useState(0);
    const currentRef = useRef(null);

    useEffect(() => {
        setHasMounted(true); // Runs ONLY on the client after mount
    }, []);

    useEffect(() => {
        const currPagesCount = pathValue === 'productions' || pathValue === 'news' ? 2.5 : 6;
        setPageCount(currPagesCount);
        setCustomKey(customKey + 1);
    }, [pathValue]);


    const scrollHandler = (e) => {
        const elementTarget = e.target;
        if(elementTarget && elementTarget.scrollTop > 300){
            setFontColor(true);
        } else {
            setFontColor(false);
        }
        const isAtBottom = elementTarget.scrollHeight - elementTarget.scrollTop <= elementTarget.clientHeight;
        setShouldShowFooter(isAtBottom);
    };

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
                    <Parallax pages={pagesCount}  ref={currentRef} key={customKey}
                            onScrollCapture={(e) =>  scrollHandler(e)}>
                        {children}
                    </Parallax>
                </div>
            <FooterComponent shouldRender={shouldShowFooter}/>
        </>
    );
};

export default ParentWrapper;