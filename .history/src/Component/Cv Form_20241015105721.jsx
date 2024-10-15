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
  setDisplayEducationDetail,
  setHideEdit,
  hideEdit,
}) {
  // const {
  //   contactFormRender,
  //   userName,
  //   email,
  //   mobileNumber,
  //   setIsSubmitContact,
  //   setValueDisplayContact,
  //   hideInputContactContainer,
  // } = useUserContactForm();
  // const [title, setTitle] = useState("Please fill your Cv form🤗");

  // const {
  //   renderEducationExperience,
  //   studiesTitle,
  //   studiesMajor,
  //   schoolName,
  //   studiesStartDate,
  //   studiesEndDate,
  //   setIsSubmitForEdu,
  //   setEduValueDisplay,
  //   hideInputContainerForEdu,
  // } = useEducationExperienceForm();
  // const [isSubmitForPractical, setIsSubmitForPractical] = useState(false);
  // const [valueDisplayForPractical, setValueDisplayForPractical] =
  //   useState(false);

  // function handleTitleDisplay() {
  //   setTitle("Great👌, your Cv has been successfully submitted");
  // }

  return (
    <div id="cvForm">
      {/* <h1 className="headText">Fill out your Cv Form</h1> */}
      <HandleHeaderInfo />
      <UserContactForm
        setUserContact={setUserContact}
        userContact={userContact}
        displayPersonalContact={displayPersonalContact}
        setDisplayPersonalContact={setDisplayPersonalContact}
        setHideEdit={setHideEdit}
        hideEdit={hideEdit}
      />

      <EducationExperienceForm
        setEducationExperience={setEducationExperience}
        educationExperience={educationExperience}
        displayEducationDetails={displayEducationDetails}
        setDisplayEducationDetails={setDisplayEducationDetail}
        displayProfessionalDetails={displayProfessionalDetails}
         setDisplayProfessionalDetails={set},
        setHideEdit={setHideEdit}
      />

      <PracticalExperienceForm
        setPracticalExperience={setPracticalExperience}
        practicalExperience={practicalExperience}
      />
    </div>
  );
}

export default CvForm;
