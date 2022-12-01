import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1>Sorry, Page not found...</h1>
      <Link to="/">Go back to homepage</Link>
    </div>
  )
}