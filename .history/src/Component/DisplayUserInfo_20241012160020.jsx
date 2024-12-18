

function DisplayUserContact({ className }) {
  //     const contactDisplay = document.querySelector(`.${className}`);
  // contactDisplay.style.display = "none";
  let userContact = JSON.parse(localStorage.getItem("userContact"));

  return (
    <div className="userContactDisplay">
      <p className="userNameContainer"> {userContact.PersonName} </p>
      <div className="emailPhoneContainer">
        <p className="userEmailContainer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-mail "
            >
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
          </span>{" "}
          {userContact.Email}{" "}
        </p>
        <p className="phoneNumberContainer">
          {" "}
          
          </span>{" "}
          {userContact.MobileNumber}{" "}
        </p>
      </div>
    </div>
  );
}

export default DisplayUserContact;
