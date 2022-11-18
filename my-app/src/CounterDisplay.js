import React from "react";

class CounterDisplay extends React.Component {
  render() {
    return <h1>{this.props.counter}</h1>
  }
}

export default CounterDisplay;