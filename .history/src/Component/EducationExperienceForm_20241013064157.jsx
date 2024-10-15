import { useState } from "react";
import DisplayEducationExperience from "./DisplayEducationInfo.jsx";
import { Edit } from "./EditButton.jsx";
import { Submit } from "./SubmitBtn.jsx";

export function useEducationExperienceForm() {
  const [studiesTitle, setStudiesTitle] = useState("");
  const [studiesMajor, setStudiesMajor] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [studiesStartDate, setStudiesStartDate] = useState("");
  const [studiesEndDate, setStudiesEndDate] = useState("");

  const [educationExperience, setEducationExperience] = useState({
    StudiesTitle: studiesTitle || "",
    StudiesMajor: studiesMajor || "",
    SchoolName: schoolName || "",
    StudiesStartDate: studiesStartDate || "",
    StudiesEndDate: studiesEndDate || "",
  });

  const [isSubmitForEdu, setIsSubmitForEdu] = useState(false);
  const [displayEducationDetails, setDisplayEducationDetails] = useState(false);

  function handleStudiesTitle(e) {
    const updateStudiesTitle = e.target.value;
    setStudiesTitle(updateStudiesTitle);
    handleEducationExperience(
      updateStudiesTitle,
      studiesMajor,
      schoolName,
      studiesStartDate,
      studiesEndDate
    );
  }
  function handleStudiesMajor(e) {
    const updateStudiesMajor = e.target.value;
    setStudiesMajor(updateStudiesMajor);
    handleEducationExperience(
      studiesTitle,
      updateStudiesMajor,
      updateSchoolName,
      studiesStartDate,
      studiesEndDate
    );
  }

  function handleSchoolName(e) {
    const updateSchoolName = e.target.value;
    setSchoolName(updateSchoolName);
    handleEducationExperience(
      studiesTitle,
      studiesMajor,
      updateSchoolName,
      studiesStartDate,
      studiesEndDate
    );
  }

  function handleStudiesStartDate(e) {
    const updateStudiesStartDate = e.target.value;
    setStudiesStartDate(updateStudiesStartDate);
    handleEducationExperience(
      studiesTitle,
      studiesMajor,
      schoolName,
      updateStudiesStartDate,
      studiesEndDate
    );
  }

  function handleStudiesEndDate(e) {
    const updateStudiesEndDate = e.target.value;
    setStudiesEndDate(updateStudiesEndDate);
    handleEducationExperience(
      studiesTitle,
      studiesMajor,
      schoolName,
      studiesStartDate,
      updateStudiesEndDate
    );
  }

  function handleEducationExperience(
    updateStudiesTitle,
    updateStudiesMajor,
    updateSchoolName,
    updateStudiesStartDate,
    updateStudiesEndDate
  ) {
    const educationExperienceDetail = {
      ...educationExperience,
      StudiesTitle: updateStudiesTitle,
      StudiesMajor: updateStudiesMajor,
      SchoolName: updateSchoolName,
      StudiesStartDate: updateStudiesStartDate,
      StudiesEndDate: updateStudiesEndDate,
    };

    localStorage.setItem(
      "educationExperience",
      JSON.stringify(educationExperienceDetail)
    );
    setEducationExperience(educationExperienceDetail);
  }

  function hideInputContainerForEdu() {
    const inputElContainer = document.querySelector(
      ".educationExperienceInputContainer"
    );
    console.log(inputElContainer);

    inputElContainer.style.display = "none";

    setIsSubmitForEdu(true);
    handleValueDisplay();
  }

  function handleEditBtn() {
    setIsSubmitForEdu(false);
    setEduValueDisplay(false);
  }

  function handleValueDisplay() {
    setEduValueDisplay(true);
  }

  function handleEducationExperienceDisplayForEdit() {
    const inputElContainer = document.querySelector(
      ".educationExperienceInputContainer"
    );
    inputElContainer.style.display = "block";

    handleEditBtn();
  }
 function showEducationDetailsForm() {
   displayEducationDetails === false
     ? setDisplayEducationDetails(true)
     : setDisplayEducationDetails(false);
 }
  return {
    studiesTitle,
    studiesMajor,
    schoolName,
    studiesStartDate,
    studiesEndDate,

    setIsSubmitForEdu,
    // setEduValueDisplay,
    // hideInputContainerForEdu,
    renderEducationExperience: (
      <>
        <section className="educationExperience">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* {eduValueDisplay ? (
              <DisplayEducationExperience
                educationExperience={educationExperience}
              />
            ) : null} */}
            <div
              className="educationDetailsHeader"
              onClick={showEducationDetailsForm}
            >
              <p>Education Detail</p>
              <p>a Down logo must be here</p>
            </div>
            {
              disp
            }

            {!isSubmitForEdu ? (
              <Submit
                type="submit"
                className="submit"
                hideInputContainer={hideInputContainerForEdu}
              />
            ) : (
              <Edit
                className="contactDisplay"
                handleUserContactDisplayForEdit={
                  handleEducationExperienceDisplayForEdit
                }
              />
            )}
          </form>
        </section>
      </>
    ),
  };
}