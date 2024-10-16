import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";

function DisplayPracticalExperience({
  hideProfessionalEdit,
  setHideProfessionalEdit,
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
        {hideProfessionalEdit ? (
          ""
        ) : (
          <Edit
            setHideProfessionalEdit={setHideProfessionalEdit}
            setDisplayProfessionalDetails={setDisplayProfessionalDetails}
            hideEProfessionalEdit={hideEProfessionalEdit}
          />
        )}
      </div>
    </div>
  );
}

export default DisplayPracticalExperience;