import React from "react";
import Welcome from "./Welcome";

class InteractiveWelcome extends React.Component {

  state = {
    username: 'Filippo',
  }

  handleInputChange = (event) => {
    this.setState({
      username: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
        <Welcome name={this.state.username} />
      </div>
    )
  }
}

export default InteractiveWelcome;