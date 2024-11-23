import { GetDate } from "../Other components/GetDate"; 
import { Edit } from "../Feature components/EditButton"; 
import { ExperienceContext } from "../App";
import { useEffect, useState } from "react";
import { useContext } from "react";

function DisplayPracticalExperience({
  
  hideProfessionalEdit,
  setHideProfessionalEdit,
  setDisplayProfessionalDetails,
}) {
  const {
    experienceArray,
    setExperienceArray,
    hideDateExperience,
    setHideDateExperience,
  } = useContext(ExperienceContext);


 useEffect(() => {
   const storedExperience = JSON.parse(localStorage.getItem("experience")) || [];
   setExperienceArray(storedExperience);
 }, []);

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
              experienceIndex={index}
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
