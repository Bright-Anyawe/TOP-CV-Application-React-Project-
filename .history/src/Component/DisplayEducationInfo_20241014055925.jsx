import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";
function DisplayEducationExperience({ className }) {
  let personEducationExperience = JSON.parse(
    localStorage.getItem("educationExperience")
  );

  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>
      <div >
      <div >
        <div>
          <p>
            {personEducationExperience.StudiesTitle}{" "}
            {`(${personEducationExperience.StudiesMajor})`}{" "}
          </p>
          <p>
            {" "}
            {personEducationExperience.SchoolName}{" "}
          </p>
        </div>{" "}
        <div>
          <p>
            {" "}
            {
              <GetDate
                updateStudiesDate={personEducationExperience.StudiesStartDate}
              />
            }{" "}
          </p>
          <p>
            {" "}
            {
              <GetDate
                updateStudiesDate={personEducationExperience.StudiesEndDate}
              />
            }{" "}
          </p>
        </div>
      </div>
      <Edit />
    </div>
  );
}

export default DisplayEducationExperience;