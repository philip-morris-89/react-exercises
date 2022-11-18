import React from 'react';

class Age extends React.Component {
  render() {
    return (
      <div>
        {!!this.props.age && <h2>Your age is: {this.props.age}</h2>}
      </div>
    )
  }
}

export default Age;