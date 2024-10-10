import { useState } from "react";
import DisplayPracticalExperience from "./DisplayPracticalInfo.jsx";
import { Edit } from "./EditButton.jsx";
import { Submit } from "./SubmitBtn.jsx";
import { HandleHeaderInfo } from "./handleHeaderInfo.jsx";

export function PracticalExperienceForm({
  handleTitleDisplay,
  schoolName,
  studiesTitle,
  studiesDate,
  userName,
  email,
  mobileNumber,
  isSubmitForPractical,
  valueDisplayForPractical,
  setIsSubmitForPractical,
  setValueDisplayForPractical,
}) {
  const [companyName, setCompanyName] = useState("");
  const [jobPosition, setJobPosition] = useState("");
  const [jobResponsibilities, setJobResponsibilities] = useState("");
  const [jobEntryDate, setJobEntryDate] = useState("");
  const [jobExitDate, setJobExitDate] = useState("");

  const [practicalExperience, setPracticalExperience] = useState({
    CompanyName: companyName,
    JobPosition: jobPosition,
    JobResponsibilities: jobResponsibilities,
    JobEntryDate: jobEntryDate,
    JobExitDate: jobExitDate,
  });

  const [companyNameError, setCompanyNameError] = useState("");
  const [jobPositionError, setJobPositionError] = useState("");
  const [jobResponsibilitiesError, setJobResponsibilitiesError] = useState("");
  const [jobEntryDateError, setJobEntryDateError] = useState("");
  const [jobExitDateError, setJobExitDateError] = useState("");

  function handleCompanyName(e) {
    const updateCompanyName = e.target.value;
    setCompanyNameError("");
    handlePracticalExperience(
      updateCompanyName,
      jobPosition,
      jobResponsibilities,
      jobEntryDate,
      jobExitDate
    );
    // if (!schoolName || !studiesTitle || !studiesDate) {
    //   setCompanyNameError(
    //     `Please finish filling the  previous input before you continue😒🤦‍♂️`
    //   );
    // } else if (schoolName || studiesTitle || studiesDate) {
    //   setCompanyNameError("");
    // }
    console.log(userName, email, mobileNumber);

    setCompanyName(updateCompanyName);
  }

  function handleJobPositon(e) {
    const updateJobPosition = e.target.value;

    // if (!schoolName || !studiesTitle || !studiesDate) {
    //   setJobResponsibilitiesError(
    //     `Please finish filling the  previous input before you continue😒🤦‍♂️`
    //   );
    // } else if (schoolName || studiesTitle || studiesDate) {
    //   setJobEntryDateError("");
    // }
    // console.log(userName, email);

    handlePracticalExperience(
      companyName,
      updateJobPosition,
      jobResponsibilities,
      jobEntryDate,
      jobExitDate
    );
    setJobPosition(updateJobPosition);
  }

  function handleJobResponsibility(e) {
    const updateJobResponsibilities = e.target.value;

    // if (!schoolName || !studiesTitle || !studiesDate) {
    //   setJobPositionError(
    //     `Please finish filling the  previous input before you continue😒🤦‍♂️`
    //   );
    // } else if (schoolName || studiesTitle || studiesDate) {
    //   setJobResponsibilitiesError("");
    // }

    handlePracticalExperience(
      companyName,
      jobPosition,
      updateJobResponsibilities,
      jobEntryDate,
      jobExitDate
    );
    setJobResponsibilities(updateJobResponsibilities);
  }

  function handleJobEntryDate(e) {
    const updateJobEntryDate = e.target.value;

    // if (!schoolName || !studiesTitle || !studiesDate) {
    //   setJobEntryDateError(
    //     `Please finish filling the  previous input before you continue😒🤦‍♂️`
    //   );
    // } else if (schoolName || studiesTitle || studiesDate) {
    //   setJobEntryDateError("");
    // }

    setJobEntryDate(updateJobEntryDate);
    handlePracticalExperience(
      companyName,
      jobPosition,
      jobResponsibilities,
      updateJobEntryDate,
      jobExitDate
    );
  }

  function handleJobExitDate(e) {
    const updateJobExitDate = e.target.value;

    // if (!schoolName || !studiesTitle || !studiesDate) {
    //   setJobExitDateError(
    //     `Please finish filling the  previous input before you continue😒🤦‍♂️`
    //   );
    // } else if (schoolName || studiesTitle || studiesDate) {
    //   setJobExitDateError("");
    // }
    setJobExitDate(updateJobExitDate);
    handlePracticalExperience(
      companyName,
      jobPosition,
      jobResponsibilities,
      jobEntryDate,
      updateJobExitDate
    );
  }

  function handlePracticalExperience(
    updateCompanyName,
    updateJobPosition,
    updateJobResponsibilities,
    updateJobEntryDate,
    updateJobExitDate
  ) {
    const practicalExperienceDetail = {
      ...practicalExperience,
      CompanyName: updateCompanyName,
      JobPosition: updateJobPosition,
      JobResponsibilities: updateJobResponsibilities,
      JobEntryDate: updateJobEntryDate,
      JobExitDate: updateJobExitDate,
    };

    localStorage.setItem(
      "practicalExperience",
      JSON.stringify(practicalExperienceDetail)
    );
    setPracticalExperience(practicalExperienceDetail);
  }

  function hideInputContainer() {
    // if (!schoolName || !studiesTitle || !studiesDate) {
    //   return setJobExitDateError(
    //     `Please finish filling the  previous input before you continue😒🤦‍♂️`
    //   );
    // } else if (schoolName || studiesTitle || studiesDate) {
    //   return setJobExitDateError("");
    // }
    const inputElContainer = document.querySelector(
      ".practicalExperienceInputContainer"
    );
    inputElContainer.style.display = "none";

    // handleEducationExperienceDisplay();
    // resetInputField();
    setIsSubmitForPractical(true);
    handleValueDisplay();
    handleTitleDisplay();
    // handleEditButton();
  }

  function handleEditBtn() {
    setIsSubmit(false);
    setValueDisplay(false);
  }

  function handleValueDisplay() {
    setValueDisplayForPractical(true);
  }

  function handlePracticalExperienceDisplayForEdit() {
    const inputElContainer = document.querySelector(
      ".practicalExperienceInputContainer"
    );
    inputElContainer.style.display = "block";

    const userContactDisplayer = document.querySelector(
      ".practicalExperienceEl"
    );
    console.log(userContactDisplayer);

    userContactDisplayer.style.display === "block"
      ? (userContactDisplayer.style.display = "none")
      : (userContactDisplayer.style.display = "block");

    handleEditBtn();
  }

  return (
    <>
      <section className="practicalExperience">
        <form onSubmit={(e) => e.preventDefault()}>
          {valueDisplayForPractical ? (
            <DisplayPracticalExperience
              practicalExperience={practicalExperience}
              className="practicalExperienceEl"
            />
          ) : null}
          <div className="practicalExperienceInputContainer">
            <div className="NameOfCompanyContainer">
              <label htmlFor="NameOfCompany">
                Enter The Company&apos;s Name
              </label>
              <input
                type="text"
                placeholder="Enter your Company Name"
                value={companyName}
                className="companyName"
                onChange={handleCompanyName}
                id="NameOfCompany"
              />
              <span className="companyNameError"> {companyNameError} </span>
            </div>

            <div className="PosInJobContainer">
              <label htmlFor="PosInJob"> Position Title</label>
              <input
                type="text"
                placeholder="Enter Position Title"
                value={jobPosition}
                onChange={handleJobPositon}
                id="PosInJob"
              />
              <span className="jobPositionError"> {jobPositionError} </span>
            </div>

            <div className="JobResponsibilitiesContainer">
              {" "}
              <label htmlFor="Job_responsibilities">
                Main responsibilities at work
              </label>
              <textarea
                type="text"
                placeholder="Enter your main responsibilities in the job"
                value={jobResponsibilities}
                onChange={handleJobResponsibility}
                id="Job_responsibilities"
              />
              <span className="jobResponsibilitiesError">
                {" "}
                {jobResponsibilitiesError}{" "}
              </span>
            </div>

            <div className="jobEntryDateContainer">
              <label htmlFor="jobEntryDate">Date for job commercement</label>
              <input
                type="date"
                placeholder="Enter the date you started work with the company"
                value={jobEntryDate}
                onChange={handleJobEntryDate}
                id="jobEntryDate"
              />
              <span className="jobEntryDateError"> {jobEntryDateError} </span>
            </div>

            <div className="jobExitDateContainer">
              <label htmlFor="jobExitDate">Date for job exit</label>
              <input
                type="date"
                placeholder="Enter the date you started work with the company"
                value={jobExitDate}
                onChange={handleJobExitDate}
                id="jobExitDate"
              />
              <span className="jobExitDateError"> {jobExitDateError} </span>
            </div>
          </div>

          {!isSubmit ? (
            <Submit
              type="submit"
              className="submit"
              hideInputContainer={hideInputContainer}
            />
          ) : (
            <Edit
              className="practicalExperienceDisplay"
              handleUserContactDisplayForEdit={
                handlePracticalExperienceDisplayForEdit
              }
            />
          )}
        </form>
      </section>
    </>
  );
}
