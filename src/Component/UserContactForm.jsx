import { useState } from "react";
import DisplayUserContact from "./DisplayUserInfo.jsx";
import { Edit } from "./EditButton.jsx";
import { Submit } from "./SubmitBtn.jsx";

export function UserContactForm() {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");

  const [userContact, setUserContact] = useState({
    PersonName: userName,
    Email: email,
    MobileNumber: mobileNumber,
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const [valueDisplay, setValueDisplay] = useState(false);

  function handleUserName(e) {
    const updateUserName = e.target.value;
    setuserName(updateUserName);
    handleUserContact(updateUserName, email, mobileNumber);
  }

  function handleEmail(e) {
    const updateEmail = e.target.value;
    setEmail(updateEmail);
    handleUserContact(userName, updateEmail, mobileNumber);
  }

  function handleMobileNumber(e) {
    const updateMobileNumber = e.target.value;
    setmobileNumber(updateMobileNumber);
    handleUserContact(userName, email, updateMobileNumber);
  }

  function handleUserContact(updateUserName, updateEmail, updateMobileNumber) {
    const personContact = {
      ...userContact,
      PersonName: updateUserName,
      Email: updateEmail,
      MobileNumber: updateMobileNumber,
    };
    setUserContact(personContact);
  }

  function hideInputContainer() {
    const inputElContainer = document.querySelector(".inputContainer");
    inputElContainer.style.display = "none";
    // handleContactDisplay();
    // resetInputField();
    setIsSubmit(true);

    handleValueDisplay();

    // handleEditButton();
  }

  // function handleContactDisplay() {
  //   const contactDisplay = document.querySelector(".contactDisplay");
  //   contactDisplay.style.display = "block";
  // }

  function handleEditBtn() {
    setIsSubmit(false);
    setValueDisplay(false);
  }

  function handleValueDisplay() {
    setValueDisplay(true);
  }

  function handleUserContactDisplayForEdit() {
    const inputElContainer = document.querySelector(".inputContainer");
    inputElContainer.style.display = "block";

    const userContactDisplayer = document.querySelector(".userContactDisplay");
    userContactDisplayer.style.display = "none";

    //   <UserContactForm />;
    handleEditBtn();
  }

  return (
    <>
      <section className="userContact">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="userContactInputEl"
        >
          <div className="inputContainer">
            <div className="fullNameContainer">
              <label htmlFor="userName" className="userNameLabel">
                Full_Name
              </label>
              <input
                type="text"
                placeholder="Enter your fullName"
                className="userNameInputEl"
                id="userName"
                value={userName}
                onChange={handleUserName}
              />
            </div>

            <div className="emailContainer">
              <label htmlFor="email" className="emailLabel">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="emailInputEl"
                id="email"
                value={email}
                onChange={handleEmail}
              />
            </div>

            <div className="mobileNumberContainer">
              <label htmlFor="mobileNumber" className="mobileNumberLabel">
                Mobile_Number
              </label>
              <input
                type="number"
                placeholder="Enter your mobile number"
                className="mobileNumberInputEl"
                id="mobileNumber"
                value={mobileNumber}
                onChange={handleMobileNumber}
              />
            </div>
          </div>

          {valueDisplay ? (
            <DisplayUserContact
              userContact={userContact}
              className="userContactDisplay"
            />
          ) : null}

          {!isSubmit ? (
            <Submit
              type="submit"
              className="userContactSubmit"
              hideInputContainer={hideInputContainer}
            />
          ) : (
            <Edit
              className="userContactEditComponent"
              handleUserContactDisplayForEdit={handleUserContactDisplayForEdit}
              // handleEditBtn={handleEditBtn}
            />
          )}
        </form>
      </section>
    </>
  );
}
