import { GetDate } from "./GetDate";
function DisplayEducationExperience({ className }) {
  let personEducationExperience = JSON.parse(
    localStorage.getItem("educationExperience")
  );

  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>
      <p>
        {personEducationExperience.StudiesTitle}{" "}
        {`${personEducationExperience.StudiesMajor}`}{" "}
      </p>
      <p>
        {" "}
        <span>School/ Colleage:</span> {personEducationExperience.SchoolName}{" "}
      </p>
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
        <span>Studies End:</span>{" "}
        {
          <GetDate
            updateStudiesDate={personEducationExperience.StudiesEndDate}
          />
        }{" "}
      </p>
    </div>
  );
}

export default DisplayEducationExperience;