const initialState = {
     userName: '',
     userEmail: '',
     mobileNumber: '',
}


export const userContactReducer = (state, action) => {
  switch (action.type) {
    case "Update_userContact_input": {
      return {
        ...state,
        userContact: {
          [action.userContact.fieldName]: action.userContact.fieldValue,
        },
      };
    }
  }
};

export { initialState, userContactReducer };
