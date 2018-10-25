import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AddTodo from './Containers/AddTodo';
import VisibleTodos from './Containers/visibleTodos';

export default class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <View>
            <VisibleTodos />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})