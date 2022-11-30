import React, { useState } from "react";

export function GithubUserListForm(props) {
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,

      // I think I should add useEffect() here to make api call and display github username if there are not errors
    })

    setInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter username"
        value={input}
        onChange={handleChange}
      />
      <button>Add user</button>
    </form>
  )
}