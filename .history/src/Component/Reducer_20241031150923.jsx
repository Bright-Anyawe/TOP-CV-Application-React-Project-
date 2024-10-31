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

    case 'Update_education_input': {
     return
    }

    default: {
      return state;
    }
  }
};

export { initialState, userContactReducer };
