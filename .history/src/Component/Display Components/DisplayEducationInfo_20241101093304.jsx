import { GetDate } from "../Other components/GetDate";
import { Edit } from "../Feature components/EditButton";
import { useContext } from "react";
import { EducationContext } from "../App";

function DisplayEducationExperience({
  educationExperience,
  displayEducationDetails,
  setDisplayEducationDetails,
  hideForEducationEdit,
  setHideForEducationEdit,
  hideDate,
}) {

  let educationArray = JSON.parse(localStorage.getItem("education")) || [];


  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>

      {educationArray && Array.isArray(educationArray)
        ? educationArray.map((data, index) => {
            return (
              <div className="subEducationContainer" key={index}>
                <div className="educationTitleHolder">
                  <p>
                    {data.StudiesTitle} {`(${data.StudiesMajor})`}{" "}
                  </p>
                  <p> {data.SchoolName} </p>
                </div>{" "}
                {hideDate ? null : (
                  <div>
                    <p>
                      {" "}
                      {
                        <GetDate updateStudiesDate={data.StudiesStartDate} />
                      }{" "}
                    </p>
                    <p>
                      {" "}
                      {<GetDate updateStudiesDate={data.StudiesEndDate} />}{" "}
                    </p>
                  </div>
                )}
                {hideForEducationEdit ? null : (
                  <Edit
                    educationIndexEdit={index}
                    setHideForEducationEdit={setHideForEducationEdit}
                    setDisplayEducationDetails={setDisplayEducationDetails}
                    hideForEducationEdit={hideForEducationEdit}
                  />
                )}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default DisplayEducationExperience;