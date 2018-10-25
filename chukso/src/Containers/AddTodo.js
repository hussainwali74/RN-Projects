import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { addTodo } from '../Actions';

 class AddTodo extends Component {
    constructor(props){
        super(props);
    }

    state = {
        text:''
    }
    addTodo = (text) => {
        //redux store
        this.props.dispatch(addTodo(text));
        this.setState({text:''});
    }

    render() {
        return (
            <View style={{flexDirection:'row', marginHorizontal:20, marginVertical:20}}>
                <TextInput
                    onChangeText={(text)=>this.setState({text})} 
                    value={this.state.text}
                    placeholder="e.g., watch a movie"
                    style={{borderWidth:1, borderColor:'#f2f2e1', backgroundColor:'#eaeaea', paddingHorizontal:5, height:50, flex:1, padding: 5}}
                    />
                <TouchableOpacity onPress={()=>this.addTodo(this.state.text)} >
                    <View style={{height:48, marginTop:1, alignContent:'center', justifyContent:'center', alignItems:'center', backgroundColor:'#bbabbb'}}>
                        <Text style={{color:"#fff", fontWeight:'bold',  paddingHorizontal:10}}>Add Todo</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(AddTodo);