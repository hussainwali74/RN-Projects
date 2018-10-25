import React from 'react';
import {
  View,
  StatusBar ,
  StyleSheet
} from 'react-native';  
import  Root  from './src/Root';


console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Root {...this.props} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
});


