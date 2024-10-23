import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";

function DisplayPracticalExperience({
  hideDate,
  practicalExperience,
  hideProfessionalEdit,
  setHideProfessionalEdit,
  setDisplayProfessionalDetails,
}) {
  // let practicalExperience = JSON.parse(
  //   localStorage.getItem("practicalExperience")
  // );

  return (
    <div className="practicalExperienceContainer">
      <p className="practicalTitle">Professional Experience </p>

      <div className="subPracticalExperienceContainer">
        <p>
          {practicalExperience.CompanyName}({practicalExperience.JobPosition}){" "}
        </p>

        <p> {practicalExperience.JobResponsibilities} </p>
        {hideDate ? null : (
          <div>
            <p>
              {" "}
              {
                <GetDate
                  updateJobEntryDate={practicalExperience.JobEntryDate}
                />
              }{" "}
              -{" "}
            </p>
            <p>
              {" "}
              {
                <GetDate updateJobExitDate={practicalExperience.JobExitDate} />
              }{" "}
            </p>
          </div>
        )}
        {hideProfessionalEdit ? (
          ""
        ) : (
          <Edit
            setHideProfessionalEdit={setHideProfessionalEdit}
            setDisplayProfessionalDetails={setDisplayProfessionalDetails}
            hideProfessionalEdit={hideProfessionalEdit}
          />
        )}
      </div>
    </div>
  );
}

export default DisplayPracticalExperience;
