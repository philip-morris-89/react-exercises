import React from "react";

class ClickTracker extends React.Component {

  state = {
    title: 'Click any buttons',
  }

  handleButtonClick = (event) => {
    console.log(
      event.target.name,
      event.timestamp,
      event.button
    )
    this.setState((state) => {
      return {
        title: event.target.name,
      }
    })
  }

  render() {
      return(
        <div>
          <h1>{this.state.title}</h1>
          <button name="Apple" onClick={this.handleButtonClick}>Apple</button>
          <button name="Orange" onClick={this.handleButtonClick}>Orange</button>
          <button name="Lemon" onClick={this.handleButtonClick}>Lemon</button>
        </div>
      )
    }
}

export default ClickTracker;