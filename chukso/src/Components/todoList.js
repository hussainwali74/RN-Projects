import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'


const TodoList = ({todosprops,toggleTodo }) => (
    <View>
        {todosprops.map(todo => 
            <TouchableOpacity
                style={{flexDirection:'row'}}
                key={todo.id} 
                onPress={()=> {toggleTodo(todo.id)}} >
                <Text> {todo.completed}</Text>
                <Text style={{fontSize:24, paddingHorizontal:10,
                    textDecorationLine:todo.completed ? 'line-through': 'none'
                    }}>{todo.text}</Text>
                </TouchableOpacity>
            )}
    </View>
)
export default TodoList;