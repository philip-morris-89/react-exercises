import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <div>
        { this.props.name && <h1>Hello, {this.props.name}</h1>}
        { !this.props.name && <h1>Hello, World!</h1>}
      </div>
    )
  }
}

export default Hello;