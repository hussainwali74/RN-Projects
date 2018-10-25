import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, Permissions, AsyncStorage,ActivityIndicator,Image
} from 'react-native';

import { KeyboardAvoidingView } from 'react-native';

import {Actions} from 'react-native-router-flux';
export default class SignupForm extends Component<{}> {
constructor()
    {
        super();
        this.state = {
            email:'',
            password: '',
            pushtoken:'',
              isLoading:false,
            user_id:''
        }
    }
   updateValue(text,field) 
    {
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
    componentDidMount(){
            AsyncStorage.getItem('auth_data').then((value)=> {
                   if(value !== null){
                       var value = JSON.parse(value)
           
                       if(value[0].group === 'Admin'){
                       Actions.home()
                       }else if (value[0].group === 'User'){
                        
                          Actions.user() 
                       }else{
                           AsyncStorage.removeItem('auth_data')
                       }
                    }
                })
    }
    
      submit()
    {
        this.setState({
              isLoading:true
        })
        let collection={}
        collection.email=this.state.email,
        collection.password=this.state.password
      
      
         
        var url = 'http://divitech.codejunkie.pk/api/login';
      

        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(collection), // data can be `string` or {object}!
        headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
                }
        }).then(res => res.json())
        
      
        .then(response => {
        if (response.error) {
          alert(response.error)
          this.setState({
                      isLoading:false,
                })
        } else {
            this.setState({
                user_id:response.user.id.toString()
            })
            
                     if(response.user.group == 'Admin'){
                 const arrayData =[];
         const AuthData = {
             user_id : response.user.id.toString(),
             token: response.token,
             group:response.user.group
         }

  arrayData.push(AuthData);
            try{ 
                AsyncStorage.getItem('auth_data').then((value)=> {
                    if(value !== null){
                        this.setState({
                              isLoading:false
                        })
                        Actions.home();
                    }else{
                        AsyncStorage.setItem('auth_data', JSON.stringify(arrayData));
                        
                        
                            //here update token
          this.setState({
            isLoading:false
        }) 
                        }
                    
                })
            }
            catch(err) {
                console.log(err)
                }

            
            }else if(response.user.group == 'User'){
            
              alert('You Are Not a Admin Please Signin from User Side!')
               this.setState({
                              isLoading:false
                        })
              Actions.login()
            }else{
                alert('There is an User Role Problem Kindly contact to DiviTech Organization!')
            }
     
           
            } 
      })
        .catch(error => console.error('Error:', error));
    }
    
	render(){
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
           <TouchableOpacity onPress= {()=>this.submit()} style={styles.button}>
            {this.state.isLoading
            ?
           
         
                <ActivityIndicator style={{justifyContent:'center',alignItems:'center'}} size="small" color="#ffffff" animating />
           
          : (  <Text style={styles.buttonText}>
                 Login  </Text>
          )}
                 
           </TouchableOpacity>     
  		</KeyboardAvoidingView>
			)
	}
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