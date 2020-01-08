import React, { Component } from "react";

import track from "../../public/track.png";
import mitigation from "../../public/mitigation.png";
import measure from "../../public/measure.png";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
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
    );
  }
}

export default Dashboard;
