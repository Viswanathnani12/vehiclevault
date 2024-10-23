import React from "react";
import './App.css';
import './Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './bootsrap.css';
// import { useState } from 'react';
import { useRef } from "react";
import { Link } from "react-router-dom";
import './Flip.css';
// import ReactCardFlip from "react-card-flip";
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
                    <Link to="/dashboard" className="und"><p className='lk' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk'>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk'>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk'>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <Link to="/" className="und"><p className='lk'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></Link>
                </div>
                <div className='body'>
                    <div className="header">
                        <h3 className="head"><div className="menu" ref={myRef1} id="dd" onClick={dropdown}>☰&nbsp;&nbsp;</div><div className="vvt">Vehicle Vault</div><div className="dsh">Dashboard</div></h3>
                        <p className="head"><div className="close" ref={myRef2} onClick={close}>✖&nbsp;&nbsp;</div></p>
                    </div>
                    <div ref={myRef3} className="down">
                        <div className='scroll'>
                    <Link to="/dashboard" className="und"><p className='lk1' style={{backgroundColor:"white",color:"black"}}>&nbsp;<i className="fas fa-dashboard" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Dashboard</p></Link>
                    <Link to="/passes" className="und"><p className='lk1'>&nbsp;<i className="fas fa-ticket" style={{fontSize:'20px'}} ></i>&nbsp;&nbsp;Passes</p></Link>
                    <Link to="/generatepasses" className="und"><p className='lk1'>&nbsp;<i class="fa fa-file-text" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Generate Pass</p></Link>
                    <Link to="/reports" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pie-chart" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Reports</p></Link>
                    <Link to="/profilemanagement" className="und"><p className='lk1'>&nbsp;<i class="fa fa-pencil" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Profile Management</p></Link>
                    <Link to="/" className="und"><p className='lk1'>&nbsp;<i class="fa fa-sign-out" aria-hidden="true" style={{fontSize:'20px'}}></i>&nbsp;&nbsp;Logout</p></Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10" id="box1">
                                <h1>Overall Passes</h1>
                                <h1>0</h1>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 row" id="wheels">
                            <div className="col-md-1"></div>
                            <div className="col-md-10 row" id="box5">
                                <div className="col-md-4">
                                    <div id="box2">
                                        <h2>Two Wheelers</h2>
                                        <h2>0</h2>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div id="box3">
                                        <h2>Three Wheelers</h2>
                                        <h2>0</h2>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div id="box4">
                                        <h2>Four Wheelers</h2>
                                        <h2>0</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 row" id="wheels">
                            <div className="col-md-1"></div>
                            <div className="col-md-10 row" id="box5">
                                <div className="col-md-4">
                                    <div id="box2">
                                        <h2>AEC</h2>
                                        <h2>0</h2>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div id="box3">
                                        <h2>ACET</h2>
                                        <h2>0</h2>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div id="box4">
                                        <h2>ACOE</h2>
                                        <h2>0</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;