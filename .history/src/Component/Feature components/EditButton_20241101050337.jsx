// import DisplayUserContact from "./DisplayUserInfo.jsx";
import { UserContactContext } from "../App";
import { EducationContext } from "../App";
import { useContext } from "react";

export function Edit({
  hideForEducationEdit,
  hideProfessionalEdit,

  setHideForEducationEdit,
  setHideProfessionalEdit,
  setDisplayEducationDetails,
  setDisplayProfessionalDetails,
}) {
  const {
    hideContactEdit,
    setHideContactEdit,
    setDisplayPersonalContact,
    dispatch,
  } = useContext(UserContactContext);

  const {educationArray} = useContext(Educa)
  let userContact = JSON.parse(localStorage.getItem("userContact")) || {};

  function handleContactEditInput() {
    dispatch({
      type: "updateContactEditInput",
      userContact: {
        userName: userContact.userName,
        userEmail: userContact.userEmail,
        mobileNumber: userContact.mobileNumber,
      },
    });
  }

  function handleDisplayForEdit() {
    if (hideContactEdit === false) {
      setDisplayPersonalContact(true);
      console.log(userContact);
      setHideContactEdit(true);
      handleContactEditInput(); 
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
