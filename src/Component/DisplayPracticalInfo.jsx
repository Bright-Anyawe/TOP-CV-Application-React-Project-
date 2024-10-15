import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";

function DisplayPracticalExperience({
  hideEdit,
  setHideEdit,
  setDisplayProfessionalDetails,
}) {
  let practicalExperience = JSON.parse(
    localStorage.getItem("practicalExperience")
  );

  return (
    <div className="practicalExperienceContainer">
      <p className="practicalTitle">Professional Experience </p>

      <div className="subPracticalExperienceContainer">
        <p>
          {practicalExperience.CompanyName}({practicalExperience.JobPosition}){" "}
        </p>

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
        {hideEdit ? (
          ""
        ) : (
          <Edit
            setHideEdit={setHideEdit}
            setDisplayProfessionalDetails={setDisplayProfessionalDetails}
          />
        )}
      </div>
    </div>
  );
}

export default DisplayPracticalExperience;
