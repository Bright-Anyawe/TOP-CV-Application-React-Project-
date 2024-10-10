import { useState } from "react";
import DisplayEducationExperience from "./DisplayEducationInfo.jsx";
import { Edit } from "./EditButton.jsx";
import { Submit } from "./SubmitBtn.jsx";


export function useEducationExperienceForm() {
  const [schoolName, setSchoolName] = useState("");
  const [studiesTitle, setStudiesTitle] = useState("");
  const [studiesDate, setStudiesDate] = useState("");

  const [educationExperience, setEducationExperience] = useState({
    SchoolName: schoolName || '',
    StudiesTitle: studiesTitle || '',
    StudiesDate: studiesDate || '',
  });


  const [isSubmit, setIsSubmit] = useState(false);
  const [eduValueDisplay, setEduValueDisplay] = useState(false);


    window.onload = () => {
     
      console.log(personContact);
      if (Object.keys(personContact).length !== 0) {
        setIsSubmit(true);
        setValueDisplay(true);
        hideInputContainer();
      } else {
        setIsSubmit(true);
        setValueDisplay(true);
      }

      return;
    };
    
    window.onload = () => {
            let personContact = JSON.parse(localStorage.getItem("userContact"));
      let personEducationExperience = JSON.parse(localStorage.getItem("educationExperience"));
      console.log(personEducationExperience);

       (function () {
         // …
       })();

      if (Object.keys(personEducationExperience).length !== 0) {
              alert("There is a value ");

        setIsSubmit(true);
        setValueDisplay(true);
        hideInputContainer();
      } else {
        setIsSubmit(true);
        setValueDisplay(true);
      }

      return;
    };
    


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
    handleEducationExperience(
      schoolName,
      studiesTitle,
updateStudiesDate    );

  }

  function handleEducationExperience(
    updateSchoolName,
    updateStudiesTitle,
    updateStudiesDate
  ) {


    console.log(updateSchoolName)
    console.log(updateStudiesTitle)
    console.log(updateStudiesDate)

    const educationExperienceDetail = {
      ...educationExperience,
      SchoolName: updateSchoolName,
      StudiesTitle: updateStudiesTitle,
      StudiesDate: updateStudiesDate,
    };
    localStorage.setItem("educationExperience", JSON.stringify(educationExperience));

    
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
  //  dontRenderPracticalComp()

    // handleEditButton();
  }

    
  function handleEditBtn() {
    setIsSubmit(false);
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

    const educationExperienceDisplayer = document.querySelector(
      ".educationExperienceEl"
    );
    console.log(educationExperienceDisplayer);

    educationExperienceDisplayer.style.display === "block"
      ? (educationExperienceDisplayer.style.display = "none")
      : (educationExperienceDisplayer.style.display = "block");

    handleEditBtn();
  }

  
  
  return {
    schoolName,
    studiesTitle,
    studiesDate,
    renderEducationExperience: (
      <>
        <section className="educationExperience">
          <form onSubmit={(e) => e.preventDefault()}>
            {eduValueDisplay ? (
              <DisplayEducationExperience
                educationExperience={educationExperience}
                className="educationExperienceEl"
              />
            ) : null}
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
    ),
  };
}
