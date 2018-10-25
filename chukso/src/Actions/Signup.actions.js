import { SET_NAME } from './actionTypes';

//an action to save myName of signup page
export const setName = (myName) => ({
    type:SET_NAME,
    myName
})