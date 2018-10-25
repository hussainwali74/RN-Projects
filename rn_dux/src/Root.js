import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Routes from './routes';
import createStore from './store/CreateStore';

export default class Root extends Component {

    renderApp(){
        const initialState = window.__INITIAL_STATE__;
        const store = createStore(initialState);
        return (
 
            <Routes store={store} />
        )
    }

    render() {
        return (
            this.renderApp()
        )
    }
}