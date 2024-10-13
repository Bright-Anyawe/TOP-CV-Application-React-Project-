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
    StudiesSDate: studiesTitle || "",
    StudiesDate: studiesDate || "",
  });

  const [isSubmitForEdu, setIsSubmitForEdu] = useState(false);
  const [eduValueDisplay, setEduValueDisplay] = useState(false);

  
  function handleStudiesTitle(e) {
    const updateStudiesTitle = e.target.value;
    setStudiesTitle(updateStudiesTitle);
    handleEducationExperience(schoolName, updateStudiesTitle, studiesDate);
  }

  function handleSchoolName(e) {
    const updateSchoolName = e.target.value;
    setSchoolName(updateSchoolName);
    handleEducationExperience(updateSchoolName, studiesTitle, studiesDate);
  }

  function handleStudiesTitle(e) {
    const updateStudiesTitle = e.target.value;
    setStudiesTitle(updateStudiesTitle);
    handleEducationExperience(schoolName, updateStudiesTitle, studiesDate);
  }

  function handleStudiesDate(e) {
    const updateStudiesDate = e.target.value;
    setStudiesDate(updateStudiesDate);
    handleEducationExperience(schoolName, studiesTitle, updateStudiesDate);
  }

  function handleEducationExperience(
    updateSchoolName,
    updateStudiesTitle,
    updateStudiesDate
  ) {
    console.log(updateSchoolName);
    console.log(updateStudiesTitle);
    console.log(updateStudiesDate);

    const educationExperienceDetail = {
      ...educationExperience,
      SchoolName: updateSchoolName,
      StudiesTitle: updateStudiesTitle,
      StudiesDate: updateStudiesDate,
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

  return {
    schoolName,
    studiesTitle,
    studiesDate,
    setIsSubmitForEdu,
    setEduValueDisplay,
    hideInputContainerForEdu,
    renderEducationExperience: (
      <>
        <section className="educationExperience">
          <form onSubmit={(e) => e.preventDefault()}>
            {eduValueDisplay ? (
              <DisplayEducationExperience
                educationExperience={educationExperience}
              />
            ) : null}
            <div className="educationExperienceInputContainer">
              <div className="studiesTitleContainer">
                {" "}
                <label htmlFor="studiesTitle">Degree</label>
                <input
                  type="text"
                  placeholder="Enter studies title"
                  value={studiesTitle}
                  onChange={handleStudiesTitle}
                  className="studiesTitle"
                  id="studiesTitle"
                />
              </div>
              <div className="studiesMajor">
                {" "}
                <label htmlFor="studiesTitle">Major</label>
                <input
                  type="text"
                  placeholder="Computer engineering"
                  value={studiesMajor}
                  onChange={handleStudiesMajor}
                  className="studiesMajor"
                />
              </div>
              <div className="schoolNameContainer">
                <label htmlFor="schoolName">School</label>
                <input
                  type="text"
                  placeholder="University of Ghana"
                  value={schoolName}
                  className="SchoolName"
                  id="schoolName"
                  onChange={handleSchoolName}
                />
              </div>
              <label htmlFor="date">Select date of studies</label>
              <input
                type="date"
                placeholder="Select date of studies"
                value={studiesDate}
                onChange={handleStudiesDate}
                className="date"
                id="date"
              />
            </div>

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
