import { memo } from "react";
import { InformationButton } from "./styledComponents/InformationButton.styled";

const TextContainer = ({className, content, isPrimary, showButton, children}) => {
    const primary = isPrimary;
    return (
        <div className={className}>
            {/* <h2>{title}</h2> */}
            {children}
            <p> 
                {content}
            </p>
            {showButton && 
                <div>
                    <InformationButton $primary={primary}>More</InformationButton>
                </div>
            }
            
        </div>
    )
};

export default memo(TextContainer);