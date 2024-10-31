const initialState = {
     userName: '',
     userEmail: '',
     
}


export const Reducer = (state, action) => {
  switch (action.type) {
    case "filled_userContact": {
      return {
        ...state,
        userContact: {
          name: action.name,
          email: action.email,
          number: action.number,
        },
      };
    }
  }
};
