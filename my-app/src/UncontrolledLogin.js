import React, { createRef } from "react";

class UncontrolledLogin extends React.Component {

  _formRef = createRef();

  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember
    })
  }

  handleFormPrefill = () => {
    this._formRef.current.elements.username.value = 'Jimmy';
    this._formRef.current.elements.password.value = 'hello123';
    this._formRef.current.elements.remember.checked = true;
  }

  componentDidMount () {
    this._formRef.current.elements.username.focus();
  }

  render() {
    return (
      <div>
        <h1>Uncontrolled Login</h1>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input name="username" type="text" placeholder="Username" onChange={this.handleInputChange} />
          <input name="password" type="password" placeholder="Password" />
          <input name="remember" type="checkbox" />

          <button type="submit">Login</button>
          <button type="reset">Reset</button>
          <button type="button" onClick={this.handleFormPrefill}>Prefill form</button>
        </form>
      </div>
    )
  }
}

export default UncontrolledLogin;