import { useState, useEffect } from "react";
import DisplayUserContact from "./DisplayUserInfo.jsx";
import { Edit } from "./EditButton.jsx";
import { Submit } from "./SubmitBtn.jsx";

export function useUserContactForm() {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [error, setError] = useState("");
  const [emailError, SetEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [userContact, setUserContact] = useState({
    PersonName: userName,
    Email: email,
    MobileNumber: mobileNumber,
  });
  const [isSubmitContact, setIsSubmitContact] = useState(false);
  const [valueDisplayContact, setValueDisplayContact] = useState(false);

  //  useEffect(() => {
  // This function will run when the component is first loaded

  function handleUserName(e) {
    const updateUserName = e.target.value;
    setuserName(updateUserName);
    setError("");
    handleUserContact(updateUserName, email, mobileNumber);
  }

  function handleEmail(e) {
    const updateEmail = e.target.value;
    setEmail(updateEmail);
    SetEmailError("");
    handleUserContact(userName, updateEmail, mobileNumber);
  }

  function handleMobileNumber(e) {
    const updateMobileNumber = e.target.value;
    setmobileNumber(updateMobileNumber);
    setPhoneNumberError("");
    handleUserContact(userName, email, updateMobileNumber);
  }

  function handleUserContact(updateUserName, updateEmail, updateMobileNumber) {
    const personContact = {
      ...userContact,
      PersonName: updateUserName,
      Email: updateEmail,
      MobileNumber: updateMobileNumber,
    };
    console.log(personContact)
    localStorage.setItem("userContact", JSON.stringify(personContact));

    setUserContact(personContact);
  }

  function hideInputContactContainer(e) {
    const inputElContainer = document.querySelector(".inputContainer");
    // inputElContainer.style.display = "none";
    setIsSubmitContact(true);

    DisplayValueOnPage();
    // displayUserContactOnPage();
  }

  function displayUserContactOnPage() {
    const userContactDisplayer = document.querySelector(".userContactDisplay");
    console.log(userContactDisplayer);

    userContactDisplayer.style.display = "block";
  }

  function handleEditBtn() {
    setIsSubmitContact(false);
    setValueDisplayContact(false);
  }

  function DisplayValueOnPage() {
    setValueDisplayContact(true);
  }

  function handleUserContactDisplayForEdit() {
    const inputElContainer = document.querySelector(".inputContainer");
    inputElContainer.style.display = "block";
    // handleUserContactDisplay()
    handleEditBtn();

  }

  function handleFormValidation(e) {
    // const userNameInput = document.querySelector(".userNameInputEl");
    e.preventDefault();

    if (userName === "") {
      return setError(`Please enter a valid name!`);
    } else if (!userName.match(/^[A-Za-z][A-Za-z0-9_ ]{3,29}$/)) {
      return setError(
        `Please enter a valid name, you've entered *${userName}*, enter your full name`
      );
    }

    if (
      !email.match(
        /^[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[cC][oO][mM](:[0-9]{1,5})?$/
      )
    ) {
      SetEmailError("Please enter a valid email address(i.e thomas@gmail.com)");
      return;
    }
    if (mobileNumber && mobileNumber.length !== 10) {
      setPhoneNumberError(
        `You entered ${mobileNumber.length} digits, the value should be 10 digits. try again`
      );

      return;
    } else if (!mobileNumber.match(/^\d{10}$/)) {
      alert("Please enter a valid phone number.(i.e 0254361689)");
      return;
    }

    hideInputContactContainer();
  }

  return {
    userName,
    email,
    mobileNumber,
    setIsSubmitContact,
    setValueDisplayContact,
    hideInputContactContainer,
    contactFormRender: (
      <>
        <section className="userContact">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="userContactInputEl"
          >
            {/* {valueDisplayContact ? (
              <DisplayUserContact
                userContact={userContact}
                
              />
            ) : null} */}
            <div className="inputContainer">
              <div>
                Personal Contacts{" "}
                <span>
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style="width: calc(1rem * var(--mantine-scale)); height: calc(1rem * var(--mantine-scale)); display: block;"
                  >
                    <path
                      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="fullNameContainer">
                <label htmlFor="userName" className="userNameLabel">
                  Full Name<span className="asterisk"> *</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your fullName"
                  className="userNameInputEl"
                  id="userName"
                  value={userName}
                  onChange={handleUserName}
                  required
                />
                <span className="userNameError">{error}</span>
              </div>

              <div className="emailContainer">
                <label htmlFor="email" className="emailLabel">
                  Email<span className="asterisk"> *</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="emailInputEl"
                  id="email"
                  value={email}
                  onChange={handleEmail}
                  pattern="[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[cC][oO][mM](:[0-9]{1,5})?"
                  required
                />
                <span className="emailError">{emailError}</span>
              </div>

              <div className="mobileNumberContainer">
                <label htmlFor="mobileNumber" className="mobileNumberLabel">
                  Mobile Number<span className="asterisk"> *</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter your mobile number"
                  className="mobileNumberInputEl"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={handleMobileNumber}
                  required
                />
                <span className="phoneNumberError">{phoneNumberError}</span>
              </div>
            </div>

            {!isSubmitContact ? (
              <Submit
                type="submit"
                className="userContactSubmit"
                hideInputContainer={handleFormValidation}
              />
            ) : (
              <Edit
                className="userContactEditComponent"
                handleUserContactDisplayForEdit={
                  handleUserContactDisplayForEdit
                }
                // handleEditBtn={handleEditBtn}
              />
            )}
          </form>
        </section>
      </>
    ),
  };
}
