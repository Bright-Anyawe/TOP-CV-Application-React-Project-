import { UserContactForm } from "./UserContactForm.jsx";
import { EducationExperienceForm } from './EducationExperienceForm.jsx'
import { PracticalExperienceForm } from "./PracticalExperienceForm.jsx";
import { HandleHeaderInfo } from "./handleHeaderInfo.jsx";

function CvApp() {

  
  return (
    <>
      {/* <h1 className="headText">Fill out your Cv Form</h1> */}
      <HandleHeaderInfo />
      <UserContactForm />
      <EducationExperienceForm />
      <PracticalExperienceForm />
    </>
  );
}

export default CvApp;
