import { useState } from "react";

import CvForm from "./Cv Form";
import DisplayUserContact from "./DisplayUserInfo";
import DisplayEducationExperience from "./DisplayEducationInfo";
import DisplayPracticalExperience from "./DisplayPracticalInfo";

export default function App() {
  const [userContact, setUserContact] = useState({
    PersonName: "",
    Email: "",
    MobileNumber: "",
  });

  const [educationExperience, setEducationExperience] = useState({
    StudiesTitle: "",
    StudiesMajor: "",
    SchoolName: "",
    StudiesStartDate: "",
    StudiesEndDate: "",
  });

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


  return (
    <>
      <div id="main-app">
        <section id="cvFormContainer">
          <CvForm
            setUserContact={setUserContact}
            userContact={userContact}
            educationExperience={educationExperience}
            setEducationExperience={setEducationExperience}
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
            setHideEProfessionalEdit={setHideProfessionalEdit}
          />
        </section>

        <section id="displayMainContainer">
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
            educationExperience={educationExperience}
            displayEducationDetails={displayEducationDetails}
            setDisplayEducationDetails={setDisplayEducationDetails}
            setHideForEducationEdit={setHideForEducationEdit}
            hideForEducationEdit={hideForEducationEdit}
          />
          <DisplayPracticalExperience
            practicalExperience={practicalExperience}
            setDisplayProfessionalDetails={setDisplayProfessionalDetails}
            hideEProfessionalEdit={hideProfessionalEdit}
            setHideEProfessionalEdit={setHideEProfessionalEdit}
          />
        </section>
      </div>
    </>
  );
}
