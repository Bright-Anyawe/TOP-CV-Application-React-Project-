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
    const [displayAdditionalBtn, setDisplayAdditionalBtn] = useState(false);


  const [experienceState, experienceDispatch] = useReducer(
    experienceFormReducer,
    experienceInitialState
  );
    const [displayExperienceAdditionalBtn, setDisplayExperienceAdditionalBtn] =
      useState(false);


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
  const [hideDateExperience, setHideDateExperience] = useState(true);
  const [hideDateEducation,setHideDateEducation] = useState(true)

  const [editIndex, setEditIndex] = useState(null);
  const [experienceEditIndex, setExperienceEditIndex] = useState(null);
  const [whiteColor, setWhiteColor] = useState(false)

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
            whiteColor,
            setWhiteColor,
          }}
        >
          {" "}
          <EducationContext.Provider
            value={{
              educationState,
              educationDispatch,
              educationExperience,
              setEducationExperience,
              displayAdditionalBtn,
              setDisplayAdditionalBtn,
              educationArray,
              setEducationArray,
              editIndex,
              setEditIndex,
              hideDateEducation,
              setHideDateEducation,
            }}
          >
            <ExperienceContext.Provider
              value={{
                experienceState,
                experienceDispatch,
                experienceArray,
                setExperienceArray,
                practicalExperience,
                experienceEditIndex,
                setExperienceEditIndex,
                setPracticalExperience,
                displayExperienceAdditionalBtn,
                setDisplayExperienceAdditionalBtn,
                hideDateExperience,
                setHideDateExperience,
              }}
            >
              <section id="cvFormContainer">
                <CvForm
                  educationArray={educationArray}
                  setEducationArray={setEducationArray}
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
                />
              </section>

              <section id="displayMainContainer">
                <div className="displaySubContainer">
                  <DisplayUserContact />
                  <DisplayEducationExperience
                    educationArray={educationArray}
                    displayEducationDetails={displayEducationDetails}
                    setDisplayEducationDetails={setDisplayEducationDetails}
                    setHideForEducationEdit={setHideForEducationEdit}
                    hideForEducationEdit={hideForEducationEdit}
                  />
                  <DisplayPracticalExperience
                    practicalExperience={practicalExperience}
                    setDisplayProfessionalDetails={
                      setDisplayProfessionalDetails
                    }
                    hideProfessionalEdit={hideProfessionalEdit}
                    setHideProfessionalEdit={setHideProfessionalEdit}
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