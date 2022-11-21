import React from "react";

class ToDoList extends React.Component {
  state = {
    toDoItems : [
      {action: 'Shower', done: true},
      {action: 'Eat breakfast', done: false},
      {action: 'Do shopping', done: false},
    ],
    newToDo: '',
  }

  updateValue = (event) => {
    const value = event.target.value;
    this.setState({
      newToDo: value,
    })
  }

  addItem = (event) => {
    this.setState({
      toDoItems: [
        ...this.state.toDoItems,
        {action: this.state.newToDo, done: false},
      ],
      newToDo: '',
    })
  }

  toggleDone = (todo) => {
    this.setState({
      toDoItems: this.state.toDoItems.map( (item) => 
        item.action === todo.action ? {...item, done: !item.done } : item
      ),
    })
  }

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <div>
          <input placeholder="Add item" value={this.state.newToDo} onChange={this.updateValue} />
          <button onClick={this.addItem}>Add</button>
        </div>
        <ul>
          {this.state.toDoItems.map((item, index) =>
            <li key={index}>
              <label>
                <input type="checkbox" checked={item.done} onChange={() => this.toggleDone(item)} />
                {item.action}
              </label>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default ToDoList;