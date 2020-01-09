import React, { Component } from "react";
import "./login.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  onChangeHandler = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="login-container">
        <form className="login__form">
          <h2>Login</h2>
          <input
            name="username"
            placeholder="Enter your username"
            className="form__input"
            value={this.state.username}
            onChange={this.onChangeHandler}
          />
          <input
            name="password"
            placeholder="Enter your password"
            className="form__input"
            type="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
          />
          <input
            type="submit"
            value="Login"
            className="login__btn"
            onSubmit={this.onSubmit}
          />
        </form>
      </div>
    );
  }
}

export default LoginForm;
