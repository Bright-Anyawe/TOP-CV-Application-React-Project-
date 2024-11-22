// import DisplayUserContact from "./DisplayUserInfo.jsx";
import { UserContactContext } from "../App";
import { EducationContext } from "../App";
import { useContext, useState } from "react";

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

  const { educationArray } = useContext(EducationContext);
  let userContact = JSON.parse(localStorage.getItem("userContact")) || {};
  const [editIndex, setEditIndex] = useState(null)

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
      console.log(educationArray);
      setEditIndex(index)
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
