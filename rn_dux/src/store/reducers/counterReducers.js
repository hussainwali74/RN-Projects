import { SETCOUNTER, INCREMENT, DECREMENT } from '../actions';

export default (state = 3, action) => {
    switch(action.type) {
        case INCREMENT:
        return state + 1;
        case DECREMENT:
            return state - 1;
        case SETCOUNTER:
            return action.payload;
        default:
        return state;
    }
}