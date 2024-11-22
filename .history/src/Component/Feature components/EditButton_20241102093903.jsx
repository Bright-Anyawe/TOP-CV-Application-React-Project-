// import DisplayUserContact from "./DisplayUserInfo.jsx";
import { UserContactContext } from "../App";
import { EducationContext } from "../App";
import { ExperienceContext } from "../App";
import { useContext, useState } from "react";

export function Edit({
  hideForEducationEdit,
  hideProfessionalEdit,
  experienceIndex,
  setHideForEducationEdit,
  setHideProfessionalEdit,
  setDisplayEducationDetails,
  setDisplayProfessionalDetails,
  educationIndexEdit,
}) {
  const {
    hideContactEdit,
    setHideContactEdit,
    setDisplayPersonalContact,
    dispatch,
  } = useContext(UserContactContext);

  const { educationArray, editIndex, setEditIndex } =
    useContext(EducationContext);

  const { experienceArray, setExperienceEditIndex } =
    useContext(ExperienceContext);
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

  function handleEducationEditInput() {
    console.log(educationArray[educationIndexEdit]);
    dispatch({
      type: "UpdateEducationEditInput",
      education: educationArray[educationIndexEdit],
    });
  }

  function handleExperienceEditInput() {
    console.log(experienceArray[experienceIndex]);
    dispatch({
      type: "UpdateExperienceEditInput",
      experience: experienceArray[experienceIndex],
    });
  }

  function handleDisplayForEdit(e, educationIndexEdit) {
    e.persist();
    if (hideContactEdit === false) {
      setDisplayPersonalContact(true);
      console.log(userContact);
      setHideContactEdit(true);
      handleContactEditInput();
    } else if (hideForEducationEdit === false) {
      console.log(educationArray);
      setEditIndex(educationIndexEdit);
      setDisplayEducationDetails(true);
      setHideForEducationEdit(true);
    } else if (hideProfessionalEdit === false) {
      handleExperienceEditInput();

      setDisplayProfessionalDetails(true);
      setHideProfessionalEdit(true);
      setExperienceEditIndex(experienceIndex);
    }
  }

  return (
    <button
      className="edit"
      index={experienceIndex}
      onClick={(e) => handleDisplayForEdit(e, educationIndexEdit)}
    >
      Edit
    </button>
  );
}
