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

        [action.userContact.fieldName]: action.userContact.fieldValue,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export { initialState, userContactReducer };
