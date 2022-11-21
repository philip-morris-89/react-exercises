import React from "react";

class MyTodos extends React.Component {
  render() {
    const todos = [
      { id: 1, title: 'Shower', completed: true},
      { id: 2, title: 'Eat breakfast', completed: true},
      { id: 3, title: 'Do shopping', completed: false},
      { id: 4, title: 'Work out', completed: false},
    ]

    return (
      <div>
        <h1>To do:</h1>
        <ul>
          {todos.map(todo =>
            <li key={todo.id}>
              {todo.title}
              {todo.completed && <span> (COMPLETED)</span>}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default MyTodos;