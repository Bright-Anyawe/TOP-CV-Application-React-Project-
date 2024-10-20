import { useState } from "react";
import { UserContactForm } from "./UserContactForm.jsx";
import { EducationExperienceForm } from "./EducationExperienceForm.jsx";
import { PracticalExperienceForm } from "./PracticalExperienceForm.jsx";
import { HandleHeaderInfo } from "./handleHeaderInfo.jsx";

function CvForm({
  setUserContact,
  userContact,
  setEducationExperience,
  educationExperience,
  educationArray,
  setEducationArray,
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
  hideContactEdit,
  setHideContactEdit,
  hideForEducationEdit,
  setHideForEducationEdit,
  hideProfessionalEdit,
  setHideProfessionalEdit,
  setHideDate,
}) {
  return (
    <div id="cvForm">
      {/* <h1 className="headText">Fill out your Cv Form</h1> */}
      <HandleHeaderInfo
        setHideContactEdit={setHideContactEdit}
        setHideForEducationEdit={setHideForEducationEdit}
        setHideProfessionalEdit={setHideProfessionalEdit}
      />

      <UserContactForm
        setUserContact={setUserContact}
        userContact={userContact}
        displayPersonalContact={displayPersonalContact}
        setDisplayPersonalContact={setDisplayPersonalContact}
        setControlEmailSvgDisplay={setControlEmailSvgDisplay}
        setControlPhoneSvgDisplay={setControlPhoneSvgDisplay}
        setHideContactEdit={setHideContactEdit}
        hideContactEdit={hideContactEdit}
      />

      <EducationExperienceForm
        setEducationExperience={setEducationExperience}
        educationExperience={educationExperience}
        educationArray={educationArray}
        seteducationArray={educationArray}
        displayEducationDetails={displayEducationDetails}
        setDisplayEducationDetails={setDisplayEducationDetails}
        setHideForEducationEdit={setHideForEducationEdit}
        setHideDate={setHideDate}
      />

      <PracticalExperienceForm
        setPracticalExperience={setPracticalExperience}
        practicalExperience={practicalExperience}
        displayProfessionalDetails={displayProfessionalDetails}
        setDisplayProfessionalDetails={setDisplayProfessionalDetails}
        setHideProfessionalEdit={setHideProfessionalEdit}
      />
    </div>
  );
}

export default CvForm;
