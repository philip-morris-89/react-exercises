import { Link, Route, Routes } from "react-router-dom"
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import { MyForm } from './MyForm'
import Container from "./Container"

export function App() {
  return (
    <Container title={<h1>My amazing app</h1>}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/counter">Counter</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Filippo" />} />
        <Route path="/login" element={<MyForm />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Container>
  )
}