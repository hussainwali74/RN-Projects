import React, { Component } from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';


export default class GoogleLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: null,
            error:null,
            isSigninInProgress:true
        }
    }
    async componentDidMount(){
        this._configureGoogleSignIn();
        await this._getCurrentUser();
    }
    _configureGoogleSignIn(){
        GoogleSignin.configure({
            webClientId:"544926993935-idqu75aifldvhf86oi968j9nlgep0kpu.apps.googleusercontent.com",
            offlineAccess:false,
        });
    }

    async _getCurrentUser(){
        try {
            const userInfo = await GoogleSignin.signInSilently();
            this.setState({userInfo, error:null});

        } catch (error) {
            const errorMessage = error.code === statusCodes.SIGN_IN_REQUIRED ? 'Please sign in :)' : error.mesage;
            this.setState({
                error:errorMessage,
            });
        }
    }
    render() {
        const { userInfo } = this.state;
        const body = userInfo ? this.renderUserInfo():this.renderSignInButton();
        return (
            <View style={styles.container}>
                
            {/* {this.renderIsSignedIn()}         */}
            {body}
            </View>
        );
    }
    renderUserInfo(){
        const { userInfo } = this.state;
        console.log(userInfo);
        console.log(userInfo.email);
        return (
            <View style={{marginTop:15, marginBottom:15}}>
                <Text style={{fontSize:18, fontWeight:'bold', marginBottom:20 }} >
                    Welcome {userInfo.name}
                </Text>
                <Text> you user info: {JSON.stringify(userInfo.email)}</Text>
                <Button onPress={this._signOut} title="Log Out"/>
                {this.renderError()}
            </View>
        );
    }
    renderSignInButton(){
        return (
            <View style={styles.container}>
                <GoogleSigninButton 
                style={{width:212, height:48}}
                size={GoogleSigninButton.Size.Standard}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
                />
            </View>
        );
    }
    renderError(){
        const { error } = this.state;
        
        if(!error){
            return  null;
        }
        const text = `${error.toString()} ${error.code?error.code:''}`;
        return <Text>{text}</Text>;
    }
_signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({userInfo, error:null});

    } catch (error) {
        if(error.code === statusCodes.SIGN_IN_CANCELLED){
            Alert.alert('cancelled');
        }else if(error.code === statusCodes.IN_PROGRESS ){
            Alert.alert('in progress');
        }else if(error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE){
            
            Alert.alert('Play Services not Available');
        }else{
            Alert.alert('Something went wrong', error.toString());
            this.setState({
                error,
            });
        }

    }
};
_signOut = async () => {
    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();

        this.setState({
            userInfo:null,
            error:null
        })
    } catch (error) {
        this.setState({
            error,
        });
    }
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