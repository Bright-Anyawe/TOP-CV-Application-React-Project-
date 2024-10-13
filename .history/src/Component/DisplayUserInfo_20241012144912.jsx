

function DisplayUserContact({ className}) {

    //     const contactDisplay = document.querySelector(`.${className}`);
    // contactDisplay.style.display = "none";
        let userContact = JSON.parse(localStorage.getItem('userContact')) 

return (
  <div className="userContactDisplay">
    <p className="userNameContainer">
      {" "}
      <span> User Name:</span> {userContact.PersonName}{" "}
    </p>
    <p className="userNameContainer">
      <span>Email:</span> {userContact.Email}{" "}
    </p>
    <p>
      {" "}
      <span>Phone Number:</span> {userContact.MobileNumber}{" "}
    </p>
  </div>
);
}

export default DisplayUserContact