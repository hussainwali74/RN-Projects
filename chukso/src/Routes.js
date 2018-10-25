import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Router, Stack, Scene } from 'react-native-router-flux';

import TodoApp from './TodoApp';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Timer from './TimerApp';
import Welcome from './welcome.page';

export default class Routes extends Component {
  render() {
    return (
        <Router titleStyle={{color:"#F0F9F4", alignSelf:'center'}} navigationBarStyle={{backgroundColor:'#aaafff'}} >
            <Stack key="root">
                <Scene hideNavBar={true} title="Welcome" key="welcome" component={Welcome} initial />
                <Scene title="login" key="login" component={Login}   />
                <Scene title="Signup" key="signup" component={Signup}  />
                <Scene title="ToDo App" key="todo" component={TodoApp} />
                <Scene title="Timer" key="time" component={Timer} />
            </Stack>
        </Router>
    )
  }
}
 