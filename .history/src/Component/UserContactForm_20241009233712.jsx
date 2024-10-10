import { useState, useEffect } from "react";
import DisplayUserContact from "./DisplayUserInfo.jsx";
import { Edit } from "./EditButton.jsx";
import { Submit } from "./SubmitBtn.jsx";

export function UserContactForm({ sendDataToParent }) {
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
  const [isSubmit, setIsSubmit] = useState(false);
  const [valueDisplay, setValueDisplay] = useState(false);

  //  useEffect(() => {
  // This function will run when the component is first loaded

  window.onload = () => {
    (function () {
      // …
    })();
    let personContact = JSON.parse(localStorage.getItem("userContact"));
    console.log(personContact);
    if (Object.keys(personContact).length !== 0) {
      setIsSubmit(true);
      setValueDisplay(true);
      hideInputContainer();
    } else {
      setIsSubmit(true);
      setValueDisplay(true);
    }

    return;
  };

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
    localStorage.setItem("userContact", JSON.stringify(personContact));

    setUserContact(personContact);
    sendDataToParent(personContact.PersonName, personContact.Email, personContact.)
  }

  function hideInputContainer(e) {
    const inputElContainer = document.querySelector(".inputContainer");
    inputElContainer.style.display = "none";
    setIsSubmit(true);

    DisplayValueOnPage();
    // displayUserContactOnPage();
  }

  function displayUserContactOnPage() {
    const userContactDisplayer = document.querySelector(".userContactDisplay");
    console.log(userContactDisplayer);

    userContactDisplayer.style.display = "block";
  }

  function handleEditBtn() {
    setIsSubmit(false);
    setValueDisplay(false);
  }

  function DisplayValueOnPage() {
    setValueDisplay(true);
  }

  function handleUserContactDisplayForEdit() {
    const inputElContainer = document.querySelector(".inputContainer");
    inputElContainer.style.display = "block";
    // handleUserContactDisplay()
    handleEditBtn();

    //   <UserContactForm />;
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

    hideInputContainer();
  }

  return {
    userName,
    email,
    mobileNumber,

    contactFormRender: (
      <>
        <section className="userContact">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="userContactInputEl"
          >
            {valueDisplay ? (
              <DisplayUserContact
                userContact={userContact}
                className="userContactDisplay"
              />
            ) : null}
            <div className="inputContainer">
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

            {!isSubmit ? (
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
