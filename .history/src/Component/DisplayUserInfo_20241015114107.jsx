import { Edit } from "./EditButton";

function DisplayUserContact({
  setDisplayPersonalContact,
  controlSvgDisplay,
  hideEdit,
  setHideEdit,
}) {
  //     const contactDisplay = document.querySelector(`.${className}`);
  // contactDisplay.style.display = "none";
  let userContact = JSON.parse(localStorage.getItem("userContact"));

  return (
    <div id="userContactDisplayContainer">
      <div className="userContactDisplay">
        <p className="userNameContainer"> {userContact.PersonName} </p>
        <div className="emailPhoneContainer">
          <p className="userEmailContainer">
            <span>
              {controlSvgDisplay ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-mail "
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              ) : null}
            </span>{" "}
            {userContact.Email}{" "}
          </p>
          <p className="phoneNumberContainer">
            {" "}
            <span>
              {controlSvgDisplay ?  : null}
             
            </span>{" "}
            {userContact.MobileNumber}{" "}
          </p>
        </div>
        {hideEdit ? (
          ""
        ) : (
          <Edit
            setDisplayPersonalContact={setDisplayPersonalContact}
            setHideEdit={setHideEdit}
            hideEdit={hideEdit}
          />
        )}
      </div>
    </div>
  );
}

export default DisplayUserContact;
