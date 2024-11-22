const educationInitialState = [
 
];

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
    case "UpdateEducationEditInput": {
      console.log("Updated education:", action.education);
      return {
        ...state,
        studiesTitle: action.education.studiesTitle || "",
        studiesMajor: action.education.studiesMajor || "",
        schoolName: action.education.schoolName || "",
        studiesStartDate: action.education.studiesStartDate || "",
        studiesEndDate: action.education.studiesEndDate || "",
      };
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
