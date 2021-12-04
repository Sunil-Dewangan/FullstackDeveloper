import React, { useState } from "react"
//import Secondpage from "./Secondpage"

import Navigation from "./Navigation"
import "./Style2.css"

import { Row, Col } from "react-bootstrap"
import img from "./logo_.png"
//import {FiUser} from "react-icons/fi"
import { FcGoogle } from "react-icons/fc"
import { ImFacebook2 } from "react-icons/im"
import { AiFillLinkedin } from "react-icons/ai"
import Button from "@restart/ui/esm/Button"


const Homepage = () => {

    const [Forgoat, setForgoat] = useState(false)

    return (

        <>
            <Row><Navigation /></Row>


            <Row style={{ height: "800px" }}>

                <Col sm={5} className="leftrow">
                    <Row className="mt-5"> </Row>
                    <Row className="mt-2"> </Row>
                    <Row className="mt-5 leftcoltoptext  ">
                        <Col xs={2}> </Col>
                        <Col>We make intership</Col>
                    </Row>
                    <Row className="leftcolboldtext center ">
                        <Col xs={2}> </Col>
                        <Col>easy for a batch</Col>
                    </Row>
                    <Row className="mt-5">
                        <Col sm={2}></Col>
                        <Col sm={1} className="circle center circletext"> 01</Col>
                        <Col className="mx-5">
                            <Row className="lefttext">Bulk resume upload</Row>
                            <Row className="lefttext1">Upload multiple resume in one go</Row>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col sm={2}></Col>
                        <Col sm={1} className="circle center circletext"> 02</Col>
                        <Col className="mx-5">
                            <Row className="lefttext">Career councelling</Row>
                            <Row className="lefttext1">Provide suggestions from experts for</Row>
                            <Row>your students</Row>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col sm={2}></Col>
                        <Col sm={1} className="circle center circletext"> 03</Col>
                        <Col className="mx-5">
                            <Row className="lefttext">1400+employers</Row>
                            <Row className="lefttext1">Choose from 1400+companies to set</Row>
                            <Row>your students</Row>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col sm={5}></Col>
                        <Col className="dottext">***</Col>
                    </Row>
                </Col>


                <Col sm={7}>

                    <Row>
                        <Col sm={1}> </Col>
                        {
                            !Forgoat ?

                                <Col>

                                    <Row className="mt-5"></Row>
                                    <Row className="mt-5 "> </Row>
                                    <Row> <img src={img} className="image" alt="" />
                                    </Row>
                                    <Row>
                                        <Col xs={3}>
                                            <Row className="existingUser mt-5">
                                                Existing user
                                            </Row>
                                            <Row className="login">Login</Row>
                                        </Col>
                                        <Col>
                                            <Row className="existingUser mt-5"> First time user  </Row>
                                            <Row className="register">Register</Row>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4 ">
                                        <Col sm={4}>

                                            <input type="email" placeholder="Username" className="email" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col sm={4}>
                                            <input type="password" placeholder="Password" className="email" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col sm={4}>
                                            <button className="loginButton">LOGIN</button>
                                        </Col>
                                        <Col>
                                            <Button className="forgoat" onClick={() => { setForgoat(true) }}>
                                                FORGOAT PASSWORD?

                                            </Button>


                                        </Col>
                                    </Row>

                                    <Row className="mt-5 existingUser">Or Login With______</Row>
                                    <Row className="mt-3">
                                        <Col sm={1} className="googleIcon center"><FcGoogle /></Col>
                                        <Col sm={1} className="facebookicon center"> <ImFacebook2 /></Col>
                                        <Col sm={1} className="linkedin center"> <AiFillLinkedin /></Col>
                                    </Row>
                                </Col>
                                :
                                <Col>
                                    <Row className="mt-5 "> </Row>
                                    <Row> <img src={img} className="image" alt="" />
                                    </Row>
                                    <Row className="mt-4 ">
                                        <Col sm={4}>
                                            <input type="email" placeholder="Username" className="email" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col sm={4}>
                                            <button className="loginButton" onClick={() => { setForgoat(false) }}>
                                                Reset
                                            </button>
                                        </Col>

                                    </Row>
                                </Col>
                        }

                    </Row>
                </Col>
            </Row >

        </>

    )
}

export default Homepage