import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";
import { useContext } from "react";
import { EducationContext } from "./App";

function DisplayEducationExperience({
  educationExperience,
  displayEducationDetails,
  setDisplayEducationDetails,
  hideForEducationEdit,
  setHideForEducationEdit,
  hideDate,
}) {

const { educationArray } = useContext(EducationContext);


  // let educationExperience = JSON.parse(
  //   localStorage.getItem("educationExperience")
  // );

  return (

    {educationArray.map((data) => {

      <D></D>
    }) 



    }
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>
      <div className="subEducationContainer">
        {hideDate ? null : (
          <div>
            <p>
              {" "}
              {
                <GetDate
                  updateStudiesDate={educationExperience.StudiesStartDate}
                />
              }{" "}
            </p>
            <p>
              {" "}
              {
                <GetDate
                  updateStudiesDate={educationExperience.StudiesEndDate}
                />
              }{" "}
            </p>
          </div>
        )}
        <div className="educationTitleHolder">
          <p>
            {educationExperience.StudiesTitle}{" "}
            {`(${educationExperience.StudiesMajor})`}{" "}
          </p>
          <p> {educationExperience.SchoolName} </p>
        </div>{" "}
      </div>

      {hideForEducationEdit ? null : (
        <Edit
          setHideForEducationEdit={setHideForEducationEdit}
          setDisplayEducationDetails={setDisplayEducationDetails}
          hideForEducationEdit={hideForEducationEdit}
        />
      )}
    </div>
  );
}

export default DisplayEducationExperience;
