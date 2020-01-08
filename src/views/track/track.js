import React, { Component } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";

import Modal from "../../components/modal";
import NavBar from "../../components/navbar";
import "./track.css";

class Track extends Component {
  state = {
    activeOption: null,
    showModal: false
  };

  header = "Carbon Footprint";
  content =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  // content = {
  //   "footprint": <Piechart
  // }

  showModal = target => {
    console.log("show");
    this.setState({
      showModal: true,
      activeOption: target
    });
  };

  hideModal = () => {
    console.log("hide");
    this.setState({
      activeOption: null,
      showModal: false
    });
  };

  onClickHandler = target => {
    this.showModal(target);
  };

  render() {
    return (
      <div className="track">
        <NavBar />
        <div>
          <p>
            Please choose a particular month for entering carbon mitigation
            measures
          </p>
          <select class="select-css">
            <option>Select Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>
        <div className="track__choices">
          <div
            className="track__option"
            onClick={() => {
              this.onClickHandler("footprint");
            }}
          >
            Carbon Footprint
          </div>
          <div
            className="track__option"
            onClick={() => {
              this.onClickHandler("mitigated");
            }}
          >
            Carbon Mitigated
          </div>
          <div
            className="track__option"
            onClick={() => {
              this.onClickHandler("chart");
            }}
          >
            Competitive Chart
          </div>
        </div>
        <Modal
          show={this.state.showModal}
          close={this.hideModal}
          header={this.header}
          content={this.content}
        />
      </div>
    );
  }
}

export default Track;
