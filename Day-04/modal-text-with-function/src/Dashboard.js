import React, { useState } from "react";
import Modal from "./Modal";
import "./assets/css/custom.css";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('')

  const showModal = (e) => {
    setShow(true);
    setValue(e.target.value)
    
    
  };
  const hideModal = () => {
    setShow(false);
  };


  return (
    <div>
      <div className="main">
        <h1>Let's Create a Modal!!!</h1>
        <h3>Click Buttons Below</h3>
        <div className="modal-tb-area">
          
          <button id="top-modal" value='top' onClick={showModal}>
            Top Modal
          </button>
          <button id="bottom-modal" value='bottom' onClick={showModal}>
            Bottom Modal
          </button>
        </div>
        <div className="modal-rl-area">
        <button id="left-modal" value='left' onClick={showModal}>
            Left Modal
          </button>
          <button id="right-modal" value='right' onClick={showModal}>
            Right Modal
          </button>
       
        </div>
        <Modal show={show} value={value} handleClose={hideModal} />
      </div>
    </div>
  );
};

export default Dashboard;
