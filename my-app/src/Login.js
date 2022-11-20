import React from "react";

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    remember: false,
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
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
        </form>
      </div>
    )
  }
}

export default Login;