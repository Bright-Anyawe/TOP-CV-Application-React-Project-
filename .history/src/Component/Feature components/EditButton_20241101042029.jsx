// import DisplayUserContact from "./DisplayUserInfo.jsx";
import { UserContactContext } from "../App";
import { useContext } from "react";

export function Edit({
  setDisplayPersonalContact,
  hideContactEdit,
  hideForEducationEdit,
  hideProfessionalEdit,
  setHideContactEdit,
  setHideForEducationEdit,
  setHideProfessionalEdit,
  setDisplayEducationDetails,
  setDisplayProfessionalDetails,
}) {
  const { userContact, setUserName, setEmail, setMobileNumber } =
    useContext(UserContactContext);

  function handleDisplayForEdit() {
    // const edit = document.querySelector(".edit");
    // console.log(edit);
    // edit.style.display = "block";
    console.log()
    if (hideContactEdit === false) {
      setDisplayPersonalContact(true);
      console.log(userContact);
      setHideContactEdit(true);
      setUserName(userContact.personName);
      setEmail(userContact.email);
      setMobileNumber(userContact.mobileNumber);
    } else if (hideForEducationEdit === false) {
      setDisplayEducationDetails(true);
      setHideForEducationEdit(true);
    } else if (hideProfessionalEdit === false) {
      setDisplayProfessionalDetails(true);
      setHideProfessionalEdit(true);
    }
  }

  return (
    <button className="edit" onClick={handleDisplayForEdit}>
      Edit
    </button>
  );
}
