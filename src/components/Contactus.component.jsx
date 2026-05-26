import styled from "styled-components";
import { media } from "@/utilities/breakpoints";
import { touchTarget, typography, layout } from "@/utilities/accessibility";

const fieldStyles = `
    width: 100%;
    min-width: 0;
    min-height: ${touchTarget.min};
    padding: var(--space-sm) var(--space-md);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.95);
    color: #171717;
    font-size: ${typography.input};
    line-height: ${typography.bodyLineHeight};
    box-sizing: border-box;
    touch-action: manipulation;

    &::placeholder {
        color: #666;
    }

    &:focus-visible {
        outline: 2px solid #89cff0;
        outline-offset: 2px;
    }
`;

const ContactUsContainer = styled.div`
    background-color: black;
    opacity: 0.9;
    color: white;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    h2 {
        padding: var(--space-sm) var(--page-gutter);
        margin: 0;
    }
`;

const StyledDivContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-lg);
    width: 100%;
    max-width: ${layout.contentMaxWidth};
    margin-inline: auto;
    padding: var(--space-md) var(--page-gutter);
    box-sizing: border-box;

    ${media.mobileOnly} {
        gap: var(--space-md);
        padding: var(--space-sm) var(--page-gutter);
    }

    ${media.tabletPortrait} {
        gap: var(--space-lg);
    }

    ${media.tabletLandscape} {
        grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
        align-items: start;
        gap: var(--space-xl);
    }

    ${media.laptop} {
        padding: var(--space-lg) var(--page-gutter);
    }

    ${media.desktopScreen} {
        max-width: ${layout.gridMaxWidth};
        gap: var(--space-xl);
    }

    ${media.ultraWide} {
        max-width: ${layout.gridMaxWidth};
        gap: var(--space-2xl);
        padding: var(--space-xl) var(--page-gutter);
    }
`;

const RowContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-sm);
    padding-block: var(--space-xs);
    width: 100%;

    ${media.notMobile} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const SingleRowContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-sm);
    padding-block: var(--space-xs);
    width: 100%;
`;

const StyledInputElement = styled.input`
    ${fieldStyles}
`;

const StyledTextArea = styled.textarea`
    ${fieldStyles}
    min-height: clamp(120px, 20vh, 220px);
    resize: vertical;

    ${media.mobileOnly} {
        min-height: clamp(100px, 18vh, 160px);
    }

    ${media.ultraWide} {
        min-height: clamp(140px, 16vh, 260px);
    }
`;

const StyledFormContainer = styled.div`
    width: 100%;
    min-width: 0;
    padding: 0;

    form {
        width: 100%;
    }
`;

const StyledAddressContainer = styled.div`
    width: 100%;
    min-width: 0;
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-sm);
    text-align: left;
    line-height: ${typography.bodyLineHeight};
    font-size: ${typography.body};

    p,
    address {
        max-width: ${layout.proseMaxWidth};
        margin: 0;
        color: inherit;
    }

    ${media.mobileOnly} {
        padding: var(--space-sm) 0;
        text-align: center;
        align-items: center;
    }

    ${media.tabletPortrait} {
        text-align: center;
        align-items: center;
    }

    ${media.tabletLandscape} {
        text-align: left;
        align-items: flex-start;
        padding: var(--space-md) 0 0;
    }

    ${media.laptopUp} {
        padding: var(--space-lg) 0 0 var(--space-md);
    }
`;

const StyledBtn = styled.input`
    ${fieldStyles}
    width: 100%;
    max-width: min(280px, 100%);
    cursor: pointer;
    font-weight: 600;
    background-color: #2c6878;
    color: white;
    border-color: #2c6878;

    &:hover {
        background-color: #245a68;
    }

    ${media.mobileOnly} {
        max-width: 100%;
    }

    ${media.tablet} {
        max-width: 100%;
    }

    ${media.laptopUp} {
        max-width: min(240px, 100%);
    }
`;

const ContactUsComponent = ({children, handleSubmitCb}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formComponent = e.target;
        const formObjects = formComponent.getElementsByTagName('input');
        const textAreaObj = formComponent.getElementsByTagName('textarea');
        const formInfoObject = {};

        Array.from(formObjects).forEach((obj) => {
            switch (obj.name) {
                case "firstName":
                    formInfoObject["fullName"] = obj.value;
                    break;
                case "lastName":
                    formInfoObject["fullName"] = `${formInfoObject["fullName"]} ${obj.value}`;
                    break;
                case "email":
                    formInfoObject["email"] = obj.value;
                    break;
                default:
                    break;
            }
        });

        const message = Array.from(textAreaObj).map((obj) => obj.value).join(' ');
        formInfoObject["message"] = message;
        handleSubmitCb(formInfoObject);
    };

    return (
        <ContactUsContainer>
            {children}
            <StyledDivContainer>
                <StyledFormContainer>
                    <form action="/message" onSubmit={handleSubmit}>
                        <RowContainer>
                            <StyledInputElement type="text" id="firstNameId" placeholder="First Name" name="firstName" autoComplete="given-name" />
                            <StyledInputElement type="text" id="lastNameId" placeholder="Last Name" name="lastName" autoComplete="family-name" />
                        </RowContainer>
                        <RowContainer>
                            <StyledInputElement type="email" id="userEmailId" placeholder="Your Email" name="email" autoComplete="email" />
                            <StyledInputElement type="tel" id="phoneNumber" placeholder="Your Phone Number" name="phoneNumber" autoComplete="tel" />
                        </RowContainer>
                        <SingleRowContainer>
                            <StyledTextArea id="textAreaId" placeholder="Message" rows={8} name="message" />
                        </SingleRowContainer>
                        <SingleRowContainer>
                            <StyledBtn type="submit" value="Submit" />
                        </SingleRowContainer>
                    </form>
                </StyledFormContainer>
                <StyledAddressContainer>
                    <p>My address is Birubari</p>
                    <address>Assam India</address>
                </StyledAddressContainer>
            </StyledDivContainer>
        </ContactUsContainer>
    );
};

export default ContactUsComponent;
