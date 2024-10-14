import { useState } from "react";
import { useUserContactForm } from "./UserContactForm.jsx";
import { useEducationExperienceForm } from "./EducationExperienceForm.jsx";
import { PracticalExperienceForm } from "./PracticalExperienceForm.jsx";
import { HandleHeaderInfo } from "./handleHeaderInfo.jsx";

function CvForm({ setUserContact }) {
  const {
    contactFormRender,
    userName,
    email,
    mobileNumber,
    setIsSubmitContact,
    setValueDisplayContact,
    hideInputContactContainer,
  } = useUserContactForm();
  const [title, setTitle] = useState("Please fill your Cv form🤗");

  const {
    renderEducationExperience,
    studiesTitle,
    studiesMajor,
    schoolName,
    studiesStartDate,
    studiesEndDate,
    setIsSubmitForEdu,
    setEduValueDisplay,
    hideInputContainerForEdu,
  } = useEducationExperienceForm();
  const [isSubmitForPractical, setIsSubmitForPractical] = useState(false);
  const [valueDisplayForPractical, setValueDisplayForPractical] =
    useState(false);

  function handleTitleDisplay() {
    setTitle("Great👌, your Cv has been successfully submitted");
  }

  return (
    <section id="cvForm">
      {/* <h1 className="headText">Fill out your Cv Form</h1> */}
      <HandleHeaderInfo title={title} />
      {contactFormRender}
      {EducationExperience}
      <PracticalExperienceForm />
    </section>
  );
}

export default CvForm;
