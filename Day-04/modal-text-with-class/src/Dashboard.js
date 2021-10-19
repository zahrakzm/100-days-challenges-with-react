import React, { Component } from "react";
import Modal from "./Modal";
import "./assets/css/custom.css";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      value:' '
    };
  }
  showModal = (e) => {
    this.setState({ show: true });
    this.setState({value: e.target.value})
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="main">
        <h1>Let's Create a Modal!!!</h1>
        <h3>Click Buttons Below</h3>
        <div className="modal-tb-area">
          <button id="top-modal" value='top' onClick={this.showModal}>
            Top Modal
          </button>
          <button id="bottom-modal" value='bottom' onClick={this.showModal}>
            Bottom Modal
          </button>
        </div>
        <div className="modal-rl-area">
        <button id="left-modal"  value='left' onClick={this.showModal}>
            Left Modal
          </button>
          <button id="right-modal" value='right' onClick={this.showModal}>
            Right Modal
          </button>
         
        </div>

        <Modal show={this.state.show}  value={this.state.value} handleClose={this.hideModal} />
      </div>
    );
  }
}
