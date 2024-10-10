import { GetDate } from "./GetDate";
function DisplayEducationExperience({ className, userContact }) {
  let personEducationExperience = JSON.parse(
    localStorage.getItem(".educationExperience")
  );
  console.log(personEducationExperience);

  return (
    <div className={className}>
      <p>
        {" "}
        <span>School Name:</span> {userContact.SchoolName}{" "}
      </p>
      <p>
        <span>Studies Title:</span> {personEducationExperience.StudiesTitle}{" "}
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