import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,  } from 'react-native'
import PropTypes from 'prop-types';



const ApnaButton = ({buttonText, onPress }) => (
    <TouchableOpacity onPressOut={onPress} style={{paddingVertical:10, paddingHorizontal:15, borderRadius:10, borderColor:'#11aaee', backgroundColor:'#332222', marginHorizontal:20}}>
        <Text style={{color:"#fff", fontWeight:'100', fontSize:20}}>{buttonText}</Text>
    </TouchableOpacity>
);

ApnaButton.propTypes = {
    onPress:PropTypes.func.isRequired,
    buttonText:PropTypes.string.isRequired
};

export default ApnaButton;
