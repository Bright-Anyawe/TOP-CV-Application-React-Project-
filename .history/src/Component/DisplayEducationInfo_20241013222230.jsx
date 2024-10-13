import { GetDate } from "./GetDate";
function DisplayEducationExperience({ className }) {
  let personEducationExperience = JSON.parse(
    localStorage.getItem("educationExperience")
  );

  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>
      <p>
        {personEducationExperience.StudiesTitle (personEducationExperience.)}{" "}
      </p>
      <p>
        {" "}
        <span>School Name:</span> {personEducationExperience.SchoolName}{" "}
      </p>
      <p>
        {" "}
        <span>Studies Date:</span>{" "}
        {<GetDate updateStudiesDate={personEducationExperience.StudiesDate} />}{" "}
      </p>
    </div>
  );
}

export default DisplayEducationExperience;