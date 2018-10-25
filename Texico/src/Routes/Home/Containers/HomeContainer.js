import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';
import Home from '../Components/Home';
import { setName } from '../Modules/home';

const mapStatetoProps = (state) => ({
     name:state.home.name
});

const mapActionCreators = {
    setName
};



export default connect(mapStatetoProps, mapActionCreators)(Home);