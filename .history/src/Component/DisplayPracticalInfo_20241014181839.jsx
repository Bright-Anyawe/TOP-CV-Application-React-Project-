import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";

function DisplayPracticalExperience() {
let practicalExperience = JSON.parse;
  localStorage.getItem("practicalExperience")


  return (
    <div className="practicalExperienceContainer">
      <div className="subPracticla">
        <p>
          <span>Company Name:</span> {practicalExperience.CompanyName}{" "}
        </p>
        <p>
          <span>Position Title:</span> {practicalExperience.JobPosition}{" "}
        </p>
        <p>
          {" "}
          <span>Responsibility At Work</span>:{" "}
          {practicalExperience.JobResponsibilities}{" "}
        </p>
        <p>
          {" "}
          <span>Job Entry Date</span>:{" "}
          {<GetDate updateJobEntrytDate={practicalExperience.JobEntryDate} />}{" "}
        </p>
        <p>
          {" "}
          <span>Job Exit Date</span>:
          {<GetDate updateJobExitDate={practicalExperience.JobExitDate} />}{" "}
        </p>

        <Edit />
      </div>
    </div>
  );
}

export default DisplayPracticalExperience;
