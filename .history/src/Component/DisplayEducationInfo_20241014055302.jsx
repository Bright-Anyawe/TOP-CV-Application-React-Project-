import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";
function DisplayEducationExperience({ className }) {
  let personEducationExperience = JSON.parse(
    localStorage.getItem("educationExperience")
  );

  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>
      <div>
        <div>
          <p>
            {personEducationExperience.StudiesTitle}{" "}
            {`(${personEducationExperience.StudiesMajor})`}{" "}
          </p>
          <p>
            {" "}
            <span>School/ Colleage:</span>{" "}
            {personEducationExperience.SchoolName}{" "}
          </p>
        </div>{" "}
        <div>
          <p>
            {" "}
            <span>Studies Start:</span>{" "}
            {
              <GetDate
                updateStudiesDate={personEducationExperience.StudiesStartDate}
              />
            }{" "}
          </p>
          <p>
            {" "}
            <span></span>{" "}
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