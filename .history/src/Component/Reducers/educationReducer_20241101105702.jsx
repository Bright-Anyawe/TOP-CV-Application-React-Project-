
const educationInitialState = {
  studiesTitle: "",
  studiesMajor: "",
  schoolName: "",
  studiesStartDate: "",
  studiesEndDate: "",
};

const educationFormReducer = (state, action) => {
  switch (action.type) {
    
    case "Update_education_inputs": {
      return {
        ...state,
        // educationExperience: {
        [action.education.fieldName]: action.education.fieldValue,
        // },
      };
    }

    case: ""
    case "clearEducationInput": {
      return {
        ...state,
        studiesTitle: "",
        studiesMajor: "",
        schoolName: "",
        studiesStartDate: "",
        studiesEndDate: "",
      };
    }

    default: {
      return state;
    }
  }
};

export { educationInitialState, educationFormReducer };
