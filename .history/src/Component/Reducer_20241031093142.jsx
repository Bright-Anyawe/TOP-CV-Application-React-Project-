const initialState = {
     userName: '',
     userEmail: '',
     mobileNumber: '',
}


export const Reducer = (state, action) => {
  switch (action.type) {
    case "filled_userContact": {
      return {
        ...state,
        userContact: {
          name: action.name,
          email: action.email,
          mobileNumber: action.number,
        },
      };
    }
  }
};
