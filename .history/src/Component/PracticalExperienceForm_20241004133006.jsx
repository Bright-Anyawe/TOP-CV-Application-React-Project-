import { useState } from "react";
import DisplayPracticalExperience from "./DisplayPracticalInfo.jsx";
import { Edit } from "./EditButton.jsx";
import { Submit } from "./SubmitBtn.jsx";
import { HandleHeaderInfo } from "./handleHeaderInfo.jsx";

export function PracticalExperienceForm({handleTitleDisplay, schoolName, studiesTitle, studiesDate, userName, email, mobileNumber}) {
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

  const [isSubmit, setIsSubmit] = useState(false);
  const [valueDisplay, setValueDisplay] = useState(false);

  function handleCompanyName(e) {
    const updateCompanyName = e.target.value;
    
    handlePracticalExperience(
      updateCompanyName,
      jobPosition,
      jobResponsibilities,
      jobEntryDate,
      jobExitDate
    );
    console.log(schoolName, studiesTitle, studiesDate)
    
    if(!schoolName || !studiesTitle || !studiesDate) {
              return alert("Please finish filling the  previous input before you continue😒🤦‍♂️")

    } else if(!userName || !email || mobileNumber) {
                    return alert("Please finish filling the  user contact section before you continue😒😒🤦‍♂️")

    }
    setCompanyName(updateCompanyName);

    // {
    //   SchoolName: schoolName,
    //   StudiesTitle: studiesTitle,
    //   StudiesDate: studiesDate,
    // 

    // console.log(educationExperience)
    // if(educationExperience) {
    //   Object.keys(educationExperience).map((value) => {if(value === null || value === '')
    //     return alert("Enter the previous value before you continue")
 
    //  })
    // }
    // else {
    //   return alert("Enter the previous value before you continue")
    // }
  }

  function handleJobPositon(e) {
    const updateJobPosition = e.target.value;


    if(!schoolName || !studiesTitle || !studiesDate) {
              return alert("Please finish filling the  previous input before you continue")

    }else if(!userName || !email || mobileNumber) {
                    return alert("Please finish filling the  user contact section before you continue😒😒🤦‍♂️")

    }
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

    
    if(!schoolName || !studiesTitle || !studiesDate) {
              return alert("Please finish filling the  previous input before you continue")

    }
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

    
    if(!schoolName || !studiesTitle || !studiesDate) {
              return alert("Please finish filling the  previous input before you continue")

    }
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

    
    if(!schoolName || !studiesTitle || !studiesDate) {
              return alert("Please finish filling the  previous input before you continue")

    }
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
    setPracticalExperience(practicalExperienceDetail);
  }

  function hideInputContainer() {
    const inputElContainer = document.querySelector(
      ".practicalExperienceInputContainer"
    );
    inputElContainer.style.display = "none";

    // handleEducationExperienceDisplay();
    // resetInputField();
    setIsSubmit(true);
    handleValueDisplay();
    handleTitleDisplay()
    // handleEditButton();
  }

  function handleEditBtn() {
    setIsSubmit(false);
    setValueDisplay(false);
  }

  function handleValueDisplay() {
    setValueDisplay(true);
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

          
          {valueDisplay ? (
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