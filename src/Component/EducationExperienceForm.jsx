import { useState } from "react";
import DisplayEducationExperience from "./DisplayEducationInfo.jsx";
import { Edit } from "./EditButton.jsx";
import { Submit } from "./SubmitBtn.jsx";

export function EducationExperienceForm() {
  const [schoolName, setSchoolName] = useState("");
  const [studiesTitle, setStudiesTitle] = useState("");
  const [studiesDate, setStudiesDate] = useState("");

  const [educationExperience, setEducationExperience] = useState({
    SchoolName: schoolName,
    StudiesTitle: studiesTitle,
    StudiesDate: studiesDate,
  });


  const [isSubmit, setIsSubmit] = useState(false);
  const [valueDisplay, setValueDisplay] = useState(false);


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
    const educationExperienceDetail = {
      ...educationExperience,
      SchoolName: updateSchoolName,
      StudiesTitle: updateStudiesTitle,
      StudiesDate: updateStudiesDate,
    };
    setEducationExperience(educationExperienceDetail);
  }
  
  function hideInputContainer() {
    const inputElContainer = document.querySelector(
      ".educationExperienceInputContainer"
    );
    inputElContainer.style.display = "none";

  
  // handleEducationExperienceDisplay();
    // resetInputField();
    setIsSubmit(true);
        handleValueDisplay();

    // handleEditButton();
  }

    
  function handleEditBtn() {
    setIsSubmit(false);
    setValueDisplay(false);
  }

  function handleValueDisplay() {
    setValueDisplay(true);
  }

  function handleEducationExperienceDisplayForEdit() {
    const inputElContainer = document.querySelector(
      ".educationExperienceInputContainer"
    );
    inputElContainer.style.display = "block";

    const userContactDisplayer = document.querySelector(
      ".educationExperienceEl"
    );
    console.log(userContactDisplayer);

    userContactDisplayer.style.display === "block"
      ? (userContactDisplayer.style.display = "none")
      : (userContactDisplayer.style.display = "block");

    handleEditBtn();
  }

  // function handleEducationExperienceDisplay() {
  //   const educationExperience = document.querySelector(
  //     ".educationExperienceInputContainer"
  //   );
  //   educationExperience.style.display = "none";
  // }

  return (
    <>
      <section className="educationExperience">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="educationExperienceInputContainer">
            <div className="schoolNameContainer">
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                placeholder="Enter your School Name"
                value={schoolName}
                className="SchoolName"
                id="schoolName"
                onChange={handleSchoolName}
              />
            </div>

            <div className="studiesTitleContainer">
              {" "}
              <label htmlFor="studiesTitle">Studies Title</label>
              <input
                type="text"
                placeholder="Enter studies title"
                value={studiesTitle}
                onChange={handleStudiesTitle}
                className="studiesTitle"
                id="studiesTitle"
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

          {/* {valueDisplay ? ( */}
            <DisplayEducationExperience
              educationExperience={educationExperience}
              className="educationExperienceEl"
            />
          {/* ) : null} */}
          {!isSubmit ? (
            <Submit
              type="submit"
              className="submit"
              hideInputContainer={hideInputContainer}
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
  );
}
