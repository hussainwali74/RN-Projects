import React, { Component  } from "react";

import { StyleSheet, Text, View } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class NumPad extends Component{

    render(){
        return (
            <View style={styles.container}><Text>Inside NumPad.sj </Text></View>
        );
    }
}
const  styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey'

    }
});