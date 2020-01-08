import React, { Component } from "react";

import bicycle from "../../public/images/bicycle.png";
import sharing from "../../public/images/sharing.png";

class Mitigation extends Component {
  render() {
    return (
      <div className="mitigation">
        <div>
          <p>
            Please choose a particular month for entering carbon mitigation
            measures
          </p>
          <div>Month chooser.</div>
        </div>
        <div className="mitigation__choices">
          <div className="mitigation__option">
            <img className="option__image" src={bicycle} alt="" />
            /**<p className="option__text">Electronics</p>**/
          </div>
          <div className="mitigation__option">
            <img className="option__image" src={sharing} alt="" />
            /**<p className="option__text">Electronics</p>**/
          </div>
          <div className="mitigation__option">
            <img className="option__image" src={bicycle} alt="" />
            /**<p className="option__text">Electronics</p>**/
          </div>
        </div>
      </div>
    );
  }
}

export default Mitigation;
