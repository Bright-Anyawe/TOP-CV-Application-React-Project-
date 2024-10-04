import { useState } from "react";
import { useUserContactForm } from "./UserContactForm.jsx";
import { useEducationExperienceForm } from './EducationExperienceForm.jsx'
import { PracticalExperienceForm } from "./PracticalExperienceForm.jsx";
import { HandleHeaderInfo } from "./handleHeaderInfo.jsx";


function CvApp() {
  const {renderEducationExperience, schoolName, studiesTitle, studiesDate} = useEducationExperienceForm()
  const {contactFormRender, userName, email, mobileNumber} = useUserContactForm()
  const [title, setTitle] = useState('Please fill your Cv form')


  function handleTitleDisplay() {
    setTitle('Great👌, your Cv has been successfully submitted')
  }

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
