

function DisplayUserContact({ userContact, className }) {

    //     const contactDisplay = document.querySelector(`.${className}`);
    // contactDisplay.style.display = "none";
        const user

return (
  <div className={className}>
    <p>
      {" "}
      <span> User Name:</span> {userContact.PersonName}{" "}
    </p>
    <p>
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