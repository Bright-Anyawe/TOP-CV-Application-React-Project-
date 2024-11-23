import { useState, useEffect } from "react";
import DisplayPracticalExperience from "../Display Components/DisplayPracticalInfo.jsx";
import { Edit } from "../Feature components/EditButton.jsx";
import { Submit } from "../Feature components/SubmitBtn.jsx";
import { HandleHeaderInfo } from "../Other components/handleHeaderInfo.jsx";
import { ExperienceContext } from "../App.jsx";
import { useContext } from "react";

export default function PracticalExperienceForm({
  displayProfessionalDetails,
  setDisplayProfessionalDetails,
  hideForEducationEdit,
  setHideProfessionalEdit,
  ,
}) {
  const {
    experienceState,
    experienceDispatch,
    experienceArray,
    setExperienceArray,
    practicalExperience,
    setPracticalExperience,
    experienceEditIndex,
    setExperienceEditIndex,
    displayExperienceAdditionalBtn,
    setDisplayExperienceAdditionalBtn,
    setHideDateExperience
  } = useContext(ExperienceContext);

  console.log(experienceState);

  let companyName = experienceState.companyName || "";
  let jobPosition = experienceState.jobPosition || "";
  let jobResponsibilities = experienceState.jobResponsibilities || "";
  let jobEntryDate = experienceState.jobEntryDate || "";
  let jobExitDate = experienceState.jobExitDate || "";

  const isFormComplete =
    experienceState.companyName &&
    experienceState.jobPosition &&
    experienceState.jobEntryDate &&
    experienceState.jobExitDate;

  function handleEditBtn() {}

  function handlePracticalExperienceDisplayForEdit() {
    const inputElContainer = document.querySelector(
      ".practicalExperienceInputContainer"
    );
    inputElContainer.style.display = "block";
  }

  useEffect(() => {
    setPracticalExperience(experienceState);
  }, [experienceState]);

  useEffect(() => {
    if (experienceEditIndex !== null && experienceArray[experienceEditIndex]) {
      const selectedEducation = experienceArray[experienceEditIndex];
      companyName = selectedEducation.companyName;
      jobPosition = selectedEducation.jobPosition;
      jobResponsibilities = selectedEducation.jobResponsibilities;
      jobEntryDate = selectedEducation.jobEntryDate;
      jobExitDate = selectedEducation.jobExitDate;
    }
  }, [experienceEditIndex, experienceArray]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    experienceDispatch({
      type: "Update_experience_inputs",
      experience: {
        fieldName: name,
        fieldValue: value,
      },
    });
  }

  function handleExperienceFormSubmission() {
    const updatedData = {
      companyName: companyName,
      jobPosition: jobPosition,
      jobResponsibilities: jobResponsibilities,
      jobEntryDate: jobEntryDate,
      jobExitDate: jobExitDate,
    };

    const updatedExperienceArray =
      experienceEditIndex !== null
        ? [...experienceArray].map((item, idx) =>
            idx === editIndex ? updatedData : item
          )
        : [...experienceArray, practicalExperience];

    setExperienceArray(updatedExperienceArray);
    localStorage.setItem("experience", JSON.stringify(updatedExperienceArray));

    setExperienceEditIndex(null);
    setHideDateExperience(false);
    setHideProfessionalEdit(false);

    // localStorage.setItem("education", JSON.stringify(educationArray));

    handleEditBtn();
    // setIsSubmitForEdu(true);
    showProfessionalDetailsForm();
    handlePracticalExperienceDisplayForEdit();
    setDisplayExperienceAdditionalBtn(true);
    clearForm();
  }

  function showProfessionalDetailsForm() {
    const arrowDown = document.querySelector(".downArrowForPractical");

    if (displayProfessionalDetails === false) {
      arrowDown.style.transform = "rotate(180deg)";
      arrowDown.style.animation = " 0.8s";

      setDisplayProfessionalDetails(true);
    } else {
      arrowDown.style.animation = " 0.8s";

      arrowDown.style.transform = "rotate(0deg)";

      setDisplayProfessionalDetails(false);
    }
  }

  function handleAdditionalExperienceBtn() {
    showProfessionalDetailsForm();
    setDisplayExperienceAdditionalBtn(false);
  }

  function clearForm() {
    experienceDispatch({
      type: "clearExperienceInput",
    });
  }

  return (
    <>
      <section className="practicalExperience">
        <form onSubmit={(e) => e.preventDefault()}>
         
          <div
            className="professionalDetailsHeader"
            onClick={showProfessionalDetailsForm}
          >
            <p>
              <img
                className="professioImg"
                src="https://rmathr.github.io/cv-project/b5791876cc5188ae758a.png"
              />
              Experience
            </p>
            <p>
              <svg
                className="downArrowForPractical"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>chevron-down</title>
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </p>
          </div>
          {displayProfessionalDetails ? (
            <div className="practicalExperienceInputContainer">
              <div className="NameOfCompanyContainer">
                <label htmlFor="NameOfCompany">
                  Enter The Company&apos;s Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your Company Name"
                  name="companyName"
                  value={companyName}
                  className="companyName"
                  onChange={(e) => handleInputChange(e)}
                  id="NameOfCompany"
                />
              </div>

              <div className="PosInJobContainer">
                <label htmlFor="PosInJob"> Position Title</label>
                <input
                  type="text"
                  placeholder="Enter Position Title"
                  name="jobPosition"
                  value={jobPosition}
                  onChange={(e) => handleInputChange(e)}
                  id="PosInJob"
                />
              </div>

              <div className="JobResponsibilitiesContainer">
                {" "}
                <label htmlFor="Job_responsibilities">
                  Main responsibilities at work
                </label>
                <textarea
                  type="text"
                  placeholder="Enter your main responsibilities in the job"
                  name="jobResponsibilities"
                  value={jobResponsibilities}
                  onChange={(e) => handleInputChange(e)}
                  id="Job_responsibilities"
                />
              </div>

              <div className="jobEntryDateContainer">
                <label htmlFor="jobEntryDate">Date for job commercement</label>
                <input
                  type="date"
                  placeholder="Enter the date you started work with the company"
                  name="jobEntryDate"
                  value={jobEntryDate}
                  onChange={(e) => handleInputChange(e)}
                  id="jobEntryDate"
                />
              </div>

              <div className="jobExitDateContainer">
                <label htmlFor="jobExitDate">Date for job exit</label>
                <input
                  type="date"
                  placeholder="Enter the date you started work with the company"
                  name="jobExitDate"
                  value={jobExitDate}
                  onChange={(e) => handleInputChange(e)}
                  id="jobExitDate"
                />
              </div>

              <Submit
                type="submit"
                className="submit"
                hideInputContainer={handleExperienceFormSubmission}
                isFormComplete={isFormComplete}
              />
            </div>
          ) : null}

          {displayExperienceAdditionalBtn ? (
            <button onClick={handleAdditionalExperienceBtn}>
              Add additional experience
            </button>
          ) : null}

          {/* {!isSubmitForPractical ? (
          ) : (
            <Edit
              className="practicalExperienceDisplay"
              handleUserContactDisplayForEdit={
                handlePracticalExperienceDisplayForEdit
              }
            />
          )} */}
        </form>
      </section>
    </>
  );
}
