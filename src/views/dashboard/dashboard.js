import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar";

import track from "../../public/images/track.png";
import measure from "../../public/images/measure.png";
import mitigation from "../../public/images/mitigation.png";

import "./dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <NavBar />
        <div className="dashboard__choices">
          <Link to="/measure">
            <div className="dashboard__option">
              <img
                className="option__image"
                src={measure}
                alt="Measure you carbon footprint"
              />
              <p className="option__text">Measure your carbon footprint</p>
            </div>
          </Link>

          <Link to="/explore">
            <div className="dashboard__option">
              <img
                className="option__image"
                src={mitigation}
                alt="Learn more about carbon mitigation"
              />
              <p className="option__text">Learn more about carbon mitigation</p>
            </div>
          </Link>

          <Link to="/track">
            <div className="dashboard__option">
              <img
                className="option__image"
                src={track}
                alt="Track your progress"
              />
              <p className="option__text">Track your progress</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
