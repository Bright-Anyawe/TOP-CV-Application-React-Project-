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

      const [displayPersonalContact, setDisplayPersonalContact] =
        useState(false);

const [hideEdit, sethideEdit] = useState(false);


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
          />
        </section>

        <section id="displayMainContainer">
          <DisplayUserContact
            userContact={userContact}
            displayPersonalContact={displayPersonalContact}
            setDisplayPersonalContact={setDisplayPersonalContact}
          />
          <DisplayEducationExperience
            educationExperience={educationExperience}
          />
          <DisplayPracticalExperience
            practicalExperience={practicalExperience}
          />
        </section>
      </div>
    </>
  );
}