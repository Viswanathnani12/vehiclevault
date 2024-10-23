import React from "react";
import './App.css';
import './Dashboard.css';
import './Passes.css';
import './bootsrap.css';
import './GeneratePasses.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Button,ButtonGroup,Table } from 'react-bootstrap';
import { useState } from 'react';
import { useRef } from "react";
import { Link } from "react-router-dom";
function Passes(){
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
                    <Link to="/passes" className="und"><p className='lk' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk'>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk'>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <Link to="/" className="und"><p className='lk'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></Link>
                </div>
                <div className='body'>
                    <div className="header">
                        <h3 className="head"><div className="menu" ref={myRef1} id="dd" onClick={dropdown}>☰&nbsp;&nbsp;</div><div className="vvt">Vehicle Vault</div><div className="dsh">Passes</div></h3>
                        <p className="head"><div className="close" ref={myRef2} onClick={close}>✖&nbsp;&nbsp;</div></p>
                    </div>
                    <div ref={myRef3} className="down">
                        <div className='scroll'>
                    <Link to="/dashboard" className="und"><p className='lk1' >&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk1' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk1'>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <Link to="/" className="und"><p className='lk1'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></Link>
                        </div>
                    </div>
                    <div className="box">
                    <div className="row" id="la1">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <ButtonGroup className="mb-8 btns">
                        <Button >Two Wheelers</Button>
                        <Button>Three Wheelers</Button>
                        <Button>Four Wheelers</Button>
                    </ButtonGroup>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 tb">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Vehicle ID</th>
                                <th>Vehicle Model</th>
                                <th>Pass Expiry Date</th>
                                </tr>
                      </thead>
                        <tbody>
                            
                        </tbody>
                    </Table>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Passes;