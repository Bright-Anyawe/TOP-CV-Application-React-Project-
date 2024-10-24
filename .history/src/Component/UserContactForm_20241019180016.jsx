import { useState } from "react";
import { Submit } from "./SubmitBtn.jsx";

export function UserContactForm({
  setUserContact,
  userContact,
  displayPersonalContact,
  setDisplayPersonalContact,
  setControlEmailSvgDisplay,
  setControlPhoneSvgDisplay,
  setHideContactEdit,
}) {
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [error, setError] = useState("");
  // const [emailError, SetEmailError] = useState("");
  // const [phoneNumberError, setPhoneNumberError] = useState("");

  

  const isFormComplete =
    userContact.person && userContact.Email && userContact.MobileNumber;

  // function handleUserName(e) {
  //   const updateUserName = e.target.value;
  //   setUserName(updateUserName);
  //   setError("");
  //   handleUserContact(updateUserName, email, mobileNumber);
  // }

  function handleUserContact(e) {
    setUserContact((prevState) => ({
      ...prevState,
      personName: e.target.value,
      email: e.target.value,
      mobileNumber: e.target.value,
    }));
  }

  function handleEmail(e) {
    const updateEmail = e.target.value;
    setEmail(updateEmail);
    SetEmailError("");

    if (updateEmail === "") {
      setControlEmailSvgDisplay(false);
    } else {
      setControlEmailSvgDisplay(true);
    }
    handleUserContact(userName, updateEmail, mobileNumber);
  }

  function handleMobileNumber(e) {
    const updateMobileNumber = e.target.value;
    setMobileNumber(updateMobileNumber);
    setPhoneNumberError("");

    if (updateMobileNumber === "") {
      setControlPhoneSvgDisplay(false);
    } else {
      setControlPhoneSvgDisplay(true);
    }
    handleUserContact(userName, email, updateMobileNumber);
  }

  function handleUserContact(updateUserName, updateEmail, updateMobileNumber) {
    const personContact = {
      ...userContact,
      PersonName: updateUserName,
      Email: updateEmail,
      MobileNumber: updateMobileNumber,
    };
    console.log(personContact);
    localStorage.setItem("userContact", JSON.stringify(personContact));

    setUserContact(personContact);
  }

  // function hideInputContactContainer(e) {
  //   const edit = document.querySelector(".edit");
  //   // inputElContainer.style.display = "none";
  //   // setIsSubmitContact(true);
  //   // displayUserContactOnPage()

  //   // DisplayValueOnPage();
  //   // displayUserContactOnPage();
  // }

  // function displayUserContactOnPage() {
  //   const userContactDisplayer = document.querySelector(
  //     ".userContactDisplayContainer"
  //   );
  //   console.log(userContactDisplayer);

  //   userContactDisplayer.style.display = "block";
  // }

  function handleEditBtn() {
    setHideContactEdit(false);
  }

  // function DisplayValueOnPage() {
  //   setValueDisplayContact(true);
  // }

  // function handleUserContactDisplayForEdit() {
  //   const inputElContainer = document.querySelector(".inputContainer");
  //   inputElContainer.style.display = "block";
  //   // handleUserContactDisplay()
  // }

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
    handleEditBtn();
    showPersonalContactForm();
    // hideInputContactContainer();
  }

  function showPersonalContactForm() {
    const arrowDown = document.querySelector(".downArrow");

    if (displayPersonalContact === false) {
      arrowDown.style.transform = "rotate(180deg)";
      arrowDown.style.animation = "rotateArrowIcon 0.8s";

      setDisplayPersonalContact(true);
    } else {
      arrowDown.style.animation = "rotateArrowIcon 0.8s";

      arrowDown.style.transform = "rotate(0deg)";

      setDisplayPersonalContact(false);
    }
  }

  return (
    <section className="userContact">
      <form onSubmit={(e) => e.preventDefault()} className="userContactInputEl">
        <div
          className="personalContactHeader"
          onClick={showPersonalContactForm}
        >
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>account</title>
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
            </svg>
            Personal Contacts
          </p>
          <p>
            <svg
              className="downArrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>chevron-down</title>
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </p>
        </div>
        {displayPersonalContact ? (
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
                value={userContact.personName}
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
                value={userContact.email}
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
                value={userContact.mobileNumber}
                onChange={handleMobileNumber}
                required
              />
              <span className="phoneNumberError">{phoneNumberError}</span>
            </div>
            <Submit
              type="submit"
              className="userContactSubmit"
              hideInputContainer={handleFormValidation}
              isFormComplete={isFormComplete}
            />
          </div>
        ) : null}

        {/* {!isSubmitContact ? (
            ) : (
              <Edit
                className="userContactEditComponent"
                handleUserContactDisplayForEdit={
                  handleUserContactDisplayForEdit
                }
                // handleEditBtn={handleEditBtn}
              />
            )} */}
      </form>
    </section>
  );
}