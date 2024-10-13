

function DisplayUserContact({ className}) {

    //     const contactDisplay = document.querySelector(`.${className}`);
    // contactDisplay.style.display = "none";
        let userContact = JSON.parse(localStorage.getItem('userContact')) 

return (
  <div className="userContactDisplay">
    <p className="userNameContainer">
      {" "}
      {/* <span> User Name:</span> {userContact.PersonName}{" "} */}
    </p>
    <p className="userEmailContainer">
      <span>Email:</span> {userContact.Email}{" "}
    </p>
    <p className="phoneNumberContainer">
      {" "}
      <span>Phone Number:</span> {userContact.MobileNumber}{" "}
    </p>
  </div>
);
}

export default DisplayUserContact