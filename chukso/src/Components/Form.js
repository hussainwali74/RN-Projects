import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity ,AsyncStorage,ActivityIndicator,Image
} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import {saveUserData} from '../Actions/User.action';
import {connect } from 'react-redux';

 class Form extends Component {

    constructor(){
        super();
        this.state = {
            email:'',
            password: '', 
            isLoading:false
        }
    }

   updateValue(text,field){
       if(field == 'email'){
           this.setState({
               email:text,
           })
       }
        else if(field == 'password'){
            this.setState({
                password:text,
            })
        }
    }
 
	render(){
        console.log(this.props);
        console.log(this.props.myState);
		return(
			<KeyboardAvoidingView style={{flexGrow: 1,
                justifyContent:'center',
                alignItems: 'center'}} behavior="padding" enabled>
            <TextInput style={styles.inputBox} 
                onChangeText={(text) => this.updateValue(text,'email')}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder={this.props.place}
                placeholderTextColor = "#fff"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}
                />
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    onChangeText={(text) => this.updateValue(text,'password')}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "#fff"
                    ref={(input) => this.password = input}
                    />  
                <TouchableOpacity onPress= {()=>this.props.getUser(this.state.email, this.state.password)} style={styles.button}>
                { this.state.isLoading
                    ?
                        <ActivityIndicator style={{justifyContent:'center',alignItems:'center'}} size="small" color="#ffffff" animating />
                    : (  <Text style={styles.buttonText}>Login  </Text>
                    )
                }  
            </TouchableOpacity> 
            <View>
                <Text>{this.props.user}</Text>
            </View>
  		</KeyboardAvoidingView>
	)}
}
const styles = StyleSheet.create({
  inputBox: {
    width:300,
      height:45,
    backgroundColor:'#a3a7bb',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#3b323f',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#3D9BF5',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
}); 

function mapStateToProps(state){
    const myState = state.userReducer;

    return {
        myState
    };
};

const mapDispatchToProps = (dispatch) => ({
    saveUserData: data => dispatch(saveUserData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);