import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import "./Home.css";
import Modal from "react-modal";
function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="home">
      <div className="row hdr1">
        <div className="col-md-3 name">
          <h1>Vehicle Vault</h1>
        </div>
        <div className="col-md-7"></div>
        <div className="col-md-1"></div>
        <div className="col-md-1 login">
          <Link to="/signin">
            <button id="log">Login</button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 sgn">
          <div className="ts">
            <br />
            <h1 style={{ color: "black" }}>Enter Vehicle Id</h1>
            <br />
            <input type="text" id="vno" placeholder="Vehicle ID"></input>
            <br />
            <br />
            <Link to="/details">
              <button id="bt">Get Details</button>
            </Link>
            <br />
            <br />
            <h5 style={{ color: "black" }}>OR</h5>
            <br />
            <button id="bt" onClick={handleOpenModal}>
              Click here to Scan
            </button>
            <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
              <div>
                <video id="camera" width="640" height="480"></video>
              </div>
            </Modal>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="col-md-3"></div>
        {/* <div className="col-md-3"></div>
                <div className="col-md-6 ts">
                    <br/>
                    <h1>Enter Vehicle Id</h1>          
                    <br/>
                    <input type="text" id="vno"></input>
                    <br/>
                    <br/>
                    <button id="bt">Find</button>
                    <br/><br/>
                    <h1>OR</h1>
                    <br/>
                    <button id="bt">Click here to Scan</button>
                    <br/><br/><br/><br/><br/> 
                </div> */}
      </div>
    </div>
  );
}
export default Home;
