import Icon from "@mdi/react";
import { mdiEmail } from "@mdi/js";

<Icon path={mdiEmail} size={1} />;

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
