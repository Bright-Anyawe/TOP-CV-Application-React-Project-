import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";
function DisplayEducationExperience({hideEdit, setHideEdit}) {
  let educationExperience = JSON.parse(
    localStorage.getItem("educationExperience")
  );

  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>
      <div className="subEducationContainer">
        <div>
          <p>
            {educationExperience.StudiesTitle}{" "}
            {`(${educationExperience.StudiesMajor})`}{" "}
          </p>
          <p> {educationExperience.SchoolName} </p>
        </div>{" "}
        <div>
          <p>
            {" "}
            {
              <GetDate
                updateStudiesDate={educationExperience.StudiesStartDate}
              />
            }{" "}
          </p>
          <p>
            {" "}
            {
              <GetDate updateStudiesDate={educationExperience.StudiesEndDate} />
            }{" "}
          </p>
        </div>
      </div>

      {hideEdit?
      
null:
</>    
    
    }
    </div>
  );
}

export default DisplayEducationExperience;