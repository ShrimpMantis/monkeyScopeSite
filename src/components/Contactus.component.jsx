import styled from "styled-components";

const ContactUsContainer = styled.div`
    background-color: black;
    opacity: 60%;
    color: white;
`;
const StyledDivContainer = styled.div`
    padding: 5%;
    display: flex;
    flex-direction: row;
    width: 100%;
`;
const RowContainer = styled.div`
    padding: 2%;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;
const StyledInputElement = styled.input`
    padding: 1%;
    border-radius: 5px;
    font-size: 15px;
`;

const StyledTextArea = styled.textarea`
    padding: 1%;
`;

const StyledFormContainer = styled.div`
    padding: 2%;
    width:50%;
`;

const StyledAddressContainer = styled.div`
    padding: 2%;
    width:50%;
`;
const StyledBtn = styled.input `
    padding: 2%;
    width: 30%;
    border-radius: 10px;
    font-size: 14px;
    box-shadow: 2px 2px 2px gray;
    border-color: transparent;
    cursor: pointer;
`;

const ContactUsComponent = ({children, handleSubmitCb}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmitBtn", e.target);
        const formComponent = e.target;
        let formObjects = formComponent.getElementsByTagName('input');
        let textAreaObj = formComponent.getElementsByTagName('textarea');
        let formInfoObject = {};
        Array.from(formObjects).forEach((obj, index) => {
            switch(obj.name){
                case "firstName":
                    formInfoObject["fullName"] = obj.value;
                    break;
                case "lastName":
                    const fullName = formInfoObject["fullName"] + " "+ obj.value;
                    formInfoObject["fullName"] = fullName;
                    break;
                case "email":
                    formInfoObject["email"] = obj.value;
                    break;
            }
        });
       
        const message = Array.from(textAreaObj).map((obj, index) =>  obj.value).join(' ');
        formInfoObject["message"] = message;
        handleSubmitCb(formInfoObject);
    };
    return (
        <ContactUsContainer>
            {children}
            <StyledDivContainer>
                <StyledFormContainer>
                    <form action={"/message"} onSubmit={handleSubmit} >
                        <RowContainer>
                            {/* <label htmlFor="userNameTextBox">{"Name"}</label> */}
                            <StyledInputElement type="text" id="firstNameId" placeholder="First Name" name="firstName"/>
                            <StyledInputElement type="text" id="lastNameId" placeholder="Last Name" name="lastName"/>
                        </RowContainer>
                        <RowContainer>
                            {/* <label htmlFor="userEmail">{"Email"}</label> */}
                            <StyledInputElement type="email" id="userEmailId" placeholder="Your Email" name="email"/>
                            <StyledInputElement type="phoneNumber" id="phoneNumber" placeholder="Your Phone Number" name="phoneNumber"/>
                        </RowContainer>
                    <RowContainer>
                            {/* <label htmlFor="textAreaId">{"Message"}</label> */}
                            <textarea id="textAreaId" placeholder="Message" rows={10} cols={42} name="message"/>
                    </RowContainer>
                    <RowContainer>
                           <StyledBtn type="submit" value="Submit"/>
                    </RowContainer>
                    </form>
                </StyledFormContainer>
                <StyledAddressContainer>
                    <p>
                        {"My address is Birubari"}
                    </p>
                    <address>
                       {"Assam India"}
                    </address>
                </StyledAddressContainer>
            </StyledDivContainer>
        </ContactUsContainer>

    );
};

export default ContactUsComponent;