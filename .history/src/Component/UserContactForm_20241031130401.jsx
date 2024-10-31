import { useEffect, useReducer, useState } from "react";
import { Submit } from "./SubmitBtn.jsx";
import { UserContactContext } from "./App.jsx";
import { useContext } from "react";
import { initialState, userContactReducer } from "./Reducer.jsx";

export function UserContactForm({
  displayPersonalContact,
  setDisplayPersonalContact,
  setControlEmailSvgDisplay,
  setControlPhoneSvgDisplay,
  setHideContactEdit,
}) {
  // const {
  //   userContact,
  //   setUserContact,
  //   userName,
  //   setUserName,
  //   email,
  //   setEmail,
  //   mobileNumber,
  //   setMobileNumber,
  // } = useContext(UserContactContext);

  const { state, setUserContact, dispatch } = useContext(UserContactContext);

  const userName = state.userName;
  const userEmail = state.userEmail;
  const mobileNumber = state.mobileNumber;

  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const isFormComplete = userName && userEmail && mobileNumber;

  useEffect(() => {
    set
  })


  function handleEmailSvgVisibility() {
    if (userEmail === "") {
      setControlEmailSvgDisplay(false);
    } else {
      setControlEmailSvgDisplay(true);
    }
  }

  function handleMobileSvgVisibility() {
    if (mobileNumber === "") {
      setControlPhoneSvgDisplay(false);
    } else {
      setControlPhoneSvgDisplay(true);
    }
  }

  function handleEditBtn() {
    setHideContactEdit(false);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    dispatch({
      type: "Update_userContact_input",
      contact: {
        fieldName: name,
        fieldValue: value,
      },
    });
    setUserNameError("");
    setEmailError("");
    setPhoneNumberError("");
    handleEmailSvgVisibility();
    handleMobileSvgVisibility();

    // setUserContact(state);
  }

  function clearForm() {
    setUserContact(state);
    dispatch({
      type: "clearInput",
     
    });
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
      !userEmail.match(
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
    clearForm(e);
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

  // function clearForm() {
  //   setUserName("");
  //   setEmail("");
  //   setMobileNumber("");
  // }

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
                name="userName"
                value={userName}
                onChange={(e) => handleInputChange(e)}
                required
              />
              <span className="userNameError">{userNameError}</span>
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
                name="userEmail"
                value={userEmail}
                onChange={handleInputChange}
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
                name="mobileNumber"
                value={mobileNumber}
                onChange={handleInputChange}
                required
              />
              <span className="phoneNumberError">{phoneNumberError}</span>
            </div>
            <Submit
              type="submit"
              className="userContactSubmit"
              hideInputContainer={(e) => {
                handleFormValidation(e);
              }}
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
