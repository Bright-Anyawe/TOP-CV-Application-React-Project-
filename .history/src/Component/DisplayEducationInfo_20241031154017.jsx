import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";
import { useContext } from "react";
import { EducationContext } from "./App";

function DisplayEducationExperience({
  // educationExperience,
  displayEducationDetails,
  educationArray,
  setDisplayEducationDetails,
  hideForEducationEdit,
  setHideForEducationEdit,
  hideDate,
}) {

 let educationExperience =
   JSON.parse(localStorage.getItem("educationExperience")) || {};


  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>
      {/* 
      {educationArray && Array.isArray(educationArray)
        ? educationArray.map((data, index) => { */}
      return (
      <div className="subEducationContainer" key={index}>
        <div className="educationTitleHolder">
          <p>
            {educationExperience.studiesTitle}{" "}
            {`(${educationExperience.studiesMajor})`}{" "}
          </p>
          <p> {educationExperience.schoolName} </p>
        </div>{" "}
        {hideDate ? null : (
          <div>
            <p>
              {" "}
              {
                <GetDate
                  updateStudiesDate={educationExperience.studiesStartDate}
                />
              }{" "}
            </p>
            <p>
              {" "}
              {
                <GetDate
                  updateStudiesDate={educationExperience.studiesEndDate}
                />
              }{" "}
            </p>
          </div>
        )}
        {hideForEducationEdit ? null : (
          <Edit
            setHideForEducationEdit={setHideForEducationEdit}
            setDisplayEducationDetails={setDisplayEducationDetails}
            hideForEducationEdit={hideForEducationEdit}
          />
        )}
      </div>
      );
      {/* 
        })
        : null} */}
    </div>
  );
}

export default DisplayEducationExperience;
