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
  // const { educationArray } = useContext(EducationContext);

  // let educationExperience = JSON.parse(
  //   localStorage.getItem("educationExperience")
  // );
  let arr = JSON.stringify(educationArray);
  console.log(arr);

  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>

      {arr && Array.isArray(arr) ? arr.map((data, index) => {
        <div className="subEducationContainer" key={index}>
          {hideDate ? null : (
            <div>
              <p> {<GetDate updateStudiesDate={data.StudiesStartDate} />} </p>
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
      })}
    </div>
  );
}

export default DisplayEducationExperience;
