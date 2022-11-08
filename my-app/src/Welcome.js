import React from 'react';
import Hello from './Hello';
import Age from './Age';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Hello name={this.props.name} />
        <Age age={this.props.age} />
      </div>
    )
  }
}

export default Welcome