import React, {useState} from "react";
import { GithubUser } from "./GithubUser";

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

  return (
    <div>
      <form onSubmit={addUser}>
        <input name="users" value={data.input} placeholder="Add user" onChange={updateValue} />
        <button onClick={addUser}>Add user</button>
      </form>
      <ul>
        {data.users.map((user, index) =>
          <li key={index}>
            <GithubUser username={user} />
          </li>
        )}
      </ul>
    </div>
  )
}