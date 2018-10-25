import React, { Component } from 'react' 
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { View, Text} from 'react-native';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StatefulContainer from './store/stateFulComponents/StatefulContainer';

export default class AppContainer extends Component {
    static PropTypes = {
        store: PropTypes.object.isRequired
    }
  render() {
    return (    
        <Router>    
            <Stack key="root">
                <Scene key="login" hideNavBar={true} component={StatefulContainer} title="Login" initial={true} />
                <Scene key="signup" hideNavBar={true} component={Signup} title="Signup" />
            </Stack>
        </Router> 
    )
  }
}