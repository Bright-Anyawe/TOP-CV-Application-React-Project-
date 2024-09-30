



function DisplayPracticalExperience({ practicalExperience, className }) {
 

  return (
    <div className={className}>
      <p>Company_Name: {practicalExperience.CompanyName} </p>
      <p>Position_Title: {practicalExperience.JobPosition} </p>
      <p> Responsibility_At_Work: {practicalExperience.JobResponsibilities  } </p>
      <p> Job_Entry_Date: {practicalExperience.JobEntryDate} </p>
      <p> Job_Exit_Date: {practicalExperience.JobExitDate} </p>
    </div>
  );
}

export default DisplayPracticalExperience;