import React, { Component } from 'react'
import { Text, View, StyleSheet,  Button} from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class Index extends Component {
    gotoFacebookLogin(){
        Actions.facebook();
    }
    gotoGoogleLogin(){
        Actions.google();
    }
  render() {
    return (
        <View style={styles.container}>
            <Button   color="#841584" style={[styles.button,{marginTop:20}]} onPress={()=>this.gotoFacebookLogin()} title="Facebook Login"/>
            <View style={{marginBottom:10,marginTop:10}} ></View>
            <Button     color="#841584" style={styles.button} onPress={()=>this.gotoGoogleLogin()} title="Google Login"/>
        </View>
    )
  }
}
const styles  = StyleSheet.create({
    container:{
        padding:10, 
        backgroundColor:"#A9ABD3",
        height:"100%",
         justifyContent:'center'
         
        
    },
    button:{
        width:'90%',
        padding: 5,
        marginTop:10,
        marginBottom:10,
        borderRadius:14,
        borderWidth:0.5,
        borderColor: '#d6d7da',
    }
});