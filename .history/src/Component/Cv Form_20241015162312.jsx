import { useState } from "react";
import UserContactForm from "./UserContactForm.jsx";
import { EducationExperienceForm } from "./EducationExperienceForm.jsx";
import { PracticalExperienceForm } from "./PracticalExperienceForm.jsx";
import { HandleHeaderInfo } from "./handleHeaderInfo.jsx";

function CvForm({
  setUserContact,
  userContact,
  setEducationExperience,
  educationExperience,
  practicalExperience,
  setPracticalExperience,
  displayPersonalContact,
  setDisplayPersonalContact,
  displayEducationDetails,
  setDisplayEducationDetails,
  displayProfessionalDetails,
  setDisplayProfessionalDetails,
  setControlEmailSvgDisplay,
  setControlPhoneSvgDisplay,
  setHideEdit,

  setHideEProfessionalEdit
  hideEdit,
}) {
  return (
    <div id="cvForm">
      {/* <h1 className="headText">Fill out your Cv Form</h1> */}
      <HandleHeaderInfo />

      <UserContactForm
        setUserContact={setUserContact}
        userContact={userContact}
        displayPersonalContact={displayPersonalContact}
        setDisplayPersonalContact={setDisplayPersonalContact}
        setControlEmailSvgDisplay={setControlEmailSvgDisplay}
        setControlPhoneSvgDisplay={setControlPhoneSvgDisplay}
        setHideEdit={setHideEdit}
        hideEdit={hideEdit}
      />

      <EducationExperienceForm
        setEducationExperience={setEducationExperience}
        educationExperience={educationExperience}
        displayEducationDetails={displayEducationDetails}
        setDisplayEducationDetails={setDisplayEducationDetails}
        setHideEdit={setHideEdit}
      />

      <PracticalExperienceForm
        setPracticalExperience={setPracticalExperience}
        practicalExperience={practicalExperience}
        displayProfessionalDetails={displayProfessionalDetails}
        setDisplayProfessionalDetails={setDisplayProfessionalDetails}
        setHideEdit={setHideEdit}
      />
    </div>
  );
}

export default CvForm;
