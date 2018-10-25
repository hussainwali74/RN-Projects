import React, { Component  } from "react";

import { StyleSheet, Text, View , Image} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Card, ListItem, Button } from 'react-native-elements'


export default class Welcome extends Component{

    render(){
        return (
            <Card title="Welcom to CALCULATO" style={{margin:0, backgroundColor:'orange'}}>
                <View > 
                <Button
                    raised
                    success
                    icon={{name: 'cached'}}
                    title='BUTTON WITH ICON' />

                    <Button
  large
  info
  rightIcon={{name: 'code'}}
  title='LARGE WITH RIGHT ICON' />

  <Button
  large
  icon={{name: 'envira', type: 'font-awesome'}}
  title='LARGE WITH ICON TYPE' />

                </View>
            </Card>
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