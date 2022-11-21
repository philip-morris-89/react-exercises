import React from 'react';
import Hello from './Hello';
import Age from './Age';

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