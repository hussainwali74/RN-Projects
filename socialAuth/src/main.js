import React, { Component } from 'react'
import { Text, Alert, StyleSheet, View, TouchableOpacity} from 'react-native'

// import FBSDK, { LoginManager } from 'react-native-fbsdk';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

import Routes from './Routes/routes';

export default class Main extends Component {

  render() {
    return ( 
      <Routes /> 
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
