import React from 'react';
import Container from './Container';
import { MyForm } from './MyForm';


export class App extends React.Component {
  render() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <MyForm />
        </Container>
      </div>
    )
  }
}