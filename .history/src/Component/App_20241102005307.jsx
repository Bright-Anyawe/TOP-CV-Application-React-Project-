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
import {
  experienceFormReducer,
  experienceInitialState,
} from "./Reducers/experienceReducer";

export const UserContactContext = createContext(null);
export const EducationContext = createContext(null);
export const ExperienceContext = createContext(null);

export default function App() {
  const [state, dispatch] = useReducer(userFormReducer, initialState);

  const [educationState, educationDispatch] = useReducer(
    educationFormReducer,
    educationInitialState
  );

  const [experienceState, experienceDispatch] = useReducer(
    experienceFormReducer,
    experienceInitialState
  );

  const [userContact, setUserContact] = useState(null);

  const [educationArray, setEducationArray] = useState([]);
  const [educationExperience, setEducationExperience] = useState({});

  const [experienceArray, setExperienceArray] = useState([]);
  const [practicalExperience, setPracticalExperience] = useState({});

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
  const [experienceEditIndex, setExperienceEditIndex] = useState(null)

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
              educationState,
              educationDispatch,
              educationExperience,
              setEducationExperience,
              educationArray,
              setEducationArray,
              editIndex,
              setEditIndex,
            }}
          >
            <ExperienceContext.Provider
              value={{
                experienceState,
                experienceDispatch,
                experienceArray,
                setExperienceArray,
                practicalExperience,
                setPracticalExperience,
              }}
            >
              <section id="cvFormContainer">
                <CvForm
                  educationArray={educationArray}
                  setEducationArray={setEducationArray}
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
                    practicalExperience={practicalExperience}
                    setDisplayProfessionalDetails={
                      setDisplayProfessionalDetails
                    }
                    hideProfessionalEdit={hideProfessionalEdit}
                    setHideProfessionalEdit={setHideProfessionalEdit}
                    hideDate={hideDate}
                  />
                </div>
              </section>
            </ExperienceContext.Provider>
          </EducationContext.Provider>
        </UserContactContext.Provider>
      </div>
    </>
  );
}
