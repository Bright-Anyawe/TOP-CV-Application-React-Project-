import { useState } from "react";
import { useUserContactForm } from "./UserContactForm.jsx";
import { useEducationExperienceForm } from './EducationExperienceForm.jsx'
import { PracticalExperienceForm } from "./PracticalExperienceForm.jsx";
import { HandleHeaderInfo } from "./handleHeaderInfo.jsx";


function CvApp() {
  const {
    renderEducationExperience,
    schoolName,
    studiesTitle,
    studiesDate,
    isSubmitForEdu,
    eduValueDisplay,
  } = useEducationExperienceForm();
  const {contactFormRender, userName, email, mobileNumber} = useUserContactForm()
  const [title, setTitle] = useState('Please fill your Cv form🤗')


  function handleTitleDisplay() {
    setTitle('Great👌, your Cv has been successfully submitted')
  }
    window.onload = () => {
      console.log(personContact);
      if (Object.keys(personContact).length !== 0) {
        setIsSubmit(true);
        setValueDisplay(true);
        hideInputContainer();
      } else {
        setIsSubmit(true);
        setValueDisplay(true);
      }

      return;
    };

    window.onload = () => {
      let personContact = JSON.parse(localStorage.getItem("userContact"));
      let personEducationExperience = JSON.parse(
        localStorage.getItem("educationExperience")
      );
      console.log(personEducationExperience);

      (function () {
        // …

        
      })();

      if (Object.keys(personEducationExperience).length !== 0) {
        alert("There is a value ");

        setIsSubmit(true);
        setValueDisplay(true);
        hideInputContainer();
      } else {
        setIsSubmit(true);
        setValueDisplay(true);
      }

      return;
    };


    window.onload = () => {
      let personEducationExperience = JSON.parse(
        localStorage.getItem("educationExperience")
      );
      console.log(personEducationExperience);

      if (Object.keys(personEducationExperience).length !== 0) {
        alert("There is a value ");

        setIsSubmit(true);
        setValueDisplay(true);
        hideInputContainer();
      } else {
        setIsSubmit(true);
        setValueDisplay(true);
      }

      return;
    };

  return (

    <>  
      {/* <h1 className="headText">Fill out your Cv Form</h1> */}
      <HandleHeaderInfo title={title} />
      {contactFormRender}
     {renderEducationExperience }
      <PracticalExperienceForm handleTitleDisplay={handleTitleDisplay} {...{schoolName, studiesTitle, studiesDate, userName, email, mobileNumber}} />
    </>
  );
}

export default CvApp;
