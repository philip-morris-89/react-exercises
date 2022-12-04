import { Link, Route, Routes } from "react-router-dom"
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import { MyForm } from './MyForm'
import { Catalogue } from './Catalogue'
import { Product } from './Product'
import { ShowGithubUser } from './ShowGithubUser'
import Container from "./Container"
import { NotFound } from "./NotFound"
import { GithubUserList } from "./GithubUserList"
import { GithubUser } from "./GithubUser"

export function App() {
  return (
    <Container title={<h1>My amazing app</h1>}>
      <Link to="/" className="navLink">Home</Link>
      <Link to="/login" className="navLink">Login</Link>
      <Link to="/counter" className="navLink">Counter</Link>
      <Link to="/products" className="navLink">Products</Link>
      <Link to="/users" className="navLink">Users</Link>
      <Link to="/not/found" className="navLink">Not found</Link>
      <br/>
      <br/>
      <Routes>
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route index element={<Welcome />} />
        <Route path="/:name" element={<Welcome />} />
        <Route path="/login" element={<MyForm />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/products" element={<Catalogue />}>
          <Route index element={<p>Please select a product</p>} />
          <Route path=":id" element={<Product />} />
        </Route>

        <Route path="/users" element={<GithubUser username="" />}/>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  )
}