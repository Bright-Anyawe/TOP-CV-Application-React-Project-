import { GetDate } from "./GetDate";
import { Edit } from "./EditButton";
import { useContext } from "react";
import { EducationContext } from "./App";

function DisplayEducationExperience({
  educationExperience,
  displayEducationDetails,
  setDisplayEducationDetails,
  hideForEducationEdit,
  setHideForEducationEdit,
  hideDate,
}) {

const { educationArray } = useContext(EducationContext);


  // let educationExperience = JSON.parse(
  //   localStorage.getItem("educationExperience")
  // );

  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>

      {educationArray.map((data) => {




      })}
    </div>
  );
}

export default DisplayEducationExperience;
