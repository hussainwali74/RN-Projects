import {SET_USER_DATA} from './actionTypes';

//SET USER DATA
export const saveUserData = (data) => ({
    type:SET_USER_DATA,
    payload:{
        username: data.username,
        email: data.email,
        id: data.id,
        token: data.token,
        group: data.group
    }
});