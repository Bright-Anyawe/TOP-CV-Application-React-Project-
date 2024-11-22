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
export const ExperienceContext = createContext(null);


export default function App() {
  const [state, dispatch] = useReducer(userFormReducer, initialState);

  const [educationState, educationDispatch] = useReducer(
    educationFormReducer,
    educationInitialState
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

ExperienceContext.


          </EducationContext.Provider>
        </UserContactContext.Provider>
      </div>
    </>
  );
}
