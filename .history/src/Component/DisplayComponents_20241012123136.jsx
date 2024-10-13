import DisplayUserContact from "./DisplayUserInfo";
import DisplayEducationExperience from "./DisplayEducationInfo";
import DisplayPracticalExperience from "./DisplayPracticalInfo";


export default function DisplayComponents() {


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