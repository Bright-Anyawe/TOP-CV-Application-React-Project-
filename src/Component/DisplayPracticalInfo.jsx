



function DisplayPracticalExperience({ practicalExperience, className }) {
 

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
        <span>Job Entry Date</span>: {practicalExperience.JobEntryDate}{" "}
      </p>
      <p>
        {" "}
        <span>Job Exit Date</span>: {practicalExperience.JobExitDate}{" "}
      </p>
    </div>
  );
}

export default DisplayPracticalExperience;