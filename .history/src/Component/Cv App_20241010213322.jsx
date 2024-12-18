import { useState } from "react";
import { useUserContactForm } from "./UserContactForm.jsx";
import { useEducationExperienceForm } from "./EducationExperienceForm.jsx";
import { PracticalExperienceForm } from "./PracticalExperienceForm.jsx";
import { HandleHeaderInfo } from "./handleHeaderInfo.jsx";

function CvApp() {
  const {
    contactFormRender,
    userName,
    email,
    mobileNumber,
    setIsSubmitContact,
    setValueDisplayContact,
    hideInputContactContainer,
  } = useUserContactForm();
  const [title, setTitle] = useState("Please fill your Cv form🤗");

  const {
    renderEducationExperience,
    schoolName,
    studiesTitle,
    studiesDate,
    setIsSubmitForEdu,
    setEduValueDisplay,
    hideInputContainerForEdu,
  } = useEducationExperienceForm();
  const [isSubmitForPractical, setIsSubmitForPractical] = useState(false);
  const [valueDisplayForPractical, setValueDisplayForPractical] =
    useState(false);

  function handleTitleDisplay() {
    setTitle("Great👌, your Cv has been successfully submitted");
  }
  window.onload = () => {
    let personContact = JSON.parse(localStorage.getItem("userContact"));
    let personEducationExperience = JSON.parse(
      localStorage.getItem("educationExperience")
    );
    let practicalExperience = JSON.parse(
      localStorage.getItem("practicalExperience")
    );

    if (Object.keys(personContact).length !== 0) {
      alert("There is a value for contact ");

      setIsSubmitContact(true);
      setValueDisplayContact(true);
      hideInputContactContainer();
    } else {
      setIsSubmitContact(false);
      setIsSubmitContact(false);
    }

    if (Object.keys(personEducationExperience).length !== 0) {
      setIsSubmitForEdu(true);
      setEduValueDisplay(true);
      hideInputContainerForEdu();
    } else {
      setIsSubmitForEdu(false);
      setEduValueDisplay(false);
    }

    if (Object.keys(practicalExperience).length !== 0) {
  setIsSubmitForPractical(true);
  setValueDisplayForPractical(true)
   const inputElContainer = document.querySelector(
     ".practicalExperienceInputContainer"
   );
   inputElContainer.style.display = "none";
 }
   else {
      setIsSubmitForPractical(false);
      setValueDisplayForPractical(false);
    }

    return;
  };
 
  return (
    <>
      {/* <h1 className="headText">Fill out your Cv Form</h1> */}
      <HandleHeaderInfo title={title} />
      {contactFormRender}
      {renderEducationExperience}
      <PracticalExperienceForm
        handleTitleDisplay={handleTitleDisplay}
        {...{
          schoolName,
          studiesTitle,
          studiesDate,
          userName,
          email,
          mobileNumber,
          isSubmitForPractical
          setIsSubmitForPractical,
          setValueDisplayForPractical,
        }}
        practicalExperienceLocalStorageDataDisplay={
          practicalExperienceLocalStorageDataDisplay
        }
      />
    </>
  );
}

export default CvApp;
