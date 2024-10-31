const initialState = {
     userName: '',
     userEmail: '',
     mobileNumber: '',
}


export const userContactReducer = (state, action) => {
  switch (action.type) {
    case "filled_userContact": {
      return {
        ...state,
        userContact: {
        
        [action.userContact.fieldName]: action.userContact.
        
        },
      };
    }
  }
};

export { initialState, userContactReducer };
