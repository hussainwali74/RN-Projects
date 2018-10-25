import { SET_NAME, SET_USER_DATA } from '../Actions/actionTypes';

const initialState = {
    username:'Husssain', 
    email:'',
    id:'',
    token:'',
    group:''
};

//HELPER FUNCTIONS

// function setName(state,name){
//     return {
//         ...state,
//            lord:name
//     }
// }

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USER_DATA:
         return {
             ...state,
             username:action.payload.username,
             email:action.payload.email,
             id:action.payload.id,
             token:action.payload.token,
             group:action.payload.group
         };
        case 'DELETE_NAME':
            return {
                ...state,
                username:action.name 
            }
        default:
         return state;
    }
}

export default userReducer;