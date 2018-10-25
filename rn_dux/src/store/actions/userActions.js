import { LOGIN, LOGIN_SUCCESS } from '../actions/types';

export function loginToApp(email, password){
    var authData = {}
    var url = 'http://divitech.codejunkie.pk/api/login'; 
    return (dispatch) => {
        fetch(url,{
            method: 'POST',
            body:JSON.stringify({email:email, password:password}),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(res => res.json())
        .then((response) => {
            if(response.user.group == 'User'){
                AuthData = {
                    user_id : response.user.id.toString(),
                    token: response.token,
                    group:response.user.group
                }
            }
        })
        .then(AuthData => dispatch(login(AuthData))) //check json format first
        .catch(error => alert(error));
    }
}
 
function login(data){
    return {
        type:LOGIN_SUCCESS,
        payload: {
            data
        }
    }
}