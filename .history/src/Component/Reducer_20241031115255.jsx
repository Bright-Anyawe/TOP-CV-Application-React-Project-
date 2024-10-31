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
          ...state.user
        }

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
