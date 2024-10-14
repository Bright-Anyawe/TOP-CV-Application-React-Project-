import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";

function DisplayPracticalExperience() {
  let practicalExperience = JSON.parse(
    localStorage.getItem("practicalExperience")
  );

  return (
    <div className="practicalExperienceContainer">
      <p className="practicalTitle">Professional Experience </p>

      <div className="subPracticalExperienceContainer">
        <p>{practicalExperience.CompanyName}() </p>
         
        <p> {practicalExperience.JobResponsibilities} </p>
        <p>
          {" "}
          {
            <GetDate updateJobEntrytDate={practicalExperience.JobEntryDate} />
          } -{" "}
        </p>
        <p>
          {" "}
          {<GetDate updateJobExitDate={practicalExperience.JobExitDate} />}{" "}
        </p>

        <Edit />
      </div>
    </div>
  );
}

export default DisplayPracticalExperience;
