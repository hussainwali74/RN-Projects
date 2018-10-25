// all our todo actions
import {ADD_TODO, TOGGLE_TODO, SET_NAME, START_TIMER, RESTART_TIMER, ADD_SECOND} from './actionTypes';

let nextId = 0;
export const addTodo = (text) => ({
    type:ADD_TODO,
    id:nextId++,
    text
})

export const toggleTodo = (id) =>({
    type: TOGGLE_TODO,
    id
});
 
export const setName = (name = "hussain") => ({
    type:SET_NAME,
    payload:name
});

//DEFINING ACTION CREATORS - they create actions

function startTimer(){
    return {
        type:START_TIMER
    };
}

function restartTimer(){
    return {
        type:RESTART_TIMER
    }
}

function addSecond(){
    return {
        type:ADD_SECOND
    }
}
const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}
export { actionCreators };

////now we go towards reducers: receivers of action,  from here, 