import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import {Actions} from 'react-native-router-flux';    
import Logo from '../Components/Logo';
import Form from '../Components/Form';  

class Login extends Component { 
  signup() {
    alert("go back");
		Actions.signup()
  };

  componentDidMount(){ 
  }
  
  render() {  
    return (
      <View style={{backgroundColor:'#fff',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'}}>
          <Logo/>
          <Form place="User Email"/>
          <View style={styles.signupTextCont}>
            <TouchableOpacity  style={styles.signupButton} onPress={this.signup}><Text style={styles.buttonText}> Login as Admin</Text></TouchableOpacity>
          </View>
      </View>
    )
  }
}

// function mapStateToProps(state){
//   const myState = state.userReducer;
//     return {
//        myState
//         };
// };

//! function mapDispatchToProps(dispatch){
//   return bindActionCreators(setName,dispatch);
// };

// const mapDispatchToProps = (dispatch) => ({
//   setName: name => dispatch(setName(name))
// });

export default Login;

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

 