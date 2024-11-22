

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

    case "clearExperienceInput": {
      return {
        ...state,
        companyName: "",
        jobPosition: "",
        jobResponsibilities: "",
        jobEntryDate: "",
        jobExitDate: "",
      };
    }
    case "UpdateExperienceEditInput": {

      
      return {
        ...state,
        
      }
     let updateInput = action.experience
      console.log(updateInput);
      
    }

    default: {
      return state;
    }
  }
};

export { experienceFormReducer, experienceInitialState };
