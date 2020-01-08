// Navbar/Topbar

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../public/images/green_tea.jpg";

class NavBar extends Component {
  state = {
    username: "User"
  };
  render() {
    return (
      <nav className="navbar" style={navStyle}>
        <Link to="/">
          <img
            className="navbar__logo"
            src={logo}
            alt="logo"
            style={logoStyle}
          />
        </Link>
        <div className="navbar__user" style={navTextStyle}>
          Hello {this.state.username}
        </div>
      </nav>
    );
  }
}

const navHeight = "10vh";

const navStyle = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  maxHeight: navHeight,
  padding: "0 1rem 0.5rem",
  backgroundColor: "#e8e8e8"
};

const logoStyle = {
  maxHeight: navHeight
};

const navTextStyle = {
  fontSize: "1.5em",
  color: "#3fa43f"
};

export default NavBar;
