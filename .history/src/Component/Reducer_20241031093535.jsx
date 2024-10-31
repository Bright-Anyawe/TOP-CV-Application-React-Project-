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
        
        aci
        
        },
      };
    }
  }
};

export { initialState, userContactReducer };
