import React, { useState } from "react";

export function Login() {

  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false,
    loginDisabled: true
  })

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: type === 'checkbox' ? checked : value,
        loginDisabled: (data.username && data.password) === '' ? true : false,
      }
    })
  }

  function onLogin(event) {
    event.preventDefault();
    setData({
      ...data,
    })
  }

  console.log(data);

  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <input onChange={handleInputChange} value={data.username} type="text" name="username" />
        <input onChange={handleInputChange} value={data.password} type="password" name="password" />
        <input onChange={handleInputChange} checked={data.remember} type="checkbox" name="remember" />
        <button onChange={handleInputChange} onClick={onLogin} disabled={data.loginDisabled} name="button">Login</button>
      </form>
    </div>
  )
}