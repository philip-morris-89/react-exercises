import React from 'react';
import Container from './Container';
import { Welcome } from './Welcome';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <Welcome name="Filippo" />
        </Container>
      </div>
    )
  }
}