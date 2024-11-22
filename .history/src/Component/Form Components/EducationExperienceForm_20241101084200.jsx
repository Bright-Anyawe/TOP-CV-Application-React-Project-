import { useEffect, useState } from "react";
import DisplayEducationExperience from "../Display Components/DisplayEducationInfo.jsx";
import { Edit } from "../Feature components/EditButton.jsx";
import { Submit } from "../Feature components/SubmitBtn.jsx";
import { useContext } from "react";
import { EducationContext } from "../App.jsx";

export function EducationExperienceForm({
  displayEducationDetails,
  setDisplayEducationDetails,
  setHideForEducationEdit,
  setHideDate,
}) {
  const {
    state,
    dispatch,
    educationArray,
    setEducationArray,
    editIndex,
    setEditIndex,
  } = useContext(EducationContext);

  const educationExperience = state.educationExperience;
  const studiesTitle = educationExperience.studiesTitle;
  const studiesMajor = educationExperience.studiesMajor;
  const SchoolName = educationExperience.studiesTitle;
  const studiesStartDate = educationExperience.studiesTitle;
  const studiesEndDate = educationExperience.studiesTitle;


  // const [studiesTitle, setStudiesTitle] = useState("");
  // const [studiesMajor, setStudiesMajor] = useState("");

  // const [schoolName, setSchoolName] = useState("");
  // const [studiesStartDate, setStudiesStartDate] = useState("");
  // const [studiesEndDate, setStudiesEndDate] = useState("");

  const [isSubmitForEdu, setIsSubmitForEdu] = useState(false);

  // const [educationExperience, setEducationExperience] = useState({
  //   StudiesTitle: "",
  //   StudiesMajor: "",
  //   SchoolName: "",
  //   StudiesStartDate: "",
  //   StudiesEndDate: "",
  // });

  const [displayAdditionalBtn, setDisplayAdditionalBtn] = useState(false);

  const isFormComplete =
    educationExperience.studiesTitle &&
    educationExperience.studiesMajor &&
    educationExperience.schoolName &&
    educationExperience.studiesStartDate &&
    educationExperience.studiesEndDate;

  useEffect(() => {
    if (editIndex !== null && educationArray[editIndex]) {
      const selectedEducation = educationArray[editIndex];
      console.log(selectedEducation);
      // setStudiesTitle(selectedEducation.studiesTitle || "");
      // setStudiesMajor(selectedEducation.studiesMajor || "");
      // setSchoolName(selectedEducation.schoolName || "");
      // setStudiesStartDate(selectedEducation.StudiesStartDate || "");
      // setStudiesEndDate(selectedEducation.StudiesEndDate || "");
    }
  }, [editIndex, educationArray]);

  // function handleStudiesTitle(e) {
  //   const updateStudiesTitle = e.target.value;
  //   setStudiesTitle(updateStudiesTitle);
  //   handleEducationExperience(
  //     updateStudiesTitle,
  //     studiesMajor,
  //     schoolName,
  //     studiesStartDate,
  //     studiesEndDate
  //   );
  // }
  // function handleStudiesMajor(e) {
  //   const updateStudiesMajor = e.target.value;
  //   setStudiesMajor(updateStudiesMajor);
  //   handleEducationExperience(
  //     studiesTitle,
  //     updateStudiesMajor,
  //     schoolName,
  //     studiesStartDate,
  //     studiesEndDate
  //   );
  // }

  // function handleSchoolName(e) {
  //   const updateSchoolName = e.target.value;
  //   setSchoolName(updateSchoolName);
  //   handleEducationExperience(
  //     studiesTitle,
  //     studiesMajor,
  //     updateSchoolName,
  //     studiesStartDate,
  //     studiesEndDate
  //   );
  // }

  // function handleStudiesStartDate(e) {
  //   const updateStudiesStartDate = e.target.value;
  //   setStudiesStartDate(updateStudiesStartDate);
  //   setHideDate(false);
  //   handleEducationExperience(
  //     studiesTitle,
  //     studiesMajor,
  //     schoolName,
  //     updateStudiesStartDate,
  //     studiesEndDate
  //   );
  // }

  // function handleStudiesEndDate(e) {
  //   const updateStudiesEndDate = e.target.value;
  //   setStudiesEndDate(updateStudiesEndDate);
  //   handleEducationExperience(
  //     studiesTitle,
  //     studiesMajor,
  //     schoolName,
  //     studiesStartDate,
  //     updateStudiesEndDate
  //   );
  // }

  // function handleEducationExperience(
  //   updateStudiesTitle,
  //   updateStudiesMajor,
  //   updateSchoolName,
  //   updateStudiesStartDate,
  //   updateStudiesEndDate
  // ) {
  //   const educationExperienceDetail = {
  //     ...educationExperience,
  //     StudiesTitle: updateStudiesTitle,
  //     StudiesMajor: updateStudiesMajor,
  //     SchoolName: updateSchoolName,
  //     StudiesStartDate: updateStudiesStartDate,
  //     StudiesEndDate: updateStudiesEndDate,
  //   };

  //   // localStorage.setItem(
  //   //   "educationExperience",
  //   //   JSON.stringify(educationExperienceDetail)
  //   // );
  //   setEducationExperience(educationExperienceDetail);
  // }

  // function hideInputContainerForEdu() {
  //   // console.log(educationExperience);
  //   // console.log(educationArray)
  //   // handleValueDisplay();
  // }

  function handleInputChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: "Update_education_inputs",
      education: {
        fieldName: name,
        fieldValue: value,
      },
    });
  }

  function handleFormSubmission(e) {
    const updatedData = {
      StudiesTitle: studiesTitle,
      StudiesMajor: studiesMajor,
      SchoolName: schoolName,
      StudiesStartDate: studiesStartDate,
      StudiesEndDate: studiesEndDate,
    };

    if (editIndex !== null) {
      const updatedEducationArray = [...educationArray];
      updatedEducationArray[editIndex] = updatedData;
      setEducationArray(updatedEducationArray);
      setEditIndex(null);
    } else {
      setEducationArray((prevState) => {
        return [...prevState, educationExperience];
      });
    }

    handleEditBtn();
    setIsSubmitForEdu(true);
    showEducationDetailsForm();
    handleEducationExperienceDisplayForEdit();
    setDisplayAdditionalBtn(true);
    clearForm();
  }

  function handleEditBtn() {
    setHideForEducationEdit(false);
  }
  // function handleValueDisplay() {
  //   setEduValueDisplay(true);
  // }

  function handleEducationExperienceDisplayForEdit() {
    const inputElContainer = document.querySelector(
      ".educationExperienceInputContainer"
    );
    inputElContainer.style.display = "block";

    handleEditBtn();
  }

  function showEducationDetailsForm() {
    const arrowDown = document.querySelector(".downArrowForEdu");

    if (displayEducationDetails === false) {
      arrowDown.style.transform = "rotate(180deg)";
      arrowDown.style.animation = " 0.8s";

      setDisplayEducationDetails(true);
    } else {
      arrowDown.style.animation = " 0.8s";

      arrowDown.style.transform = "rotate(0deg)";

      setDisplayEducationDetails(false);
      setHideForEducationEdit(false);
    }
    setDisplayAdditionalBtn(false);
  }

  function handleAdditionalEducation() {
    console.log("I want to add additional education");
    showEducationDetailsForm();
  }

  function clearForm() {
    setStudiesTitle("");
    setStudiesMajor("");
    setSchoolName("");
    setStudiesStartDate("");
    setStudiesEndDate("");
  }
  return (
    <>
      <section className="educationExperience">
        <form onSubmit={(e) => e.preventDefault()}>
          <div
            className="educationDetailsHeader"
            onClick={showEducationDetailsForm}
          >
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>school</title>
                <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
              </svg>
              Education
            </p>
            <p>
              <svg
                className="downArrowForEdu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
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
                  name="studiesTitle"
                  value={studiesTitle}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
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
                  name="studiesMajor"
                  value={studiesMajor}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  className="studiesMajor"
                />
              </div>
              <div className="schoolNameContainer">
                <label htmlFor="schoolName">School</label>
                <input
                  type="text"
                  placeholder="University of Ghana"
                  name="schoolName"
                  value={schoolName}
                  className="SchoolName"
                  id="schoolName"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
              </div>

              <div className="startDate">
                <label htmlFor="date">Start Date</label>
                <input
                  type="date"
                  name="studiesStartDate"
                  value={studiesStartDate}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  className="date"
                  id="date"
                />
              </div>

              <div className="EndDate">
                <label htmlFor="date">End Date</label>
                <input
                  type="date"
                  name="studiesEndDate"
                  value={studiesEndDate}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  className="date"
                  id="date"
                />
              </div>
              <Submit
                type="submit"
                className="submit"
                hideInputContainer={(e) => {
                  handleFormSubmission(e);
                }}
                isFormComplete={isFormComplete}
              />
            </div>
          ) : null}

          {displayAdditionalBtn ? (
            <button onClick={handleAdditionalEducation}>
              Add additional education
            </button>
          ) : null}
        </form>
      </section>
    </>
  );
}
