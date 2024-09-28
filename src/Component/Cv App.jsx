import { UserContactForm } from "./UserContactForm.jsx";
import { EducationExperienceForm } from './EducationExperienceForm.jsx'
import { PracticalExperienceForm } from "./PracticalExperienceForm.jsx";


function CvApp() {
  return (
    <div>
      <UserContactForm />
      <EducationExperienceForm />
      <PracticalExperienceForm />
    </div>
  );
}

export default CvApp;
