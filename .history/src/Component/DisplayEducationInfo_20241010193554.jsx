import { GetDate } from "./GetDate";
function DisplayEducationExperience({ className, educationExperience }) {
  let personEducationExperience = JSON.parse(
    localStorage.getItem(".educationExperience")
  );
          let userContact = JSON.parse(localStorage.getItem("userContact")); 

  console.log(personEducationExperience);
  console.log(educationExperience);

  return (
    <div className={className}>
      <p>
        {" "}
        <span>School Name:</span> {personEducationExperience.SchoolName}{" "}
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