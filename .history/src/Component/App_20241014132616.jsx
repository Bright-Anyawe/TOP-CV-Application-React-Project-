import CvForm from "./Cv Form";
import DisplayComponents from "./DisplayComponents";

 export default function App() {
  return (
    <>
      <div id="main-app">
        <CvForm />
        <DisplayComponents />

        <section id="displayMainContainer">
          <DisplayUserContact />
          <DisplayEducationExperience />
          <DisplayPracticalExperience />
        </section>
      </div>
    </>
  );
}
