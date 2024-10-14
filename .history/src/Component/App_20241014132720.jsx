import CvForm from "./Cv Form";

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
