import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Stack, Scene, Router } from 'react-native-router-flux';
import FacebookLogin from '../Pages/Auth/facebook.login';
import GoogleLogin from '../Pages/Auth/google.login';
import Index from '../Pages';

export default class Routes extends Component {
    
      
  render() {
    return (
    <Router>
      <Stack key="root">

        <Scene title="home"  initial={true} component ={Index} key="home" />
        <Scene title="facebook"   component ={FacebookLogin} key="facebook" />
        <Scene title="google"  component ={GoogleLogin} key="google" />
      </Stack>
    </Router>
    )
  }
}
