

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
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>phone</title>
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
          </span>{" "}
          
          {userContact.MobileNumber}{" "}
        </p>
      </div>
    </div>
  );
}

export default DisplayUserContact;
