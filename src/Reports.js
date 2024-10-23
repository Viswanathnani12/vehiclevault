import React from "react";
import './App.css';
import './Dashboard.css';
import './Reports.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './bootsrap.css';
import { useState } from 'react';
import { Button } from "react-bootstrap";
import {Form} from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useRef } from "react";
import { Link } from "react-router-dom";
import './Flip.css';
import ReactCardFlip from "react-card-flip";
function Reports(){
    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);
    const dropdown = () => {
        myRef1.current.style.display = 'none';
        myRef2.current.style.display = 'block';
        myRef3.current.style.display = 'block';
    };
    const close = () => {
        myRef1.current.style.display = 'block';
        myRef2.current.style.display = 'none';
        myRef3.current.style.display = 'none';
    };


//     const handleButtonClick = (e) => {
//         e.preventDefault();
//         divRef.current.style.display = divRef.current.style.display === "none" ? "flex" : "none";
//     };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Example condition: show the div if the input value is "yes"
    percentageoverall=100;
  };
    let percentageoverall = 90;
    let peraec= 0;
    const peracoe= 0;
    const peracet= 0;
    return(
        <>
            <div className="div1">
                <div className='sidebar'>
                    <div className='sp'></div>
                    <h3 className='link'>Vehicle Vault</h3>
                    <Link to="/dashboard" className="und"><p className='lk'>&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk'>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk'>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <Link to="/" className="und"><p className='lk'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></Link>
                </div>
                <div className='body'>
                    <div className="header">
                        <h3 className="head"><div className="menu" ref={myRef1} id="dd" onClick={dropdown}>☰&nbsp;&nbsp;</div><div className="vvt">Vehicle Vault</div><div className="dsh">Reports</div></h3>
                        <p className="head"><div className="close" ref={myRef2} onClick={close}>✖&nbsp;&nbsp;</div></p>
                    </div>
                    <div ref={myRef3} className="down">
                        <div className='scroll'>
                    <Link to="/dashboard" className="und"><p className='lk1'>&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk1'>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk1'>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk1' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <Link to="/" className="und"><p className='lk1'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></Link>
                        </div>
                    </div>
                    <div className="box">
                        <br/>
                        <br/><br/>
            <center>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 inp">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="form.Select">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" style={{width:"50%"}}/>    
                        </Form.Group>
                        <br/>
                        <Form.Label>Select College</Form.Label>
                        <Form.Control as="select" placeholder="Select College" style={{width:"50%"}}>
                            <option value="AEC">AEC</option>
                            <option value="ACOE">ACOE</option>
                            <option value="ACET">ACET</option>
                        </Form.Control>
                        <br/>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>Get Report</Button>
                    </Form>
                </div>
            </div>
            </center>
            <br/>
            <div className="row pies">
            <div className="col-md-2">
            <CircularProgressbar value={percentageoverall} text={`${percentageoverall}%`} className="bar"/>
            <br/>
            <br/>
            <h5>Overall Passes</h5>
            </div>
            <div className="col-md-2">
            <CircularProgressbar value={peraec} text={`${peraec}%`} />
            <br/>
            <br/>
            <h5>Two Wheelers</h5>
            </div>
            <div className="col-md-2">
            <CircularProgressbar value={peracoe} text={`${peracoe}%`} />
            <br/>
            <br/>
            <h5>Three Wheelers</h5>
            </div>
            <div className="col-md-2 ">
            <CircularProgressbar value={peracet} text={`${peracet}%`} />
            <br/>
            <br/>
            <h5>Four Wheelers</h5>
            </div>
           </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Reports;






// import React from "react";


// function Report(){
    
//     return(
//         <>
//         <br/>
//         <br/>
            
//         </>
//     )
// }
// export default Report;