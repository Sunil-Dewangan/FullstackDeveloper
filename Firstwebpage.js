import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";
//import {Container} from "react-bootstrap"
//import Navigation from "../component/components/Navigation";
import { ImFacebook, ImFacebook2, ImGoogle, ImLinkedin } from "react-icons/im";
import Firstwebpageimg from "./image/internship.png"

const Firstwebpage = () => {
    return (
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
                <Col>We make Internship</Col> 
                  </Row>  
                  <Row className="lftcoltoptxtthick">
                        <Col xs={2}></Col>
                        <Col>easy for a batch</Col>
                    </Row>   
                    <Row className="mt-5">
                        <Col xs={2}></Col>
                        <Col xs={2} className="numbercircle justycntntcntr lftpointnumber mt-2">01</Col>
                        <Col>
                            <Row className="mx-2 lftcolfeaturebold">
                                Bulk resume upload
                            </Row>
                            <Row className="mx-2 lftcolfeaturenormal">
                                Upload multiple resume in one go
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
                                Provide suggeections from experts for your students
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={2}></Col>
                        <Col xs={2} className="numbercircle justycntntcntr lftpointnumber mt-2">03</Col>
                        <Col>
                            <Row className="mx-2 lftcolfeaturebold">
                                1400+ Employers
                            </Row>
                            <Row className="mx-2 lftcolfeaturenormal">
                                Choose from 1400+ complanies to set your students
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
                            <img src={Firstwebpageimg} className="imgstyle" alt=""/>
                            </Row>
                            <Row>
                                <Col xs={3}>
                                    <Row className="mt-4 rightcolexstingusertext">
                                        Existing users
                                    </Row>
                                    <Row className="rightcollogintext">
                                        Login
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="mt-4 rightcolexstingusertext">
                                        First time user
                                    </Row>
                                    <Row className="rightcolregsiterext">
                                        Register
                                    </Row>
                                </Col>
                            
                            </Row>
                            <Row className="mt-5">
                                <input type="email" placeholder="username/email" className="logininputfield" />
                            </Row>
                            <Row className="mt-3">
                                <input type="password" placeholder="password" className="logininputfield" />
                            </Row>
                            <Row className="mt-5">
                                <Col xs={5}>
                                    <button className="loginbutton">Login</button>
                                </Col>
                                <Col className="forgetpasstext">
                                    Forget password ?
                                </Col>
                            </Row>
                           
                            <Row className="mt-5">Or Login with___ </Row>
                            <Row>
                                <Col>
                            <Row className="mt-2 mx-0 googleiocnbg justycntntcntr">
                                <ImGoogle /> 
                           </Row>
                           </Col>
                           <Col sm={2}></Col>
                           <Col sm={2}>
                           <Row className="facebookiocnbg justycntntcntr">
                               <ImFacebook/>
                           </Row>
                           </Col>
                           <Col sm={2}></Col>
                           <Col sm={2}>
                           <Row className="linkedlniocnbg justycntntcntr">
                               <ImLinkedin/>
                           </Row>
                           </Col>
                           </Row> 
                    </Col>
             </Row>
             </Col>
             </Row>
       </>
 )
}
export default Firstwebpage 