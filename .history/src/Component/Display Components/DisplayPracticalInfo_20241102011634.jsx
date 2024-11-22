import { GetDate } from "../Other components/GetDate"; 
import { Edit } from "../Feature components/EditButton"; 

function DisplayPracticalExperience({
  experienceArray,
  hideDate,
  practicalExperience,
  hideProfessionalEdit,
  setHideProfessionalEdit,
  setDisplayProfessionalDetails,
}) {
  const { experArray } = useContext(EducationContext);

  // let practicalExperience = JSON.parse(
  //   localStorage.getItem("practicalExperience")
  // );

  return (
    <div className="practicalExperienceContainer">
      <p className="practicalTitle">Professional Experience </p>

      {experienceArray && Array.isArray(experienceArray)?
      experienceArray.map((experience, index) => {

        return (
          <div className="subPracticalExperienceContainer" key={index}>
            <p>
              {experience.CompanyName}({experience.JobPosition}){" "}
            </p>

            <p> {experience.JobResponsibilities} </p>
            {hideDate ? null : (
              <div>
                <p>
                  {" "}
                  {
                    <GetDate updateJobEntryDate={experience.JobEntryDate} />
                  } -{" "}
                </p>
                <p>
                  {" "}
                  {<GetDate updateJobExitDate={experience.JobExitDate} />}{" "}
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
        );
      })
    : null
    }

    </div>
  );
}

export default DisplayPracticalExperience;
