const initialState = {
  userContact: {
    userName: "",
    userEmail: "",
    mobileNumber: "",
  },
};

const userContactReducer = (state, action) => {
  switch (action.type) {
    case "Update_userContact_input": {
      return {
        ...state,
        userContact: {
          ...state.userContact,
          [action.userContact.fieldName]: action.userContact.fieldValue,
        },
      };
    }
    case "clearInput": {
      return {
        ...state,
        userContact: {
          ...state.userContact,
          [action.userContact.fieldName]: '',
        },
        //    userName: "",
        //    userEmail: "",
        //    mobileNumber: "",
      };
    }

    default: {
      return state;
    }
  }
};

export { initialState, userContactReducer };
