import React from "react"

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  constructor(props) {
    super(props)
    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>
  }
}

export default Clock;