import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";

function DisplayPracticalExperience({
  experienceArray,
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

      {experienceArray && Array.isArray(experienceArray)?
      experienceArray.map((data, index) {

        return (

        )
      })
    : null
    }

    </div>
  );
}

export default DisplayPracticalExperience;
