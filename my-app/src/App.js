import React from 'react';
import Container from './Container';
import { ClickCounter } from './ClickCounter';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <ClickCounter />
        </Container>
      </div>
    )
  }
}