import React from "react";

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    remember: false,
    loginDisabled: true,
    resetDisabled: true,
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;
    // const disabled = event.target.disabled;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
      // [name]: type === 'submit' ? disabled : value,
      loginDisabled: (this.state.username && this.state.password) === '' ? true : false,
      resetDisabled: value === '' ? true : false,
    })
  }

  onLogin = (event) => {
    this.setState({
      username: this.state.username,
      password: this.state.password,
      remember: this.state.remember,
    })
  }

  clearForm = (event) => {
    this.setState({
      username: '',
      password: '',
      remember: false,
    })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
          <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInputChange} />
          <button type="submit" name="button" disabled={this.state.loginDisabled} onChange={this.handleInputChange} onClick={this.onLogin}>Login</button>
          <button disabled={this.state.resetDisabled} onChange={this.handleInputChange} onClick={this.clearForm}>Reset</button>
        </form>
      </div>
    )
  }
}

export default Login;