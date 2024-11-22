const initialState = {
  userName: "",
  userEmail: "",
  mobileNumber: "",
};

const userFormReducer = (state, action) => {
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
    case "updateContactEditInput": {
      return {
        ...state,
        userName: action.userContact.userName,
        userEmail: action.userContact.userEmail,
        mobileNumber: action.userContact.mobileNumber,
      };
    }

    case "Update_education_inputs": {
      return {
        ...state,
       exper [action.education.fieldName]: action.education.fieldValue,
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

export { initialState, userFormReducer };
