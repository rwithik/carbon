import React, { Component } from "react";

import household from "../../public/images/household.png";
import car from "../../public/images/car.png";
import electronics from "../../public/images/electronics.png";
import flight from "../../public/images/flight.png";
import food from "../../public/images/food.png";
import transport from "../../public/images/transport.png";

class Measure extends Component {
  render() {
    return (
      <div className="measure">
        <div>
          <p>
            Please choose a particular month for entering carbon mitigation
            measures
          </p>
          <div>Month chooser.</div>
        </div>
        <div className="measure__choices">
          <div className="measure__option">
            <img className="option__image" src={household} alt="" />
            <p className="option__text">Household</p>
          </div>
          <div className="measure__option">
            <img className="option__image" src={car} alt="" />
            <p className="option__text">Car</p>
          </div>
          <div className="measure__option">
            <img className="option__image" src={electronics} alt="" />
            <p className="option__text">Electronics</p>
          </div>
          <div className="measure__option">
            <img className="option__image" src={flight} alt="" />
            <p className="option__text">Flight</p>
          </div>
          <div className="measure__option">
            <img className="option__image" src={food} alt="" />
            <p className="option__text">Food</p>
          </div>
          <div className="measure__option">
            <img className="option__image" src={transport} alt="" />
            <p className="option__text">Public Transport</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Measure;
