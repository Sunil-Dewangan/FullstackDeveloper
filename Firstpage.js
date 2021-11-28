import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";
import Firstpageimg from "./image/internship.png"
//import {Container} from "react-bootstrap" 


var Firstpage =() =>{
    return(
        <>
        <Row>
            <Col sm={5} className="bgstyle">
            <div className="fontstylings">We make internship<div><b>easy for a batch</b></div></div>
            <Row>
            <b><h1>01</h1></b><h3>Bulk Resume Upload </h3><div>Upload Multiple Resume in one go</div>
            </Row>
            <Row>
            <Col><b><h1>02</h1></b></Col><h3> Career councellings</h3> <div>Provide suggestions from experts for your students</div>
            </Row>
            <Row>
            <b><h1>03</h1></b><h3>1400+ employers</h3> <div>Choose from 1400+ companies to set your students</div>
            </Row>
            </Col>
            <Col sm={7}  >
            <Col >
                <Row>
            <img src={Firstpageimg} className="imgstyle" alt=""/>
            </Row>
            </Col>
           <Row lg={100}>
            <Col>
            <h1></h1>
            </Col>
            </Row>
            <Row>
            <Col sm={3}>
            <div>Existing users</div>
            <div>
                <h2><b><em><u>Login</u></em></b></h2>
            </div>
            </Col>
            <Col>
            <div>First time users</div>
            <div>
                <h2><span>Register</span></h2>
            </div>
            </Col>
            <Row lg={100}>
                <Col sm={6}>
                <div><input type="text" class="inputstyles"/></div>
                </Col> 
            </Row>
            <Row lg={100}>
                <Col lg={6} >
                <div><input type="text" class="inputstyles"/></div> 
                </Col>
            </Row>
            </Row>
            <Row>
            <Col sm={3}>
            <div><button type="submit">Login</button></div>
            </Col>
            </Row>
            <Row>
            <Col>
            <div>Forgate password?</div>
            </Col>
            </Row>
            </Col>
            
        </Row>
        </>
    )
}
export default Firstpage;