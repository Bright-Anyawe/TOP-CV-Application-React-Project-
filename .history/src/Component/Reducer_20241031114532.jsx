const initialState = {
  userContact: 
};

const userContactReducer = (state, action) => {
  switch (action.type) {
    case "Update_userContact_input": {
      return {
        ...state,

        [action.userContact.fieldName]: action.userContact.fieldValue,
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

    default: {
      return state;
    }
  }
};

export { initialState, userContactReducer };
