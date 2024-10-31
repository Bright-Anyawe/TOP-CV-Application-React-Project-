const initialState = {
     userName: '',
     userEmail: '',
     mobileNumber: '',
}


export const userContactRe = (state, action) => {
  switch (action.type) {
    case "filled_userContact": {
      return {
        ...state,
        userContact: {
          userName: action.name,
          userEmail: action.email,
          mobileNumber: action.number,
        },
      };
    }
  }
};

export {initialState, Reducer}
