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
          <div>
            <label htmlFor="input1">No. Of persons in your house:</label>
            <input
              style={styles.input}
              name="input1"
              placeholder="Enter your answer"
              className="form__input"
              value={this.state.username}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="input1">Electricity consumption in kwH:</label>
            <input
              style={styles.input}
              name="input1"
              placeholder="Enter your answer"
              className="form__input"
              value={this.state.username}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label className="form__label" htmlFor="input1">
              LPG consumption in litres:
            </label>
            <input
              style={styles.input}
              name="input1"
              placeholder="Enter your answer"
              className="form__input"
              value={this.state.username}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <label className="form__label" htmlFor="input1">
              Wood in tonnes:
            </label>
            <input
              style={styles.input}
              name="input1"
              placeholder="Enter your answer"
              className="form__input"
              value={this.state.username}
              onChange={this.onChangeHandler}
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className="submit__btn"
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
    height: "80vh",
    width: "80vw",
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
    margin: "1rem auto 1rem 1rem",
    backgroundColor: "white",
    color: "rgb(20, 160, 20)",
    border: "1px currentColor solid",
    padding: "0.5rem 0.4rem",
    borderRadius: "5px"
  },
  button: {
    all: "unset",
    backgroundColor: "white",
    color: "rgb(20, 160, 20)",
    marginTop: "1rem",
    padding: "0.3rem 0.6rem",
    border: "1px currentColor solid",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default LoginForm;
