import { useState, createContext } from "react";

import CvForm from "./Cv Form";
import DisplayUserContact from "./DisplayUserInfo";
import DisplayEducationExperience from "./DisplayEducationInfo";
import DisplayPracticalExperience from "./DisplayPracticalInfo";


export const EducationContext = createContext( null)


export default function App() {
  const [userContact, setUserContact] = useState({
    personName: "",
    email: "",
    mobileNumber: "",
  });

  // const [educationExperience, setEducationExperience] = useState({
  //   StudiesTitle: "",
  //   StudiesMajor: "",
  //   SchoolName: "",
  //   StudiesStartDate: "",
  //   StudiesEndDate: "",
  // });
  const [educationArray, setEducationArray] = useState([]);
  const [experienceArray, setExperienceArray] = useState([]);




  const [practicalExperience, setPracticalExperience] = useState({
    CompanyName: "",
    JobPosition: "",
    JobResponsibilities: "",
    JobEntryDate: "",
    JobExitDate: "",
  });

  const [displayPersonalContact, setDisplayPersonalContact] = useState(false);

  const [displayEducationDetails, setDisplayEducationDetails] = useState(false);
  const [displayProfessionalDetails, setDisplayProfessionalDetails] =
    useState(false);

    
  const [controlEmailSvgDisplay, setControlEmailSvgDisplay] =
    useState(false);
    const [controlPhoneSvgDisplay, setControlPhoneSvgDisplay] = useState(false);

  const [hideContactEdit, setHideContactEdit] = useState(true);
  const [hideForEducationEdit, setHideForEducationEdit] = useState(true);
  const [hideProfessionalEdit, setHideProfessionalEdit] = useState(true);
  const [hideDate, setHideDate] = useState(true);



  return (
    <>
      <div id="main-app">
        <EducationContext.Provider
          value={{ educationArray: [], setEducationArray }}
        >
          <section id="cvFormContainer">
            <CvForm
              setUserContact={setUserContact}
              userContact={userContact}
              // educationExperience={educationExperience}
              educationArray={educationArray}
              setEducationArray={setEducationArray}
              experienceArray={experienceArray}
              // setEducationExperience={setEducationExperience}
              practicalExperience={practicalExperience}
              setPracticalExperience={setPracticalExperience}
              displayPersonalContact={displayPersonalContact}
              setDisplayPersonalContact={setDisplayPersonalContact}
              displayEducationDetails={displayEducationDetails}
              setDisplayEducationDetails={setDisplayEducationDetails}
              displayProfessionalDetails={displayProfessionalDetails}
              setDisplayProfessionalDetails={setDisplayProfessionalDetails}
              setControlEmailSvgDisplay={setControlEmailSvgDisplay}
              setControlPhoneSvgDisplay={setControlPhoneSvgDisplay}
              setHideContactEdit={setHideContactEdit}
              setHideForEducationEdit={setHideForEducationEdit}
              hideProfessionalEdit={hideProfessionalEdit}
              setHideProfessionalEdit={setHideProfessionalEdit}
              setHideDate={setHideDate}
            />
          </section>

          <section id="displayMainContainer">
            <div className="displaySubContainer">
              <DisplayUserContact
                userContact={userContact}
                displayPersonalContact={displayPersonalContact}
                setDisplayPersonalContact={setDisplayPersonalContact}
                controlEmailSvgDisplay={controlEmailSvgDisplay}
                setControlEmailSvgDisplay={setControlEmailSvgDisplay}
                controlPhoneSvgDisplay={controlPhoneSvgDisplay}
                setControlPhoneSvgDisplay={setControlPhoneSvgDisplay}
                hideContactEdit={hideContactEdit}
                setHideContactEdit={setHideContactEdit}
              />
              <DisplayEducationExperience
                // educationExperience={educationExperience}
                educationArray={educationArray}
                displayEducationDetails={displayEducationDetails}
                setDisplayEducationDetails={setDisplayEducationDetails}
                setHideForEducationEdit={setHideForEducationEdit}
                hideForEducationEdit={hideForEducationEdit}
                hideDate={hideDate}
              />
              <DisplayPracticalExperience
                experienceArray={experienceArray}
                practicalExperience={practicalExperience}
                setDisplayProfessionalDetails={setDisplayProfessionalDetails}
                hideProfessionalEdit={hideProfessionalEdit}
                setHideProfessionalEdit={setHideProfessionalEdit}
                hideDate={hideDate}
              />
            </div>
          </section>
        </EducationContext.Provider>
      </div>
    </>
  );
}
