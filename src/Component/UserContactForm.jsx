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
    setIsSubmit(true)

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
    setValueDisplay(true)
  }

function handleUserContactDisplayForEdit() {
  const inputElContainer = document.querySelector(".inputContainer");
  inputElContainer.style.display = "block";

  const userContactDisplayer = document.querySelector(".contactDisplay");
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
            <label htmlFor="userName" className="userContactInputEl">
              Full_Name
            </label>
            <input
              type="text"
              placeholder="Enter your fullName"
              className="userContactInputEl"
              id="userName"
              value={userName}
              onChange={handleUserName}
            />

            <label htmlFor="email" className="userContactInputEl">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="userContactInputEl"
              id="email"
              value={email}
              onChange={handleEmail}
            />

            <label htmlFor="mobileNumber" className="userContactInputEl">
              Mobile_Number
            </label>
            <input
              type="number"
              placeholder="Enter your mobile number"
              className="userContactInputEl"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumber}
            />
          </div>

          {valueDisplay ? (
            <DisplayUserContact
              userContact={userContact}
              className="contactDisplay"
            />
          ) : null}

          {!isSubmit ? (
            <Submit
              type="submit"
              className="submit"
              hideInputContainer={hideInputContainer}
            />
          ) : (
            <Edit
              className="contactDisplay"
              handleUserContactDisplayForEdit={handleUserContactDisplayForEdit}
              // handleEditBtn={handleEditBtn}
            />
          )}
        </form>
      </section>
    </>
  );
}
