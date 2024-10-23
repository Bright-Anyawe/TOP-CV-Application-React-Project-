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
  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>

      {educationArray && Array.isArray(educationArray)
        ? educationArray.map((data, index) => {
          
          return 
            <div className="subEducationContainer" key={index}>
              {hideDate ? null : (
                <div>
                  <p>
                    {" "}
                    {<GetDate updateStudiesDate={data.StudiesStartDate} />}{" "}
                  </p>
                  <p> {<GetDate updateStudiesDate={data.StudiesEndDate} />} </p>
                </div>
              )}
              <div className="educationTitleHolder">
                <p>
                  {data.StudiesTitle} {`(${data.StudiesMajor})`}{" "}
                </p>
                <p> {data.SchoolName} </p>
              </div>{" "}
            </div>;

            {
              hideForEducationEdit ? null : (
                <Edit
                  setHideForEducationEdit={setHideForEducationEdit}
                  setDisplayEducationDetails={setDisplayEducationDetails}
                  hideForEducationEdit={hideForEducationEdit}
                />
              );
            }
          


        })
        : null}
    </div>
  );
}

export default DisplayEducationExperience;
