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
  StudiesStartDate:ate || "",
  StudiesEndDate: s|| "",
});

  return (
    <>
      <div id="main-app">
        <section id="cvFormContainer">
          <CvForm
            setUserContact={setUserContact}
            userContact={userContact}
            educationExperience={educationExperience}
            setEducationExperience={setEducationExperience}
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
