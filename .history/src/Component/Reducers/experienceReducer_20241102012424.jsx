

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
        companyName: action.education.studiesTitle,
        jobPosition: action.education.studiesMajor,
        jobResponsibilties: action.education.schoolName,
        jobEntryDate Dte: action.education.studiesStartDate,
        jobExitDate  te: action.education.studiesEndDate,
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