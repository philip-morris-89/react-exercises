import React from "react";

export function GithubUser({ users }) {

  return users.map((user, index) => (
    <li key={user.id}>
      {user.text}
    </li>
  ))
}