import CvForm from "./Cv Form";

 export default function App() {
  return (
    <>
      <div id="main-app">
        <div id="c">
          <CvForm />
        </div>
        <section id="displayMainContainer">
          <DisplayUserContact />
          <DisplayEducationExperience />
          <DisplayPracticalExperience />
        </section>
      </div>
    </>
  );
}
