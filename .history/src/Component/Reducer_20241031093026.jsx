const initialState = 


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
