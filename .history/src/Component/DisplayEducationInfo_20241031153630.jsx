import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";
import { useContext } from "react";
import { EducationContext } from "./App";

function DisplayEducationExperience({
  educationExperience,
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

      {educationArray && Array.isArray(educationArray)
        ? educationArray.map((data, index) => {
          
          return (
            <div className="subEducationContainer" key={index}>
              <div className="educationTitleHolder">
                <p>
                  {data.StudiesTitle} {`(${data.StudiesMajor})`}{" "}
                </p>
                <p> {data.SchoolName} </p>
              </div>{" "}
              {hideDate ? null : (
                <div>
                  <p>
                    {" "}
                    {<GetDate updateStudiesDate={data.StudiesStartDate} />}{" "}
                  </p>
                  <p> {<GetDate updateStudiesDate={data.StudiesEndDate} />} </p>
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


        })
        : null}
    </div>
  );
}

export default DisplayEducationExperience;
