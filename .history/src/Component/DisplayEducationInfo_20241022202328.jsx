import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";
function DisplayEducationExperience({
  educationExperience,
  displayEducationDetails,
  setDisplayEducationDetails,
  hideForEducationEdit,
  setHideForEducationEdit,
  hideDate,
}) {
  // let educationExperience = JSON.parse(
  //   localStorage.getItem("educationExperience")
  // );

  return (
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
            <p className="studiesMajor">{`(${educationExperience.StudiesMajor})`}</p>{" "}
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
