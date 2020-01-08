import React, { Component } from "react";

class Track extends Component {
  render() {
    return (
      <div className="track">
        <div>
          <p>
            Please choose a particular month for entering carbon mitigation
            measures
          </p>
          <div>Month chooser.</div>
        </div>
        <div className="track__choices">
          <div className="track__option">Carbon Footprint</div>
          <div className="track__option">Carbon Mitigated</div>
          <div className="track__option">Competitive Chart</div>
        </div>
      </div>
    );
  }
}

export default Track;
