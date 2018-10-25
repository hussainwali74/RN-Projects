import {START_TIMER, ADD_SECOND, RESTART_TIMER} from '../Actions/actionTypes';

const TIMER_DURATION =15;

//initial state
const initialState ={
    isPlaying:false,
    elapsedTime:0,
    timerDuration:TIMER_DURATION
};

//HELPER functions

function applyStartTimer(state){
    return {
        ...state,
        isPlaying:true
    }
};

function applyRestartTimer(state){
    return {
        ...state,
        isPlaying:false,
        timerDuration:TIMER_DURATION,
        elapsedTime:0
    }
}

function applyAddSecond(state){
    if(state.elapsedTime < TIMER_DURATION){
        return {
            ...state,
            elapsedTime: state.elapsedTime+1
        };
    }else{
        return {
            ...state,
          isPlaying:false
        }
    }
}


///REDUCER FUNCTIONS

function timerReducer(state = initialState, action){
    switch(action.type){
        case START_TIMER:
         //HANDLE  THE ACTION HERE USING HELPER FUNCTIONS
         return applyStartTimer(state);
        case RESTART_TIMER:
         return applyRestartTimer(state);
        case ADD_SECOND:
         return applyAddSecond(state);
        default:
         return state;
    }
}

export default timerReducer;