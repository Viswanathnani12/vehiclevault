import React from "react";
import './Signin.css';import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Signin(){
    return (
        <>
        <div className="lgin">
        <div className="row">
                <div className="col-md-3 name">
                    <h1>Vehicle Vault</h1>
                </div>
                <div className="col-md-9"></div>
            </div>
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 lgn">
                <div className="sbox">
            <h2 style={{textAlign:"center",width:"100%"}}>Log In</h2> 
                <br/>
                <Form>
        <Form.Group controlId="form.UserName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>
        
        <Form.Group controlId="form.Pass">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="********" />
        </Form.Group>
        <br/>
        <center><Link to="/dashboard"><Button className="bgp">Log in</Button></Link></center>
      </Form>
</div>
            </div>
            <div className="col-md-3"></div>
        </div>
        </div>
        </>
    )
}
export default Signin;