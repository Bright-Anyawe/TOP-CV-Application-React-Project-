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

  return (
    <>
      <div id="main-app">
        <section id="cvFormContainer">
          <CvForm />
        </section>

        <section id="displayMainContainer">
          <DisplayUserContact />
          <DisplayEducationExperience />
          <DisplayPracticalExperience />
        </section>
      </div>
    </>
  );
}
