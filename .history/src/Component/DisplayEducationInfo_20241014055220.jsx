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
        
      </div>
      <Edit />
    </div>
  );
}

export default DisplayEducationExperience;