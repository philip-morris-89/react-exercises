import React from 'react';
import Container from './Container';
import {Counter} from './Counter';


export class App extends React.Component {
  render() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <Counter />
        </Container>
      </div>
    )
  }
}