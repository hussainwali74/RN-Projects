import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Home extends Component {
    componentDidMount(){
        this.props.setName();
    }
  render() {
    return (
      <View>
        <Text> Hello {this.props.name} </Text>
      </View>
    )
  }
}