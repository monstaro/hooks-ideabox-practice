import React from 'react';

const ToDoList = (props) => {
    return (
 <ul>
        {props.todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => props.removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    )
}

export default ToDoList;