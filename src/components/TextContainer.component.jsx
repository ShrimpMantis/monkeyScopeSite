import { memo } from "react";
import { InformationButton } from "./styledComponents/InformationButton.styled";

const TextContainer = ({className, content, isPrimary, showButton, children, btnText, hrefParamValue}) => {
    const primary = isPrimary;
    return (
        <div className={className}>
            {children}
            <p> 
                {content}
            </p>
            {showButton && 
                <div>
                    <InformationButton $primary={primary} hrefParam={hrefParamValue}>
                        {btnText}
                    </InformationButton>
                </div>
            }
            
        </div>
    )
};
//onClick={onClickCb}
export default memo(TextContainer);