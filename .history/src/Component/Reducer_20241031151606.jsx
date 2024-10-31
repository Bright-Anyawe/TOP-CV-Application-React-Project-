const initialState = {
  userName: "",
  userEmail: "",
  mobileNumber: "",
};

const userContactReducer = (state, action) => {
  switch (action.type) {
    case "Update_userContact_input": {
      return {
        ...state,
        [action.contact.fieldName]: action.contact.fieldValue,
      };
    }
    case "clearInput": {
      return {
        ...state,
        userName: "",
        userEmail: "",
        mobileNumber: "",
      };
    }

    case "Update_education_input": {
      return {
        ...state,
        [action.education.fieldName]: action.education.fieldValue,
      };
    }
    case "clearEducationInput": {
      return {
        ...state,
        studiesTitle: "",
        studiesMajor: "",
        mobileNumber: "",
      };
    }

    default: {
      return state;
    }
  }
};

export { initialState, userContactReducer };
