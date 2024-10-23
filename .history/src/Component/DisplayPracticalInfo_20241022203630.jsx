import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";

function DisplayPracticalExperience({
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
       <div>
        {hideDate? null: 
        
        
        }
       </div>
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
