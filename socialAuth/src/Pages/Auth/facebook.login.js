import React, { Component } from 'react'
import { Text, Alert, StyleSheet, View, TouchableOpacity} from 'react-native'

// import FBSDK, { LoginManager } from 'react-native-fbsdk';
import { LoginButton, AccessToken } from 'react-native-fbsdk';


export default class FacebookLogin extends Component {

  _fbAuth(){

    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
      if(result.isCancelled){
        console.log('Login was cancelled');
      }else{
        console.log('login successful');
        console.log(result.grantedPermissions.toString());
        console.log('----------------------------');
      }
    }, function(err){ //rejected error
      console.log('An error occurred callback error');
      console.log(err);
    } 
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
        {/* <Text>Hello world</Text>

        <TouchableOpacity onPress = { () => this._fbAuth() }>
        <Text>Login To Facebook</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
