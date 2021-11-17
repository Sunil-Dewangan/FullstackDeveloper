import React from "react";

import Navigation from "./Navigation";
import { Row, Col, Image, FloatingLabel, Form, Button, Container} from "react-bootstrap";
import "./Styles.css"
import {FcGoogle} from "react-icons/fc";
import {ImFacebook2} from "react-icons/im"
import {AiFillLinkedin} from "react-icons/ai"
import {FiUser} from "react-icons/fi"
import {RiLockPasswordFill} from "react-icons/ri"
import img from "./logo_.png"

const Secondpage = () => {
    return (
        <>
            <Navigation />
           
            <Container>
            <Row>
                <Col xs={6} className="fontstylings"> .</Col>
                <Col xs={6} md={4}> <img src={img} width="100"/></Col>
            </Row>

            <Row>
                <Col xs={6} className="fontstylings"></Col>
                <Col xs={3} align="center">Existing user</Col>
                <Col xs={3} align="center">First Time User</Col>
            </Row>

            <Row>
                <Col xs={6} className="fontstylings"></Col>
                <Col xs={3} className="login" align="center" ><strong>Login</strong></Col>
                <Col xs={3} align="center"> Register</Col>
            </Row>


            <Row>
                <Col xs={6} className="backgnd" align="center">
                    <p>We make internship</p>
                    <strong> easy for a batch</strong></Col>

                <Col xs={6}>
                <FiUser/>
                    <FloatingLabel controlId="floatingInput"   label="Username" className="mb-3" >
                    <Form.Control type="email" placeholder="name@example.com" />           
                    </FloatingLabel>
                    <RiLockPasswordFill/>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel></Col>

                <Col xs={6} className="fontstylings"></Col>
            </Row>

            <Row>
                <Col xs={6} className="b" align="center"><strong> O1    Bulk resume upload</strong>
                    <p>Upload multiple resume in one go</p>
                </Col>
                <Col xs={3} > <Button size="lg">Login</Button></Col>
                <Col xs={3} className="forgetPassword"> FORGOT PASSWORD ?</Col>
            </Row>

            <Row>
                <Col xs={6} className="b" align="center">
                    <strong>O2    Career concullings</strong>
                    <p>Provide suggestion from expert for your student </p>
                </Col>
                <Col xs={6}>Or Login with _________</Col>
            </Row>

            <Row>
                <Col xs={6} className="b" align="center">
                    <strong>O3    1400+employers</strong>
                    <p>Choose from 1400+ companies to set your student</p>
                </Col>
                <Col xs={6}  > <FcGoogle/> <ImFacebook2/> <AiFillLinkedin/></Col>
            </Row>

            <Row>
                <Col xs={6} className="b" align="center"><strong>. . .</strong></Col>
            </Row>
            </Container>


        </>
    )
}

export default Secondpage
