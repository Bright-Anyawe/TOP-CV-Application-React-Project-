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
// const {educationArray} = useContext(EducationContext)
  // let educationArray = JSON.parse(localStorage.getItem("education")) || [];

  const [educationArray, setEducationArray] = useState([]);

  // Sync with localStorage whenever it changes
  useEffect(() => {
    const fetchEducationArray = () => {
      const storedEducation =
        JSON.parse(localStorage.getItem("education")) || [];
      setEducationArray(storedEducation);
    };

    // Fetch education data on component mount
    fetchEducationArray();

    // Add an event listener to handle updates to localStorage
    window.addEventListener("storage", fetchEducationArray);

    return () => {
      window.removeEventListener("storage", fetchEducationArray);
    };
  }, []);


  return (
    <div className="educationExperienceEl">
      <p className="eduTitle">Education </p>

      {educationArray && Array.isArray(educationArray)
        ? educationArray.map((data, index) => {
            return (
              <div className="subEducationContainer" key={index}>
                <div className="educationTitleHolder">
                  <p>
                    {data.studiesTitle} {`(${data.studiesMajor})`}{" "}
                  </p>
                  <p> {data.schoolName} </p>
                </div>{" "}
                {hideDate ? null : (
                  <div>
                    <p>
                      {" "}
                      {
                        <GetDate updateStudiesDate={data.studiesStartDate} />
                      }{" "}
                    </p>
                    <p>
                      {" "}
                      {<GetDate updateStudiesDate={data.studiesEndDate} />}{" "}
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
