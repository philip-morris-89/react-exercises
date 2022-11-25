import React from 'react';
import Container from './Container';
import { Welcome } from './Welcome';
import { Sum } from './Sum';
import { ClickCounter } from './ClickCounter';
import { Login } from './Login';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <Welcome name="Filippo" />
          <Login />
          <Sum />
          <ClickCounter incrementBy={100} />
        </Container>
      </div>
    )
  }
}