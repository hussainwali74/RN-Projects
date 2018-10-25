import { SETCOUNTER, INCREMENT, DECREMENT } from '../actions';
export const counterIncrement = () => {
    return {
        type:INCREMENT,

    };
}

export const counterDecrement = () => {
    return {
        type:DECREMENT
    };
}
export const counterSet = (receivedNumber) => {
    return {
        type:SETCOUNTER,
        payload: receivedNumber
    }
}