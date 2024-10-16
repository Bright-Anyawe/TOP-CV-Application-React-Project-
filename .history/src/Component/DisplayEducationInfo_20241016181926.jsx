import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";
function DisplayEducationExperience({
  displayEducationDetails,
  setDisplayEducationDetails,
  hideForEducationEdit,
  setHideForEducationEdit,
  hideDate
}) {
  let educationExperience = JSON.parse(
    localStorage.getItem("educationExperience")
  );

  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>
      <div className="subEducationContainer">
        <div>
          <p>
            {" "}
            {
              <GetDate
                updateStudiesDate={educationExperience.StudiesStartDate}
              />
            )}{" "}
          </p>
          <p>
            {" "}
            {
              <GetDate updateStudiesDate={educationExperience.StudiesEndDate} />
            }{" "}
          </p>
        </div>
        <div>
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
