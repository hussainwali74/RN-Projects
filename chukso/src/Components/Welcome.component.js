import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';

const WelcomeButton = ({buttonText, onPress}) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>   
);


WelcomeButton.proptTypes = {
    onPress:PropTypes.func.isRequired,
    buttonText:PropTypes.string.isRequired
};


const styles = StyleSheet.create({
    button:{
        backgroundColor:'#9095E0',
        marginVertical:5, 
        padding:10,
        alignItems:'center',
        width:"100%",
        height:40, 
    },
    text:{
        fontSize:18,
        fontWeight:'500',
        color:"#ECECFD"
    }
})

export default WelcomeButton;