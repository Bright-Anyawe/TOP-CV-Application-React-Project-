

 export const Reducer = (state, action) {

switch(action.type) {

     case 'filled_userContact': {
          return {
               ...state,  {
name: action.name,
email: action.email,
number: action.number,
               }
          }
     }
}
     
}