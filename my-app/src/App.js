import Container from './Container';
import { HookCounter } from './HookCounter';


export function App() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <HookCounter initialValue={50} />
        </Container>
      </div>
    )
}