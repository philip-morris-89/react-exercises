import Container from './Container';
import DisplayLanguage from './DisplayLanguage';


export function App() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <DisplayLanguage />
        </Container>
      </div>
    )
}