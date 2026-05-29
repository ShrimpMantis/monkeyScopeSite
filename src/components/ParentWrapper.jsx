'use client'
import { Parallax } from "@react-spring/parallax";
import { usePathname} from "next/navigation";
import { useState, useEffect, useRef } from "react";
import MenuComponent from "@/components/Menu.component";
import FooterComponent from "@/components/FooterComponent";
import { ParallaxPagesProvider, useParallaxPages } from "@/contexts/ParallaxPagesContext";
import { useViewport } from "@/utilities/viewport";

const getPageCount = (pathValue, isNarrow, isCompact, pagesOverride) => {
    if ((pathValue === 'productions' || pathValue === 'about') && pagesOverride != null) {
        return pagesOverride;
    }
    if (pathValue === 'productions') {
        if (isCompact) return 3.2;
        return isNarrow ? 3.5 : 3;
    }
    if (pathValue === 'news') {
        if (isCompact) return 2.4;
        return isNarrow ? 2.9 : 2.15;
    }
    if (pathValue === 'about') {
        if (isCompact) return 5.5;
        return isNarrow ? 6.5 : 6;
    }
    if (!pathValue || pathValue === 'home') {
        if (isCompact) return 6.5;
        return isNarrow ? 7.5 : 7;
    }
    if (isCompact) return 5.5;
    return isNarrow ? 6.5 : 6;
};

const ParentWrapperInner = ({children, menuItems}) => {
    const pathName = usePathname();
    const pathValue = pathName.trim().split('/')[1];
    const { pagesOverride, clearPagesOverride } = useParallaxPages();
    const { isNarrow, isCompact } = useViewport();
    const [hasMounted, setHasMounted] = useState(false);
    const [pagesCount, setPageCount] = useState(() =>
        getPageCount(pathValue, isNarrow, isCompact, pagesOverride),
    );
    const [shouldChangeFontColor, setFontColor] = useState(false);
    const [shouldShowFooter, setShouldShowFooter]= useState(false);
    const [customKey, setCustomKey] = useState(0);
    const currentRef = useRef(null);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (pathValue !== 'productions' && pathValue !== 'about') {
            clearPagesOverride();
        }
    }, [pathValue, clearPagesOverride]);

    useEffect(() => {
        setPageCount(getPageCount(pathValue, isNarrow, isCompact, pagesOverride));
    }, [pathValue, isNarrow, isCompact, pagesOverride]);

    useEffect(() => {
        setCustomKey((prev) => prev + 1);
    }, [pathValue, isNarrow, isCompact]);

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

                const maxScroll = Math.max(
                    0,
                    container.scrollHeight - container.clientHeight,
                );
                const bottomThreshold = isCompact ? 48 : isNarrow ? 80 : 24;
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
    }, [hasMounted, customKey, pagesCount, isNarrow, isCompact]);

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
