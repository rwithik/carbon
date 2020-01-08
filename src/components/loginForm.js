import React, { Component } from "react";

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
        <form className="login__form" style={styles.form}>
          <h2>Login</h2>
          <input
            style={styles.input}
            name="username"
            placeholder="Enter your username"
            className="form__username"
            value={this.state.username}
            onChange={this.onChangeHandler}
          />
          <input
            style={styles.input}
            name="password"
            placeholder="Enter your password"
            className="form__password"
            type="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
          />
          <input
            type="submit"
            value="Login"
            className="login__btn"
            style={styles.button}
            onSubmit={this.onSubmit}
          />
        </form>
      </div>
    );
  }
}

const styles = {
  form: {
    boxSizing: "border-box",
    height: "50vh",
    width: "50vw",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    border: "2px rgb(20, 160, 20) solid",
    boxShadow: "0 0 10px rgba(20, 160, 20, 0.5)"
  },
  input: {
    margin: "1rem 2rem",
    backgroundColor: "white",
    color: "rgb(20, 160, 20)",
    border: "1px currentColor solid",
    padding: "0.5rem 0.3rem",
    borderRadius: "5px"
  },
  button: {
    all: "unset",
    backgroundColor: "white",
    color: "rgb(20, 160, 20)",
    padding: "0.3rem 0.6rem",
    border: "1px currentColor solid",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default LoginForm;
