import { useState } from "react";
import  UserContactForm  from "./UserContactForm.jsx";
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
    <section id="cvForm">
      {/* <h1 className="headText">Fill out your Cv Form</h1> */}
      <HandleHeaderInfo />
      <UserContactForm
        setUserContact={setUserContact}
        userContact={userContact}
        displayPersonalContact={displayPersonalContact}
        setDisplayPersonalContact={setDisplayPersonalContact}
      />


      <EducationExperienceForm
        setEducationExperience={setEducationExperience}
        educationExperience={educationExperience}
        // setHideEdit={setHideEdit}
      />

      
      <PracticalExperienceForm
        setPracticalExperience={setPracticalExperience}
        practicalExperience={practicalExperience}
      />
    </section>
  );
}

export default CvForm;
