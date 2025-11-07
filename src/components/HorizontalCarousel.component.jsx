import { useRouter } from "next/navigation";
import { useRef } from "react";
const { Parallax, ParallaxLayer } = require("@react-spring/parallax");
const { default: ImageContainerStyled } = require("./styledComponents/ImageContainer.styled");

const HorizontalCarousel = ({items}) => {
    const numberOfItems = items.length;
    const router = useRouter();
    const cardRef = useRef(null);
    const HorizontalCards = ({cards}) => {
        const cardClicked = (cardNumber) => {
          router.push(`/productions/${cardNumber}`);
        };
        return cards.map((card, index) => {
            return (
                <ParallaxLayer key={`${index}-layer`} onClick={() => cardClicked(index)} 
                 offset={index * 0.32}
                 factor={0.32}
                 style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}
                >
                    <div style={{width: '400px', height: '325px', overflow: 'hidden'}}>
                        <ImageContainerStyled 
                            src={card.src}
                            alt={card.alt}
                            key={`${index}-img-container`}
                        />
                    </div>
                </ParallaxLayer>
            )
        });
    };

    return (
        <Parallax pages={numberOfItems * 0.40} horizontal ref={cardRef} space={1} style={{zIndex:'999'}}>
            <HorizontalCards cards={items}/>
        </Parallax>
    );
}

export default HorizontalCarousel;