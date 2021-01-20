import React, { useReducer, useState } from 'react'
import { clearCompleted, CLEAR_COMPLETED } from '../actions'
import { initialState, reducer } from '../reducers/reducer'
import Todo from "./Todo"

function TodoList(props) {
    const todos = props.todos.todos
    const handleToggleCompleted = props.handleToggleCompleted
    const handleClearCompleted = props.handleClearCompleted

   // const [state, dispatch] = useReducer(reducer, todos)

    const handleClear = () => {
        handleClearCompleted()
    }

    return (
<div className='todo-list container'>
    <h1>To-Do List</h1>
    {todos.map( todo => {
        return (<Todo handleToggleCompleted={handleToggleCompleted} key={todo.id} todo={todo} />)
    })}
    <button onClick = {handleClear} >clear completed</button>
</div>
    )
} 

export default TodoList;