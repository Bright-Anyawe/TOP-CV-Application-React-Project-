

const experienceInitialState = [];

const experienceFormReducer = (state, action) => {
  switch (action.type) {
    case "Update_experience_inputs": {
      return {
        ...state,
        // educationExperience: {
        [action.experience.fieldName]: action.experience.fieldValue,
        // },
      };
    }
    case "UpdateEducationEditInput": {
      console.log(state);

      return {
        ...state,
        //    educationInput: {
        companyName: action.experience.studiesTitle,
        jobPosition: action.experience.studiesMajor,
        jobResponsibilities: action.experience.schoolName,
        jobEntryDate: action.experience.studiesStartDate,
        jobExitDate: action.experience.studiesEndDate,
        //    },
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

export { experienceFormReducer, experienceInitialState };
