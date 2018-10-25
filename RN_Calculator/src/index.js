import React, { Component  } from "react";

import { StyleSheet, Text, View } from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
 
import Welcome from "./screens/WelcomeScreen";
import Calculator from './screens/CalculatorScreen';


export default class Index extends Component{

    render(){
        return (
            <Router>
                <Scene key="root"  >
                    <Scene key="welcome" initial={true} component={Welcome}  title="welcome" />
                    <Scene key="calculator" component={Calculator} title="calculator" /> 
                </Scene>
            </Router>
        );
    }
}