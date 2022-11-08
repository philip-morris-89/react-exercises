import React from 'react';
import Welcome from './Welcome';

const userName = 'Filippo';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={userName} age={33} />
      </div>
    )
  }
}