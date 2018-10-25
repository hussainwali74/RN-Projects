import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux'; 
import {setName} from '../store/reducers/HomeReducer';

import Logo from '../components/Logo';
import Form from '../components/Form';

 

 
 export default class Login extends Component {
  signup() {
		Actions.signup()
  };
  
  render() { 
    return (
      <View style={{backgroundColor:'#fff',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'}}>
          <Logo/>
          <Text style={{fontSize:33, fontWeight:'bold', color:'black'}}>Haider {this.props.ali} </Text>
          <Form place="User Email"/>
          <View style={styles.signupTextCont}>
            <TouchableOpacity  style={styles.signupButton} onPress={this.signup}><Text style={styles.buttonText}> Login as Admin</Text></TouchableOpacity>
          </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
    buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  signupButton: {
   width:300,
    backgroundColor:'#3D9BF5',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  }
});

 