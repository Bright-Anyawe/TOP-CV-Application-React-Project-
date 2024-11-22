import { useState, createContext, useReducer } from "react";

import CvForm from "./Form Components/Cv Form";
import DisplayUserContact from "./Display Components/DisplayUserInfo";
import DisplayEducationExperience from "./Display Components/DisplayEducationInfo";
import DisplayPracticalExperience from "./Display Components/DisplayPracticalInfo";
import { initialState, userFormReducer } from "./Reducers/contactReducer";
import {
  educationInitialState,
  educationFormReducer,
} from "./Reducers/educationReducer";

export const UserContactContext = createContext(null);

export const EducationContext = createContext(null);

export default function App() {
  const [state, dispatch] = useReducer(userFormReducer, initialState);
  const [educationInitialState, educationDispatch] = useReducer(
    educationFormReducer,
    educationInitialState
  );

  const [userContact, setUserContact] = useState(null);

  const [educationArray, setEducationArray] = useState([]);
  const [experienceArray, setExperienceArray] = useState([]);

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

  const [controlEmailSvgDisplay, setControlEmailSvgDisplay] = useState(false);
  const [controlPhoneSvgDisplay, setControlPhoneSvgDisplay] = useState(false);

  const [hideContactEdit, setHideContactEdit] = useState(true);
  const [hideForEducationEdit, setHideForEducationEdit] = useState(true);
  const [hideProfessionalEdit, setHideProfessionalEdit] = useState(true);
  const [hideDate, setHideDate] = useState(true);

  const [editIndex, setEditIndex] = useState(null);

  return (
    <>
      <div id="main-app">
        <UserContactContext.Provider
          value={{
            displayPersonalContact,
            setDisplayPersonalContact,
            controlEmailSvgDisplay,
            setControlEmailSvgDisplay,
            controlPhoneSvgDisplay,
            setControlPhoneSvgDisplay,
            hideContactEdit,
            setHideContactEdit,
            state,
            userContact,
            setUserContact,
            dispatch,
          }}
        >
          {" "}
          <EducationContext.Provider
            value={{
              educationInitialState,
              educationDispatch,
              educationArray,
              setEducationArray,
              editIndex,
              setEditIndex,
            }}
          >
            <section id="cvFormContainer">
              <CvForm
                educationArray={educationArray}
                setEducationArray={setEducationArray}
                experienceArray={experienceArray}
                setExperienceArray={setExperienceArray}
                // setEducationExperience={setEducationExperience}
                practicalExperience={practicalExperience}
                setPracticalExperience={setPracticalExperience}
                displayPersonalContact={displayPersonalContact}
                setDisplayPersonalContact={setDisplayPersonalContact}
                displayEducationDetails={displayEducationDetails}
                setDisplayEducationDetails={setDisplayEducationDetails}
                displayProfessionalDetails={displayProfessionalDetails}
                setDisplayProfessionalDetails={setDisplayProfessionalDetails}
                setControlEmailSvgDisplay={setControlEmailSvgDisplay}
                setControlPhoneSvgDisplay={setControlPhoneSvgDisplay}
                setHideContactEdit={setHideContactEdit}
                setHideForEducationEdit={setHideForEducationEdit}
                hideProfessionalEdit={hideProfessionalEdit}
                setHideProfessionalEdit={setHideProfessionalEdit}
                setHideDate={setHideDate}
              />
            </section>

            <section id="displayMainContainer">
              <div className="displaySubContainer">
                <DisplayUserContact />
                <DisplayEducationExperience
                  // educationExperience={educationExperience}
                  educationArray={educationArray}
                  displayEducationDetails={displayEducationDetails}
                  setDisplayEducationDetails={setDisplayEducationDetails}
                  setHideForEducationEdit={setHideForEducationEdit}
                  hideForEducationEdit={hideForEducationEdit}
                  hideDate={hideDate}
                />
                <DisplayPracticalExperience
                  experienceArray={experienceArray}
                  practicalExperience={practicalExperience}
                  setDisplayProfessionalDetails={setDisplayProfessionalDetails}
                  hideProfessionalEdit={hideProfessionalEdit}
                  setHideProfessionalEdit={setHideProfessionalEdit}
                  hideDate={hideDate}
                />
              </div>
            </section>
          </EducationContext.Provider>
        </UserContactContext.Provider>
      </div>
    </>
  );
}
