import React, { Component } from 'react'
import { Text, TextInput, Button, View, StyleSheet} from 'react-native'

import { connect } from 'react-redux';

import { counterIncrement, counterDecrement, counterSet} from '../actions';
 class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
        this.setCount = this.setCount.bind(this);
    }

    decrement = () => {

     }
    increment = () => {
        alert("nod");
    }
    setCount(number){
        this.props.counterSet(parseInt(number));
    }

  render() {
    return (
        <View>
            <View style={styles.container}>          
                <Button style={{width:150, flex:1, height:40}} onPress={this.props.counterDecrement} title="minus"/>
                <TextInput style={{marginHorizontal:10}} placeholder="0"
                 onChangeText = {this.setCount}
                 value={this.props.count.toString()}
                 />
                <Button style={{width:150, flex:1, height:40}} onPress={this.props.counterIncrement} title="plus"/>
            </View>
            <View style={{ marginTop:20, alignSelf:'center'}}><Text>{this.props.count}</Text></View>
        </View>

    )
  }
}
const styles  = StyleSheet.create({
    container: {
        display:'flex',
        marginTop:10,
        flexDirection:'row',
        paddingHorizontal:10,
        alignContent:'center',
        justifyContent:'center'
    }
})

function mapStateToProps(state){
    return {
        count:state
    }
}
function mapDispatchToProps(){
    return {
        counterIncrement,
        counterDecrement,
        counterSet
    }
}

export default connect(mapStateToProps, Counter)(Counter);