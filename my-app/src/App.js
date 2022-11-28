import React from 'react';
import Container from './Container';
import { ClickCounter } from './ClickCounter';
import Counter from './Counter';


export class App extends React.Component {
  render() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <ClickCounter />
          <Counter />
        </Container>
      </div>
    )
  }
}