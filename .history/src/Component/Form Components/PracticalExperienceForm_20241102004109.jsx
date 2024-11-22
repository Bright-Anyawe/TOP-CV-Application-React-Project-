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
  setHideDate,
}) {

 const {
  experienceState, experienceDispatch,
   experienceArray,
   setExperienceArray,
   practicalExperience,
   setPracticalExperience,
 } = useContext(ExperienceContext);


 
  const companyName = experienceState.companyName || "";
  const jobPosition = experienceState.jobPosition || "";
  const jobResponsibilities = experienceState.jobResponsibilities || "";
  const jobEntryDate = experienceState.jobEntryDate || "";
  const jobExitDate = experienceState.jobExitDate || "";

  // const [companyName, setCompanyName] = useState("");
  // const [jobPosition, setJobPosition] = useState("");
  // const [jobResponsibilities, setJobResponsibilities] = useState("");
  // const [jobEntryDate, setJobEntryDate] = useState("");
  // const [jobExitDate, setJobExitDate] = useState("");

  // const [companyNameError, setCompanyNameError] = useState("");
  // const [jobPositionError, setJobPositionError] = useState("");
  // const [jobResponsibilitiesError, setJobResponsibilitiesError] = useState("");
  // const [jobEntryDateError, setJobEntryDateError] = useState("");
  // const [jobExitDateError, setJobExitDateError] = useState("");
  const [displayAdditionalBtn, setDisplayAdditionalBtn] = useState(false);

  const isFormComplete =
    experienceState.companyName &&
    experienceState.jobPosition &&
   experienceState.jobEntryDate &&
   experienceState.jobExitDate;

  // function handleCompanyName(e) {
  //   const updateCompanyName = e.target.value;
  //   // setCompanyNameError("");
  //   setCompanyName(updateCompanyName);

  //   handlePracticalExperience(
  //     updateCompanyName,
  //     jobPosition,
  //     jobResponsibilities,
  //     jobEntryDate,
  //     jobExitDate
  //   );
  // }

  // function handleJobPositon(e) {
  //   const updateJobPosition = e.target.value;
  //   setJobPosition(updateJobPosition);

  //   handlePracticalExperience(
  //     companyName,
  //     updateJobPosition,
  //     jobResponsibilities,
  //     jobEntryDate,
  //     jobExitDate
  //   );
  // }

  // function handleJobResponsibility(e) {
  //   const updateJobResponsibilities = e.target.value;
  //   setJobResponsibilities(updateJobResponsibilities);

  //   handlePracticalExperience(
  //     companyName,
  //     jobPosition,
  //     updateJobResponsibilities,
  //     jobEntryDate,
  //     jobExitDate
  //   );
  // }

  // function handleJobEntryDate(e) {
  //   const updateJobEntryDate = e.target.value;
  //   setHideDate(false);
  //   setJobEntryDate(updateJobEntryDate);

  //   handlePracticalExperience(
  //     companyName,
  //     jobPosition,
  //     jobResponsibilities,
  //     updateJobEntryDate,
  //     jobExitDate
  //   );
  // }

  // function handleJobExitDate(e) {
  //   const updateJobExitDate = e.target.value;

  //   // if (!schoolName || !studiesTitle || !studiesDate) {
  //   //   setJobExitDateError(
  //   //     `Please finish filling the  previous input before you continue😒🤦‍♂️`
  //   //   );
  //   // } else if (schoolName || studiesTitle || studiesDate) {
  //   //   setJobExitDateError("");
  //   // }
  //   setJobExitDate(updateJobExitDate);
  //   handlePracticalExperience(
  //     companyName,
  //     jobPosition,
  //     jobResponsibilities,
  //     jobEntryDate,
  //     updateJobExitDate
  //   );
  // }

  // function handlePracticalExperience(
  //   updateCompanyName,
  //   updateJobPosition,
  //   updateJobResponsibilities,
  //   updateJobEntryDate,
  //   updateJobExitDate
  // ) {
  //   const practicalExperienceDetail = {
  //     ...practicalExperience,
  //     CompanyName: updateCompanyName,
  //     JobPosition: updateJobPosition,
  //     JobResponsibilities: updateJobResponsibilities,
  //     JobEntryDate: updateJobEntryDate,
  //     JobExitDate: updateJobExitDate,
  //   };

  //   setPracticalExperience(practicalExperienceDetail);
  // }

  // function hideInputContainer() {
  //   // const inputElContainer = document.querySelector(
  //   //   ".practicalExperienceInputContainer"
  //   // );
  //   // inputElContainer.style.display = "none";handleEditBtn
  //   setExperienceArray((prevState) => {
  //     return [...prevState, practicalExperience];
  //   });
  //   showProfessionalDetailsForm();
  //   setHideProfessionalEdit(false);
  //   clearForm();
  //   setDisplayAdditionalBtn(true);
  //   // handleEditBtnForPractical();
  // }

  // function handleEditBtn() {
  // }

  // function handleValueDisplay() {
  //   setValueDisplayForPractical(true);
  // }

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

   useEffect(() => {
     setPracticalExperience(experienceState);
   }, [experienceState]);

  //  useEffect(() => {
  //    if (editIndex !== null && experienceArray[editIndex]) {
  //      const selectedEducation = experienceArray[editIndex];
  //      console.log(selectedEducation);
  //    }
  //  }, [editIndex, experienceArray]);

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
 setExperienceArray((prevState) => {
   return [...prevState, practicalExperience];
 });
 showProfessionalDetailsForm();
 setHideProfessionalEdit(false);
 clearForm();
 setDisplayAdditionalBtn(true);
   
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
    setDisplayAdditionalBtn(false);
  }

  function clearForm() {
   educationDispatch({
      type: "clearEducationInput",
      education: {
        fieldName: studiesTitle,
        fieldName: studiesMajor,
        fieldName: schoolName,
        fieldName: studiesStartDate,
        fieldName: studiesEndDate,
      },)
  }

  return (
    <>
      <section className="practicalExperience">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* {valueDisplayForPractical ? (
            <DisplayPracticalExperience
              practicalExperience={practicalExperience}
              className="practicalExperienceEl"
            />
          ) : null} */}
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

          {displayAdditionalBtn ? (
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
