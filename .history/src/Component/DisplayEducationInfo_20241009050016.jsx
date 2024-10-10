import { GetDate } from "./GetDate";
function DisplayEducationExperience({ educationExperience, className }) {
        let edu = JSON.parse(localStorage.getItem("userContact")); 


  return (
    <div className={className}>
      <p>
        {" "}
        <span>School Name:</span> {educationExperience.SchoolName}{" "}
      </p>
      <p>
        <span>Studies Title:</span> {educationExperience.StudiesTitle}{" "}
      </p>
      <p>
        {" "}
        <span>Studies Date:</span> {<GetDate updateStudiesDate={educationExperience.StudiesDate} />}{" "}
      </p>
    </div>
  );
}

export default DisplayEducationExperience;