import React, { Component } from 'react';
import {View, Text}  from 'react-native';
//for mapping state and action creators
import { connect } from 'react-redux';

// import Home from '../components/Home';
import { setName } from '../actions/Home';

import { HomeReducer } from '../modules/Home';

class Home extends Component{
    render() {

        return (
          <View style={{flex:1,  justifyContent:'center', alignItems:'center'}}>
            <Text> hello {this.props.name} </Text>
          </View>
        )
      }
}

const mapStateToProps = (state) => ({
    name: state.home.name

});

const mapActionCreators  = {
    setName
};


export default connect(mapStateToProps, mapActionCreators)(Home);

