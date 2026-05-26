'use client'
import { Parallax } from "@react-spring/parallax";
import { usePathname} from "next/navigation";
import { useState, useEffect, useRef } from "react";
import MenuComponent from "@/components/Menu.component";
import FooterComponent from "@/components/FooterComponent";
import { ParallaxPagesProvider, useParallaxPages } from "@/contexts/ParallaxPagesContext";

const getPageCount = (pathValue, isMobile, pagesOverride) => {
    if (pathValue === 'productions' && pagesOverride != null) {
        return pagesOverride;
    }
    if (pathValue === 'productions') {
        return isMobile ? 3.5 : 3;
    }
    if (pathValue === 'news') {
        return isMobile ? 2.9 : 2.15;
    }
    if (pathValue === 'about') {
        return isMobile ? 6.5 : 6;
    }
    if (!pathValue || pathValue === 'home') {
        return isMobile ? 7.5 : 7;
    }
    return isMobile ? 6.5 : 6;
};

const ParentWrapperInner = ({children, menuItems}) => {
    const pathName = usePathname();
    const pathValue = pathName.trim().split('/')[1];
    const { pagesOverride, clearPagesOverride } = useParallaxPages();
    const [hasMounted, setHasMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [pagesCount, setPageCount] = useState(6);
    const [shouldChangeFontColor, setFontColor] = useState(false);
    const [shouldShowFooter, setShouldShowFooter]= useState(false);
    const [customKey, setCustomKey] = useState(0);
    const currentRef = useRef(null);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const updateViewport = () => setIsMobile(mediaQuery.matches);
        updateViewport();
        mediaQuery.addEventListener('change', updateViewport);
        return () => mediaQuery.removeEventListener('change', updateViewport);
    }, []);

    useEffect(() => {
        if (pathValue !== 'productions') {
            clearPagesOverride();
        }
    }, [pathValue, clearPagesOverride]);

    useEffect(() => {
        setPageCount(getPageCount(pathValue, isMobile, pagesOverride));
    }, [pathValue, isMobile, pagesOverride]);

    useEffect(() => {
        setCustomKey((prev) => prev + 1);
    }, [pathValue, isMobile]);

    useEffect(() => {
        if (!hasMounted) return;

        let container = null;
        let handleScroll = null;
        let retryTimer = null;
        let attempts = 0;

        const detachListener = () => {
            if (container && handleScroll) {
                container.removeEventListener('scroll', handleScroll);
                container.removeEventListener('touchend', handleScroll);
            }
        };

        const attachListener = () => {
            const parallax = currentRef.current;
            container = parallax?.container?.current;

            if (!container || !parallax?.space) {
                if (attempts < 20) {
                    attempts += 1;
                    retryTimer = setTimeout(attachListener, 50);
                }
                return;
            }

            handleScroll = () => {
                if (container.scrollTop > 300) {
                    setFontColor(true);
                } else {
                    setFontColor(false);
                }

                const maxScroll = Math.max(0, parallax.space * pagesCount - container.clientHeight);
                const bottomThreshold = isMobile ? 80 : 8;
                const isAtBottom = container.scrollTop >= maxScroll - bottomThreshold;
                setShouldShowFooter(isAtBottom);
            };

            container.addEventListener('scroll', handleScroll, { passive: true });
            container.addEventListener('touchend', handleScroll, { passive: true });
            handleScroll();
        };

        attachListener();

        return () => {
            if (retryTimer) clearTimeout(retryTimer);
            detachListener();
        };
    }, [hasMounted, customKey, pagesCount, isMobile]);

    if (!hasMounted) {
        return <div style={{ minHeight: '100vh' }} />; 
    } 
    /* background: '#253237' */
    
    return (
        <>
            <div className="menuContainer">
                <MenuComponent menuItems={menuItems} shouldChangeFontColor={shouldChangeFontColor}/> 
            </div> 
                <div style={{ width: '100%', height: '100dvh', minHeight: '100vh', position: 'relative' }} >
                    <Parallax pages={pagesCount}  ref={currentRef} key={customKey}>
                        {children}
                    </Parallax>
                </div>
            <FooterComponent shouldRender={shouldShowFooter}/>
        </>
    );
     /* background: '#253237', background: '#253237' */
};

const ParentWrapper = (props) => (
    <ParallaxPagesProvider>
        <ParentWrapperInner {...props} />
    </ParallaxPagesProvider>
);

export default ParentWrapper;
