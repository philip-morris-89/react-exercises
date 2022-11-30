import React from 'react';
import Container from './Container';
import { HookCounter } from './HookCounter';


export class App extends React.Component {
  render() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <HookCounter />
        </Container>
      </div>
    )
  }
}