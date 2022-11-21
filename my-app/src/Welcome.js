import React from 'react';
import Hello from './Hello';

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <Hello name={this.props.name} />
      </div>
    )
  }
}

export default Welcome