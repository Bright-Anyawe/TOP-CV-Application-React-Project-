import { useState } from "react";

import CvForm from "./Cv Form";
import DisplayUserContact from "./DisplayUserInfo";
import DisplayEducationExperience from "./DisplayEducationInfo";
import DisplayPracticalExperience from "./DisplayPracticalInfo";

export default function App() {
  const [userContact, setUserContact] = useState({
    personName: "",
    email: "",
    mobileNumber: "",
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

  const [displayPersonalContact, setDisplayPersonalContact] = useState(false);

  const [displayEducationDetails, setDisplayEducationDetails] = useState(false);
  const [displayProfessionalDetails, setDisplayProfessionalDetails] =
    useState(false);

    
  const [controlEmailSvgDisplay, setControlEmailSvgDisplay] =
    useState(false);
    const [controlPhoneSvgDisplay, setControlPhoneSvgDisplay] = useState(false);

  const [hideContactEdit, setHideContactEdit] = useState(true);
  const [hideForEducationEdit, setHideForEducationEdit] = useState(true);
  const [hideProfessionalEdit, setHideProfessionalEdit] = useState(true);
  const [hideDate, setHideDate] = useState(true);

  const [ educationArray, setEducationArray] = useState([])


  return (
    <>
      <div id="main-app">
        <ShopContext.Provider value={{ cartItems, products, addToCart }}>
         
        </ShopContext.Provider>
       
      </div>
    </>
  );
}
