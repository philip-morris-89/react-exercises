import React from 'react';

class Age extends React.Component {
  render() {
    return (
      <div>
        {this.props.age >= 18 && this.props.age <= 65 && <h2>Your are {this.props.age} years old</h2>}
      </div>
    )
  }
}

export default Age;