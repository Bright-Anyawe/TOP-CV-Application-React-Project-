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

    const arrowDown = document.querySelector(".downArrow");

    if (displayEducationDetails === false) {
      arrowDown.style.transform = "rotate(180deg)";
      arrowDown.style.animation = " 0.8s";

setDisplayEducationDetails(true);    } else {
      arrowDown.style.animation = " 0.8s";

      arrowDown.style.transform = "rotate(0deg)";

      setDisplayEducationDetails(false);
    }
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
              <p>
                 <svg
                className="downArrow"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <title>chevron-down</title>
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </p>

            </div>
            {displayEducationDetails ? (
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

                <div className="startDate">
                  <label htmlFor="date">Start Date</label>
                  <input
                    type="date"
                    value={studiesStartDate}
                    onChange={handleStudiesStartDate}
                    className="date"
                    id="date"
                  />
                </div>

                <div className="EndDate">
                  <label htmlFor="date">End Date</label>
                  <input
                    type="date"
                    value={studiesEndDate}
                    onChange={handleStudiesEndDate}
                    className="date"
                    id="date"
                  />
                </div>
              </div>
            ) : null}

<Submit
                type="submit"
                className="submit"
                hideInputContainer={hideInputContainerForEdu}
              />
            {/* {!isSubmitForEdu ? (
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
            )} */}
          </form>
        </section>
      </>
    ),
  };
}
