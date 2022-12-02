import React, {useState} from "react"
import { Link, Outlet } from "react-router-dom"
import { GithubUser } from "./GithubUser"

export function GithubUserList() {
  const [data, setData] = useState({
    users: [],
    input: '',
  })

  function updateValue(event) {
    setData((data) => {
      return {
        input: event.target.value,
        users: [...data.users]
      }
    })
  }

  function addUser(event) {
    event.preventDefault();
    setData((data) => {
      return {
        input: '',
        users: [data.input, ...data.users]
      }
    })
    console.log(data)
  }

  const user1 = "Filippo";
  const user2 = "Andrea";

  return (
    <div>
      <form onSubmit={addUser}>
        <input name="users" value={data.input} placeholder="Add user" onChange={updateValue} />
        <button onClick={addUser}>Add user</button>
      </form>
      <ul>
        {data.users.map((user, index) =>
          <li key={index}>
            <Link to={`/users/${user}`}>{user}</Link>
          </li>
        )}
      </ul>

      <Outlet />
    </div>
  
  )
}