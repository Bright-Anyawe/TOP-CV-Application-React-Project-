function DisplayUserContact({userContact, className}) {

    //     const contactDisplay = document.querySelector(`.${className}`);
    // contactDisplay.style.display = "none";
        

return (
  <div className={className}>
    <p>
      {" "}
      <span>Name:</span> {userContact.PersonName}{" "}
    </p>
    <p>
      <span>Email:</span> {userContact.Email}{" "}
    </p>
    <p>
      {" "}
      <span>Mobile Number:</span> {userContact.MobileNumber}{" "}
    </p>
  </div>
);
}

export default DisplayUserContact