import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import styled from "styled-components";
import { media } from "@/utilities/breakpoints";
import { touchTarget } from "@/utilities/accessibility";
const { Parallax, ParallaxLayer } = require("@react-spring/parallax");
const { default: ImageContainerStyled } = require("./styledComponents/ImageContainer.styled");

const CARD_OFFSET_STEP = 0.32;

const StyledCardWrapper = styled.div`
    width: min(400px, 85vw);
    height: min(325px, 65vw);
    overflow: hidden;

    ${media.tablet} {
        width: min(320px, 80vw);
        height: min(260px, 55vw);
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

const HorizontalCarousel = ({items}) => {
    const numberOfItems = items.length;
    const router = useRouter();
    const cardRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCardClick = (cardNumber) => {
        router.push(`/productions/${cardNumber}`);
    };

    const scrollToIndex = (index) => {
        const nextIndex = Math.max(0, Math.min(numberOfItems - 1, index));
        setCurrentIndex(nextIndex);
        cardRef.current?.scrollTo(nextIndex * CARD_OFFSET_STEP);
    };

    const handlePrevious = (event) => {
        event.stopPropagation();
        scrollToIndex(currentIndex - 1);
    };

    const handleNext = (event) => {
        event.stopPropagation();
        scrollToIndex(currentIndex + 1);
    };

    const HorizontalCards = ({cards}) => {
        return cards.map((card, index) => {
            return (
                <ParallaxLayer key={`${index}-layer`} onClick={() => handleCardClick(index)} 
                 offset={index * CARD_OFFSET_STEP}
                 factor={CARD_OFFSET_STEP}
                 style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}
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
                pages={numberOfItems * 0.40}
                horizontal
                ref={cardRef}
                space={1}
                style={{ zIndex: 1, height: '100%', width: '100%' }}
                onScrollCapture={(event) => event.stopPropagation()}
            >
                <HorizontalCards cards={items}/>
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
