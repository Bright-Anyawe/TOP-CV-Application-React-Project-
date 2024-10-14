import CvForm from "./Cv Form";
import DisplayUserContact from "./DisplayUserInfo";
import DisplayEducationExperience from "./DisplayEducationInfo";
import DisplayPracticalExperience from "./DisplayPracticalInfo";


 export default function App() {

  
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
