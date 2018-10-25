import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import {connect } from 'react-redux';
import {setName} from '../Actions/Signup.actions';


import Logo from '../Components/Logo';
import SignupForm from '../Components/SignupForm';

import {Actions} from 'react-native-router-flux';

class Signup extends Component {

  goBack() {
      Actions.pop();
  }

  componentDidMount(){
    this.props.setName("Haidar e Karrar");
  }
	render() {
    console.log(this.props.user);
    console.log(this.props);
		return(
			<View style={{    backgroundColor:'#ffffff',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'}}>
        <Logo/>
        <View><Text style={{fontSize:20}}>{this.props.meraName}</Text></View>
        <SignupForm place="Admin Email"/> 
        <View style={{flexGrow: 1,
          alignItems:'flex-end',
          justifyContent :'center',
          paddingVertical:16,
          flexDirection:'row'}}>

          <TouchableOpacity style={styles.signupButton} onPress={this.goBack}><Text style={styles.buttonText}> Login as User</Text></TouchableOpacity>
          
        </View>
			</View>	
    );
	}
}

const styles = StyleSheet.create({

  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
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

const mapStateToProps = (state)=>({
  meraName: state.user.myName
});

// const mapDispatchToProps = (dispatch) =>({
//   setName: name => dispatch(setName(name))
// });

const mapDispatchToProps = (dispatch) => ({
  setName: name => dispatch(setName(name))
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);