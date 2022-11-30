import React from 'react';
import Container from './Container';
import { GithubUserList } from './GithubUserList';


export class App extends React.Component {
  render() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <GithubUserList />
        </Container>
      </div>
    )
  }
}