import React, { useState } from 'react'
import ToDoForm from '../ToDoForm/ToDoForm';
import ToDoList from '../ToDoList/ToDoList'

const ToDoContainer = () => {
    const [todos, setTodos] = useState([])
    const getTodo = (newTodo) => {
        setTodos([...todos, {id: Date.now(), text: newTodo}])
    }
    const removeTodo = (id) => {
        let newList = todos.filter(todo => todo.id !== id)
        setTodos(newList)
      }
    return (
        <div>
            <ToDoForm getTodo={(newTodo) => getTodo(newTodo)}/>
            <ToDoList removeTodo={(id) => removeTodo(id)} todos={todos}/>
        </div>
    )
}

export default ToDoContainer