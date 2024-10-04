import { useState } from "react";
import { UserContactForm } from "./UserContactForm.jsx";
import { useEducationExperienceForm } from './EducationExperienceForm.jsx'
import { PracticalExperienceForm } from "./PracticalExperienceForm.jsx";
import { HandleHeaderInfo } from "./handleHeaderInfo.jsx";


function CvApp() {
  const [title, setTitle] = useState('Please fill your Cv form')


  function handleTitleDisplay() {
    setTitle('Thanks, your Cv has been successfully submitted')
  }

  const {render, schoolName,}

  return (
    <>
      {/* <h1 className="headText">Fill out your Cv Form</h1> */}
      <HandleHeaderInfo title={title} />
      <UserContactForm />
      <useEducationExperienceForm />
      <PracticalExperienceForm handleTitleDisplay={handleTitleDisplay} />
    </>
  );
}

export default CvApp;
