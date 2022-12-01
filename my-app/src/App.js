import { Route, Routes } from "react-router-dom"
import { Welcome } from './Welcome'
import Container from "./Container"

export function App() {
  return (
    <Container title={<h1>My amazing app</h1>}>
      <Routes>
        <Route path="/" element={<Welcome name="Filippo" />} />
      </Routes>
    </Container>
  )
}