import React, { useState } from "react";
import { GithubUser } from "./YoutubeTodo";
import { GithubUserListForm } from "./YoutubeToDoForm";

export function GithubUserList() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    // This piece of code below is only for formatting the result of the input if the user types in big spacing
    // or tries to break the formatting of the text on the screen
    if (!user.text || /^\s*$/.test(user.text)) {
      return
    }

    const newUsers = [user, ...users];
    setUsers(newUsers);

    console.log(user, ...users);
  }

  return (
    <div>
      <h1>Github users</h1>
      <GithubUserListForm onSubmit={addUser} />
      <ul>
        <GithubUser users={users} />
      </ul>
    </div>
  )
}