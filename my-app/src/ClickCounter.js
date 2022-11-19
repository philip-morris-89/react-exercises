import React from "react";

class ClickCounter extends React.Component {
  state = {
    count: 0,
  }

  handleCounterIncrement = () => {
    this.setState((state) => {
      return {
        count: state.count + (this.props.incrementBy ?? 1),
      }
    })
  }

  render() {
    return(
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleCounterIncrement}>Increment</button>
      </div>
    )
  }
}

export default ClickCounter;