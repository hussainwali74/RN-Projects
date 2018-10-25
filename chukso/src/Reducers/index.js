import { combineReducers } from 'redux';
import  todos from './todos';
import  userReducer from './user.reducer';
import visibilityFilter from './visibilityFilter';

import timerReducer from './timer.reducer';

export default combineReducers({
    todos,
    visibilityFilter,
    userReducer,
    timerReducer
})