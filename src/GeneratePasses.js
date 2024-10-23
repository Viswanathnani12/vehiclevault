import React from "react";
import './App.css';
import './Dashboard.css';
import './bootsrap.css';
import './GeneratePasses.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { useRef } from "react";
import { Link } from "react-router-dom";
function Dashboard(){
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
    
    return(
        <>
            <div className="div1">
                <div className='sidebar'>
                    <div className='sp'></div>
                    <h3 className='link'>Vehicle Vault</h3>
                    <Link to="/dashboard" className="und"><p className='lk'>&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk'>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk'>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <Link to="/" className="und"><p className='lk'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></Link>
                </div>
                <div className='body'>
                    <div className="header">
                        <h3 className="head"><div className="menu" ref={myRef1} id="dd" onClick={dropdown}>☰&nbsp;&nbsp;</div><div className="vvt">Vehicle Vault</div><div className="dsh">Generate Passes</div></h3>
                        <p className="head"><div className="close" ref={myRef2} onClick={close}>✖&nbsp;&nbsp;</div></p>
                    </div>
                    <div ref={myRef3} className="down">
                        <div className='scroll'>
                    <Link to="/dashboard" className="und"><p className='lk1'>&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk1'>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk1' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <Link to="/" className="und"><p className='lk1'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></Link>
                        </div>
                    </div>
                    <div className="box">
                    <Container>
      <Form>
        <Form.Group controlId="form.Name" id="k1" className="k2">
            <Form.Label><b>Name</b></Form.Label>
            <Form.Control type="text" placeholder="Enter name" id="inp"/>
        </Form.Group>
        <Form.Group controlId="form.Number" id="k1">
            <Form.Label><b>Phone Number</b></Form.Label>
            <Form.Control type="text" placeholder="94********" id="inp"/>
        </Form.Group>
        <Form.Group controlId="form.Email" id="k1">
            <Form.Label><b>Email address</b></Form.Label>
            <Form.Control type="email" placeholder="name@example.com" id="inp"/>
        </Form.Group>
        <Form.Group controlId="form.Date" id="k1">
                <Form.Label><b>Select Date</b></Form.Label>
                <Form.Control type="date" placeholder="Select Date" id="inp"/>    
        </Form.Group>
        <Form.Group controlId="form.Model" id="k1">
            <Form.Label><b>Vehicle Type</b></Form.Label><br/>
            <select id="inp" className="slt">
                <option>&nbsp;Select Vehicle Type</option>
                <option value={"2 Wheeler"}>2 Wheeler</option>
                <option value={"3 Wheeler"}>3 Wheeler</option>
                <option value={"4 Wheeler"}>4 Wheeler</option>
            </select>
        </Form.Group>
        <Form.Group controlId="form.Model" id="k1">
            <Form.Label><b>Vehicle Model</b></Form.Label>
            <Form.Control type="text" placeholder="Model" id="inp"/>
        </Form.Group>
        <Form.Group controlId="form.Vno" id="k1">
            <Form.Label><b>Vehicle Number</b></Form.Label>
            <Form.Control type="text" placeholder="Enter Vehicle Number" id="inp"/>
        </Form.Group>
        <Form.Group controlId="form.Model" id="k1">
            <Form.Label><b>Select College</b></Form.Label><br/>
            <select id="inp" className="slt">
                <option>&nbsp;Select College</option>
                <option value={"AEC"}>2 Wheeler</option>
                <option value={"ACOE"}>3 Wheeler</option>
                <option value={"ACET"}>4 Wheeler</option>
            </select>
        </Form.Group>
        <br/>
        <center><Button id="genbtn">Generate Pass</Button></center>
      </Form>
    </Container> 
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;