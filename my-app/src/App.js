import React from 'react';
import Container from './Container';
import { Counter } from './Counter';
import ToDoList from './ToDoList';

export class App extends React.Component {

  createTodo = (toDoItems, removeItem) => {

    console.log(toDoItems, removeItem);

    return toDoItems.map((item, index) => 
      <li key={index}>
        <label>
          <input type="checkbox" checked={item.done} onChange={() => this.toggleDone(item)} />
          {item.action}
        </label>
        <button onClick={() => removeItem(index)}>Remove</button>
      </li>
    )
  }

  render() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <Counter />
          <ToDoList render={this.createTodo} />
        </Container>
      </div>
    )
  }
}