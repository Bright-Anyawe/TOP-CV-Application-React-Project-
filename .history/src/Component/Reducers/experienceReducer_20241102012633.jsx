

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
        companyName: action.experience.companyName,
        jobPosition: action.experience.jobPosition,
        jobResponsibilities: action.experience.jobResponsibilities,
        jobEntryDate: action.experience.jobEntryDate,
        jobExitDate: action.experience.jobExitDate,
        //    },
      };
    }
    case "clearEducationInput": {
      return {
        ...state,
         companyName: "",
         jobPosition: "",
         jobResponsibilities:"",
         jobEntryDate: "",
         jobExitDate: "",
      };
    }

    default: {
      return state;
    }
  }
};

export { experienceFormReducer, experienceInitialState };