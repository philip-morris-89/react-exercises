import {useState} from 'react';
import Container from './Container';
import { GithubUser } from './GithubUser';


export function App() {
  const [username, setUsername] = useState('')

    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <h1>Fetch the data of Github user</h1>
          <input placeholder='Enter Github user' value={username} onChange={(e) => setUsername(e.target.value)} />
          <br/>
          <br/>
          <GithubUser username={username} />
        </Container>
      </div>
    )
}