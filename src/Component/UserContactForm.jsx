import { useState } from "react";
import DisplayUserContact from "./DisplayUserInfo.jsx";

export function UserContactForm() {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [userContact, setUserContact] = useState({
    PersonName: userName,
    Email: email,
    MobileNumber: mobileNumber,
  });
  console.log(userContact);

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

  function resetInputField() {
    setuserName("");
    setEmail("");
    setmobileNumber("");
  }

  function handleDelete() {
    const inputElContainer = document.querySelector(".inputContainer");
    inputElContainer.style.display = "none";
    handleContactDisplay();
    resetInputField();
  }

  function handleContactDisplay() {
    const contactDisplay = document.querySelector(".contactDisplay");
    contactDisplay.style.display = "block";
  }

  return (
    <>
      <section className="userContact">
        <DisplayUserContact
          userContact={userContact}
          className="contactDisplay"
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="userContactInputEl"
        >
          <div className="inputContainer">
            <label htmlFor="userName" className="userContactInputEl">
              Enter your fullName
            </label>
            <input
              type="text"
              className="userContactInputEl"
              id="userName"
              value={userName}
              onChange={handleUserName}
            />
            {/* {displayElement ? userContactInputEl : pTag} */}

            {/* <p className="newValue">{userName}</p> */}

            <label htmlFor="email" className="userContactInputEl">
              Enter your Email
            </label>
            <input
              type="email"
              className="userContactInputEl"
              id="email"
              value={email}
              onChange={handleEmail}
            />
            <label htmlFor="mobileNumber" className="userContactInputEl">
              Enter your mobile number
            </label>
            <input
              type="number"
              className="userContactInputEl"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumber}
            />
          </div>
          <button type="submit" className="submit" onClick={handleDelete}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
