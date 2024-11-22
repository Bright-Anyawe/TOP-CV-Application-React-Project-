import { GetDate } from "../Other components/GetDate"; 
import { Edit } from "../Feature components/EditButton"; 
import { EducationContext } from "../App";
import { useContext } from "react";

function DisplayPracticalExperience({
  // experienceArray,
  hideDate,
  practicalExperience,
  hideProfessionalEdit,
  setHideProfessionalEdit,
  setDisplayProfessionalDetails,
}) {
  const { experienceArray } = useContext(EducationContext);

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
              {experience.companyName}({experience.jobPosition}){" "}
            </p>

            <p> {experience.jobResponsibilities} </p>
            {hideDate ? null : (
              <div>
                <p>
                  {" "}
                  {
                    <GetDate updateJobEntryDate={experience.jobEntryDate} />
                  } -{" "}
                </p>
                <p>
                  {" "}
                  {<GetDate updateJobExitDate={experience.jobExitDate} />}{" "}
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
