import { GetDate } from "./GetDate";

function DisplayPracticalExperience({ practicalExperience, className }) {
let personEducationExperience = JSON.parse(
  localStorage.getItem("educationExperience")
);

  return (
    <div className={className}>
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
        <span>Job Entry Date</span>: {<GetDate updateJobEntrytDate={practicalExperience.JobEntryDate} />}{" "}
      </p>
      <p>
        {" "}
        <span>Job Exit Date</span>:
        {<GetDate updateJobExitDate={practicalExperience.JobExitDate} />}{" "}
      </p>
    </div>
  );
}

export default DisplayPracticalExperience;
