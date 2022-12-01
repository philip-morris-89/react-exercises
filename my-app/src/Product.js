import { Link, useParams } from "react-router-dom"

export function Product() {
  const { id } = useParams()
  return (
    <div>
      <h3>Product {id}</h3>
      <Link to="/products">Back</Link>
    </div>
  )
}