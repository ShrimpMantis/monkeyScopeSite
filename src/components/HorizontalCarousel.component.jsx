import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import styled from "styled-components";
import { media } from "@/utilities/breakpoints";
import { touchTarget } from "@/utilities/accessibility";
import { useViewport } from "@/utilities/viewport";
const { Parallax, ParallaxLayer } = require("@react-spring/parallax");
const { default: ImageContainerStyled } = require("./styledComponents/ImageContainer.styled");

const CARD_OFFSET_STEP = 0.35;
const CARD_FACTOR_MOBILE = 0.50;
/** Effective carousel width vs viewport (content + wrap padding). */
const CAROUSEL_WIDTH_RATIO = 0.90;

const estimateDesktopCardFactor = (viewportWidth) => {
    const cardPx = Math.min(420, viewportWidth * 0.38);
    return cardPx / (viewportWidth * CAROUSEL_WIDTH_RATIO);
};

const StyledCardWrapper = styled.div`
    width: min(400px, 85vw);
    height: min(325px, 65vw);
    overflow: hidden;

    ${media.tablet} {
        width: min(320px, 80vw);
        height: min(260px, 55vw);
    }

    ${media.compactLandscape} {
        width: min(280px, 42vw);
        height: min(200px, 38vh);
    }

    ${media.tabletLandscape} {
        width: min(360px, 38vw);
        height: min(240px, 42vh);
    }

    ${media.laptopUp} {
        width: min(420px, 38vw);
        height: min(340px, 32vw);
    }
`;

const HorizontalCarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    height: min(325px, 65vw);
    min-height: 280px;

    ${media.tablet} {
        height: min(260px, 55vw);
        min-height: 220px;
    }

    ${media.compactLandscape} {
        height: min(200px, 40vh);
        min-height: 160px;
    }

    ${media.tabletLandscape} {
        height: min(260px, 45vh);
        min-height: 200px;
    }

    ${media.laptopUp} {
        height: min(340px, 32vw);
        min-height: 280px;
    }
`;

const CarouselNavButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    width: ${touchTarget.min};
    height: ${touchTarget.min};
    min-width: ${touchTarget.min};
    min-height: ${touchTarget.min};
    border: 2px solid #2c6878;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.95);
    color: #2c6878;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    touch-action: manipulation;

    &:disabled {
        opacity: 0.35;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: #2c6878;
        color: white;
    }
`;

const PrevButton = styled(CarouselNavButton)`
    left: 0;
`;

const NextButton = styled(CarouselNavButton)`
    right: 0;
`;

/**
 * productions — home carousel: tight trailing scroll on desktop, last card aligned to end.
 * gallery — production detail stills: uniform card spacing, no trailing-page inflation.
 */
const getCarouselLayout = (variant, layoutProfile, itemCount, viewportWidth) => {
    if (itemCount <= 1) {
        return {
            cardFactor: CARD_OFFSET_STEP,
            carouselPages: 1,
            alignLastToEnd: false,
            useTightLastScroll: false,
        };
    }

    if (variant === 'gallery') {
        return {
            cardFactor: CARD_OFFSET_STEP,
            carouselPages: itemCount * CARD_OFFSET_STEP,
            alignLastToEnd: false,
            useTightLastScroll: false,
        };
    }

    const isDesktop = layoutProfile === 'desktop';
    const cardFactor = isDesktop
        ? estimateDesktopCardFactor(viewportWidth)
        : CARD_FACTOR_MOBILE;
    const carouselPages = (itemCount - 1) * CARD_OFFSET_STEP + (isDesktop ? cardFactor : 1);

    return {
        cardFactor,
        carouselPages,
        alignLastToEnd: isDesktop,
        useTightLastScroll: isDesktop,
    };
};

const HorizontalCarousel = ({ items, variant = 'productions' }) => {
    const numberOfItems = items.length;
    const router = useRouter();
    const cardRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { layout, width } = useViewport();
    const { cardFactor, carouselPages, alignLastToEnd, useTightLastScroll } =
        getCarouselLayout(variant, layout, numberOfItems, width);

    const handleCardClick = (cardNumber) => {
        router.push(`/productions/${cardNumber}`);
    };

    const getScrollOffset = (index) => {
        if (useTightLastScroll && index >= numberOfItems - 1) {
            return carouselPages - 1;
        }

        return index * CARD_OFFSET_STEP;
    };

    const scrollToIndex = (index) => {
        const nextIndex = Math.max(0, Math.min(numberOfItems - 1, index));
        setCurrentIndex(nextIndex);
        cardRef.current?.scrollTo(getScrollOffset(nextIndex));
    };

    const handlePrevious = (event) => {
        event.stopPropagation();
        scrollToIndex(currentIndex - 1);
    };

    const handleNext = (event) => {
        event.stopPropagation();
        scrollToIndex(currentIndex + 1);
    };

    const HorizontalCards = ({ cards, layerFactor, shouldAlignLastToEnd }) => {
        return cards.map((card, index) => {
            const isLastCard = index === cards.length - 1;

            return (
                <ParallaxLayer key={`${index}-layer`} onClick={() => handleCardClick(index)} 
                 offset={index * CARD_OFFSET_STEP}
                 factor={layerFactor}
                 style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: shouldAlignLastToEnd && isLastCard ? 'flex-end' : 'flex-start',
                 }}
                 speed={0}
                >
                    <StyledCardWrapper>
                        <ImageContainerStyled 
                            src={card.src}
                            alt={card.alt}
                            key={`${index}-img-container`}
                        />
                    </StyledCardWrapper>
                </ParallaxLayer>
            )
        });
    };

    return (
        <HorizontalCarouselWrapper>
            <PrevButton
                type="button"
                aria-label="Previous production"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
            >
                ‹
            </PrevButton>
            <Parallax
                pages={carouselPages}
                horizontal
                ref={cardRef}
                style={{ zIndex: 1, height: '100%', width: '100%' }}
                onScrollCapture={(event) => event.stopPropagation()}
            >
                <HorizontalCards
                    cards={items}
                    layerFactor={cardFactor}
                    shouldAlignLastToEnd={alignLastToEnd}
                />
            </Parallax>
            <NextButton
                type="button"
                aria-label="Next production"
                onClick={handleNext}
                disabled={currentIndex >= numberOfItems - 1}
            >
                ›
            </NextButton>
        </HorizontalCarouselWrapper>
    );
}

export default HorizontalCarousel;
