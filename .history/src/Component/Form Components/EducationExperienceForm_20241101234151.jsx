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
    educationState,
    educationExperience,
    setEducationExperience,
    educationDispatch,
    educationArray,
    setEducationArray,
    editIndex,
    setEditIndex,
  } = useContext(EducationContext);

  // const educationExperience = educationState;
  const studiesTitle = educationState?.studiesTitle || "";
  const studiesMajor = educationState?.studiesMajor || "";
  const schoolName = educationState?.schoolName || "";
  const studiesStartDate = educationState?.studiesStartDate || "";
  const studiesEndDate = educationState?.studiesEndDate || "";


  const [isSubmitForEdu, setIsSubmitForEdu] = useState(false);
 
  const [displayAdditionalBtn, setDisplayAdditionalBtn] = useState(false);

  const isFormComplete =
    educationState?.studiesTitle &&
    educationState?.studiesMajor &&
    educationState?.schoolName &&
    educationState?.studiesStartDate &&
    educationState?.studiesEndDate;

  useEffect(() => {
    setEducationExperience(educationState);
  }, [educationState]);

  useEffect(() => {
    if (editIndex !== null && educationArray[editIndex]) {
      const selectedEducation = educationArray[editIndex];
      console.log(selectedEducation);
     
    }
  }, [editIndex, educationArray]);


  function handleInputChange(e) {
    const { name, value } = e.target;
    educationDispatch({
      type: "Update_education_inputs",
      education: {
        fieldName: name,
        fieldValue: value,
      },
    });
  }

  function handleFormSubmission(e) {
    const updatedData = {
      studiesTitle: studiesTitle,
      studiesMajor: studiesMajor,
      schoolName: schoolName,
      StudiesStartDate: studiesStartDate,
      StudiesEndDate: studiesEndDate,
    };

    educationDispatch({
      type: "update_education_array",
      updatedData: updatedData,
      editIndex: editIndex,
    });

    // if (editIndex !== null) {
    //   const updatedEducationArray = [...educationArray];
    //   updatedEducationArray[editIndex] = updatedData;
    //   setEducationArray(updatedEducationArray);
    //   setEditIndex(null);
    // } else {
    //   setEducationArray((prevState) => {
    //     return [...prevState, educationExperience];
    //   });
    // }
    setEditIndex(null);
    setHideDate(false);
    console.log(educationArray);

    // localStorage.setItem("education", JSON.stringify(educationArray));

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
    educationDispatch({
      type: "clearEducationInput",
      education: {
        fieldName: studiesTitle,
        fieldName: studiesMajor,
        fieldName: schoolName,
        fieldName: studiesStartDate,
        fieldName: studiesEndDate,
      },
    });
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
