import { useState } from "react";
import { UserContactForm } from "./UserContactForm.jsx";
import { useEducationExperienceForm } from './EducationExperienceForm.jsx'
import { PracticalExperienceForm } from "./PracticalExperienceForm.jsx";
import { HandleHeaderInfo } from "./handleHeaderInfo.jsx";


function CvApp() {
  const {render, schoolName, studiesTitle, studiesDate} = useEducationExperienceForm()
  const [title, setTitle] = useState('Please fill your Cv form😒😒😒')


  function handleTitleDisplay() {
    setTitle('Great👌, your Cv has been successfully submitted')
  }

  return (

    <>
      {/* <h1 className="headText">Fill out your Cv Form</h1> */}
      <HandleHeaderInfo title={title} />
      <UserContactForm />
      {render }
      <PracticalExperienceForm handleTitleDisplay={handleTitleDisplay} {...{schoolName, studiesTitle, studiesDate}} />
    </>
  );
}

export default CvApp;
