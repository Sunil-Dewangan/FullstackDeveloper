import React from "react";
import { Row ,Col } from "react-bootstrap";
import "./style.css";
import Webpageimg from "./image/logo.png";


const Secondwebpage=()=>{
    return(
        <>
        <Row style={{ height: "730px" }}>
        <Col sm={5} className="lftcolbg">
            <Row className="mt-5">
                    </Row>
                    {/*<Navigation />   
              <Row className="mt-5"></Row>     
              <Row className="mt-5"></Row> */} 
              <Row className="mt-5 lftcoltoptxt">
              <Col xs={2}></Col>
                <Col>Make your profile</Col> 
                  </Row>  
                  <Row className="lftcoltoptxtthick">
                        <Col xs={2}></Col>
                        <Col>stronger with</Col>
                    </Row>   
                    <Row className="mt-5">
                        <Col xs={2}></Col>
                        <Col xs={2} className="numbercircle justycntntcntr lftpointnumber mt-2">01</Col>
                        <Col>
                            <Row className="mx-2 lftcolfeaturebold">
                                Online Training
                            </Row>
                            <Row className="mx-2 lftcolfeaturenormal">
                                We profile online trainings in 20+ trades
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={2}></Col>
                        <Col xs={2} className="numbercircle justycntntcntr lftpointnumber mt-2">02</Col>
                        <Col>
                            <Row className="mx-2 lftcolfeaturebold">
                                Career Councellings
                            </Row>
                            <Row className="mx-2 lftcolfeaturenormal">
                                Get help from experts on your career path 
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={2}></Col>
                        <Col xs={2} className="numbercircle justycntntcntr lftpointnumber mt-2">03</Col>
                        <Col>
                            <Row className="mx-2 lftcolfeaturebold">
                                Resume
                            </Row>
                            <Row className="mx-2 lftcolfeaturenormal">
                                Create your resume on 100+ pre desinges templates
                            </Row>
                        </Col>
                    </Row>
            </Col>
            <Col sm={7}>
                    <Row>
                        <Col xs={1}></Col>
                        <Col>
                            <Row className="mt-4"></Row>
                            <Row className="mt-0">
                            <img src={Webpageimg} className="imgstyle" alt=""/>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <Row className="mt-4 rightcolexstingusertext">
                                        Existing users
                                    </Row>
                                    <Row className="rightcolregsiterext">
                                        Login
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="mt-4 rightcolexstingusertext">
                                        First time user
                                    </Row>
                                    <Row className=" rightcollogintext">
                                        Register
                                    </Row>
                                </Col>
                            
                            </Row>
                            <Row className="mt-5">
                                <input type="text" placeholder="Full Name" className="logininputfield" />
                            </Row>
                            <Row className="mt-3">
                                <input type="email" placeholder="Email Address" className="logininputfield" />
                            </Row>
                            <Row className="mt-3">
                                <input type="text" placeholder="Mobile Number" className="logininputfield" />
                            </Row>
                            <Row className="mt-3">
                                <input type="password" placeholder="Set Password" className="logininputfield" />
                            </Row>
                            <Row className="mt-5">
                                <Col xs={5}>
                                    <button className="loginbutton">Register</button>
                                </Col>
                                </Row>
                               
                    </Col>
             </Row>
             </Col>
        </Row>
        </>
    )
}
export default Secondwebpage;