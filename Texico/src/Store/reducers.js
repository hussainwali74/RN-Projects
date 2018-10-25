import { combineReducers } from 'redux';
import { HomeReducer as home } from '../Routes/Home/Modules/home';
const makeRootReducer = () => {
    return combineReducers({
        home
    });
}

export default makeRootReducer;