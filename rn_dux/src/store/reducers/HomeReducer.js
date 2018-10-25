//contains all our actions and handlers
//
//update: will be used to update the state
import update from 'react-addons-update';
import constants from '../constants/ActionConstants';

const { SET_NAME } = constants;

export function setName(){
    return {
        type:SET_NAME,
        payload:"hussain"
    }
}

function handleSetName(state, action){
    return update(state,{
        name:{ //name will be passed in as a props in our component
            $set:action.payload
        }
    })
}
const ACTION_HANDLERS = {
    SET_NAME:handleSetName
}

const initialState = {};


export function HomeReducer(state = initialState, action){
    //we need to create action handler that will need to pass here with action type
    const handler  = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;

}