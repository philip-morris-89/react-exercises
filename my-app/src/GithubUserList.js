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

  const user1 = "Filippo____jsshshshss____ss";
  const user2 = "Andrea";

  return (
    <div>
      {/* <form onSubmit={addUser}>
        <input name="users" value={data.input} placeholder="Add user" onChange={updateValue} />
        <button onClick={addUser}>Add user</button>
      </form> */}
      <h2>Users:</h2>
      <ul>
        <li>
          <Link to={`/users/${user1}`}>{user1}</Link>
        </li>
        <li>
          <Link to={`/users/${user2}`}>{user2}</Link>
        </li>
      </ul>
      {/* <ul>
        {data.users.map((user, index) =>
          <li key={index}>
            <GithubUser username={user} />
          </li>
        )}
      </ul> */}

      <Outlet />
    </div>
  
  )
}