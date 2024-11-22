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

   
    default: {
      return state;
    }
  }
};

export { initialState, userFormReducer };
