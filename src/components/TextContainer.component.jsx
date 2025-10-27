import { memo } from "react";
import { InformationButton } from "./styledComponents/InformationButton.styled";

const TextContainer = ({className, title, content, isPrimary}) => {
    const primary = isPrimary;
    return (
        <div className={className}>
            <h2>{title}</h2>
            <p> 
                {content}
            </p>
            <div>
                <InformationButton $primary={primary}>More</InformationButton>
            </div>
        </div>
    )
};

export default memo(TextContainer);