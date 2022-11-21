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

  clearList = (event) => {
    this.setState({
      toDoItems: []
    })
  }

  removeItem = (todo) => {
    console.log(todo);
    const arr = this.state.toDoItems;
    arr.splice(todo, 1);
    this.setState({
      arr
    })
  }

  render() {
    return (
      <div>
        <h1>To do list</h1>
        <div>
          <input placeholder="Add item" value={this.state.newToDo} onChange={this.updateValue} />
          <button onClick={this.addItem}>Add</button>
          <button onClick={this.clearList}>Clear list</button>
        </div>
        <ul>
          {this.state.toDoItems.map((item, index) =>
            <li key={index}>
              <label>
                <input type="checkbox" checked={item.done} onChange={() => this.toggleDone(item)} />
                {item.action}
              </label>
              <button onClick={() => this.removeItem(index)}>Remove</button>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default ToDoList;