import React from "react";

class MyForm extends React.Component {
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

  handleButtonReset = (event) => {
    this.setState({
      username: '',
      password: '',
      remember: false,
    })
  }

  handleButtonPrefill = (event) => {
    this.setState({
      username: 'Filippo',
      password: 'hello123',
      remember: true
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }



  render() {
    return (
      <div>
        <h1>My Form:</h1>
        <div>
          <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          <input type="checkbox" name="remember" checked={this.state.remember} onChange={this.handleInputChange}/>
        </div>
        <div>
          <button onClick={this.handleButtonReset}>Reset form</button>
          <button onClick={this.handleButtonPrefill}>Prefill form</button>
        </div>
      </div>
    )
  }
}

export default MyForm;