
;


function DisplayUserContact({ className }) {
  //     const contactDisplay = document.querySelector(`.${className}`);
  // contactDisplay.style.display = "none";
  let userContact = JSON.parse(localStorage.getItem("userContact"));

  return (
    <div className="userContactDisplay">
      <p className="userNameContainer"> {userContact.PersonName} </p>
      <div className="">
        <p className="userEmailContainer">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>email</title>
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
          </span>{" "}
          {userContact.Email}{" "}
        </p>
        <p className="phoneNumberContainer">
          {" "}
          <span>Phone Number:</span> {userContact.MobileNumber}{" "}
        </p>
      </div>
    </div>
  );
}

export default DisplayUserContact;
