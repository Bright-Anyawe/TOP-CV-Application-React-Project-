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
  StudiesTitle: studiesTitle || "",
  StudiesMajor: studiesMajor || "",
  SchoolName: schoolName || "",
  StudiesStartDate: studiesStartDate || "",
  StudiesEndDate: studiesEndDate || "",
});

  return (
    <>
      <div id="main-app">
        <section id="cvFormContainer">
          <CvForm
            setUserContact={setUserContact}
            userContact={userContact}
            setEducationExperience
          />
        </section>

        <section id="displayMainContainer">
          <DisplayUserContact userContact={userContact} />
          <DisplayEducationExperience />
          <DisplayPracticalExperience />
        </section>
      </div>
    </>
  );
}
