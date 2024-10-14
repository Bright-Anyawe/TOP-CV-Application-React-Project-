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
        <p>
          {personEducationExperience.StudiesTitle}{" "}
          {`(${personEducationExperience.StudiesMajor})`}{" "}
        </p>
        <p>
          {" "}
          <span>School/ Colleage:</span> {personEducationExperience.SchoolName}{" "}
        </p>
      </div>{" "}
     <div>
      
     </div>
      <Edit />
    </div>
  );
}

export default DisplayEducationExperience;