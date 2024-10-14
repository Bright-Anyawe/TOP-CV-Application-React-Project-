import DisplayUserContact from "./DisplayUserInfo";
import DisplayEducationExperience from "./DisplayEducationInfo";
import DisplayPracticalExperience from "./DisplayPracticalInfo";


export default function DisplayComponents() {
window.onload = () => {
  let personContact = JSON.parse(localStorage.getItem("userContact"));
  let personEducationExperience = JSON.parse(
    localStorage.getItem("educationExperience")
  );
  let practicalExperience = JSON.parse(
    localStorage.getItem("practicalExperience")
  );

  if (Object.keys(personContact).length !== 0) {
    setIsSubmitContact(true);
    // setValueDisplayContact(true);
    // hideInputContactContainer();
  } else {
    // setIsSubmitContact(false);
    // setIsSubmitContact(false);
  }

  if (Object.keys(personEducationExperience).length !== 0) {
    setIsSubmitForEdu(true);
    // setEduValueDisplay(true);
    // hideInputContainerForEdu();
  } else {
    setIsSubmitForEdu(false);
    setEduValueDisplay(false);
  }

  if (Object.keys(practicalExperience).length !== 0) {
    setIsSubmitForPractical(true);
    setValueDisplayForPractical(true);
    // const inputElContainer = document.querySelector(
    //   ".practicalExperienceInputContainer"
    // );
    // inputElContainer.style.display = "none";
  } else {
    setIsSubmitForPractical(false);
    setValueDisplayForPractical(false);
  }

  return;
};


     return (
       <>
         <section id="displayMainContainer">
           <DisplayUserContact />
           <DisplayEducationExperience />
           <DisplayPracticalExperience />
         </section>
       </>
     );

}