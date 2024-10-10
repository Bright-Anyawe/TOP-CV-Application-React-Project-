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
    setIsSubmitForEdu,
    setEduValueDisplay,
    hideInputContainerForEdu,
  } = useEducationExperienceForm();

  const {
    contactFormRender,
    userName,
    email,
    mobileNumber,
    setIsSubmitContact,
    setValueDisplayContact,
    hideInputContactContainer,
  } = useUserContactForm();
  const [title, setTitle] = useState('Please fill your Cv form🤗')


  function handleTitleDisplay() {
    setTitle('Great👌, your Cv has been successfully submitted')
  }
    window.onload = () => {
      let personContact = JSON.parse(localStorage.getItem("userContact"));
      let personEducationExperience = JSON.parse(
        localStorage.getItem("educationExperience")
      );
      console.log(personContact)
      console.log(personEducationExperience);

          if (Object.keys(personContact).length !== 0) {
            alert("There is a value for contact ");

            setIsSubmitContact(true);
            setValueDisplayContact(true);
            hideInputContactContainer();
          } else {
            setIsSubmit(true);
            setValueDisplay(true);
          }

           
      if (
        Object.keys(personEducationExperience).length !== 0 &&
        personEducationExperience.constructor !== Object
      ) {
        alert(``);

        setIsSubmitForEdu(true);
        setEduValueDisplay(true);
        hideInputContainerForEdu();
      } else {
        setIsSubmitForEdu(true);
        setEduValueDisplay(true);
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
