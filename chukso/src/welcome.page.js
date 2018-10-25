import React, { Component } from 'react'
import { Actions } from 'react-native-router-flux';
import {View, StyleSheet } from 'react-native';
import WelcomeButton from './Components/Welcome.component';


export default class Welcome extends Component {
    login(){
        Actions.login();
    }
    stopWatch(){
        Actions.time();
    }
    todo(){
        Actions.todo();
    }
  render() {
    return (
        <View style={styles.container}>
            <WelcomeButton buttonText='Divitech App' onPress={this.login}  /> 
            <WelcomeButton buttonText="StopWatch App" onPress={this.stopWatch} />
            <WelcomeButton buttonText="Todo App" onPress={this.todo} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#aaafff',
        flex:1,
        justifyContent:'center'

     }
})
