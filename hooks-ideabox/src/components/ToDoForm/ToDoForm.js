import React, { useState } from 'react';


const ToDoForm = (props) => {
  const [newTodo, setNewTodo] = useState('')
  const handleChange = (e) => {
    e.preventDefault()
    setNewTodo(e.target.value)
  } 

  const handleNewTodo = (e) => {
    e.preventDefault()
    e.target.parentNode.firstChild.value = ''
    props.getTodo(newTodo)
  }

    return (
      <div>
          <input className="todo-input"
                 placeholder="Enter Your Goal Here"
                 onChange={handleChange}
                 >
          </input>
          <button onClick={handleNewTodo}>Submit</button>
      </div>  
    )
}

export default ToDoForm;