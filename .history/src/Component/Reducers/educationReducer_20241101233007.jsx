const educationInitialState = [];

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
      return {
        ...state,
        educationInput: {
          studiesTitle: action.education.studiesTitle,
          studiesMajor: action.education.studiesMajor,
          schoolName: action.education.schoolName,
          studiesStartDate: action.education.studiesStartDate,
          studiesEndDate: action.education.studiesEndDate,
        },
      };
    }
    case "update_education_array": {
      const updateArray = [...(state.educationExperience || [])];
      if (action.editIndex !== null) {
        updateArray[action.editIndex] = action.updatedData;
      } else {
        updateArray.push(action.updatedData);
      }
      return {
        ...state,
        updateArray,
      };
    }
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
