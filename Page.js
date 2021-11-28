import React from 'react'
import React, { useState } from 'react'
import { Row, Col } from "react-bootstrap"
import Iglogo from './images/Iglogo.png';
import "./styles.css"
import { AiFillGoogleCircle, ImGoogle, ImWhatsapp } from "react-icons/im"
import { AiOutlineFacebook, ImFacebook } from "react-icons/im"
import Navigation from './Navigation';
const Homepage = () => {


    const [forgetpass, setForgetpass] = useState(false)
    const [register, setRegister] = useState(false)
    const [login, setLogin] = useState(false)


const Homepage = () => {
    return (
        <>
            <row >
  <Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>
  </Row>
                <Row >
                    <Col lg={6} >We make intership </Col>
                </Row>
                <Row>
                    <Col>easy for a batch </Col>
                </Row>
                <Row>
                    <Col>(01)Bulk resume upload</Col>
                </Row>
                <Row>
                    <Col>Upload multiple resumes in one go</Col>
                </Row>
                <Row>
                    <Col>(02)Carrer concelling </Col>
                </Row>
                <Row>
                    <Col>provide suggestions from experts for your students</Col>
                </Row>
                <Row>
                    <Col>(03)1400+ employee </Col>
                </Row>
                <Row>
                    <Col>Choose from 1400+ companies to set your students</Col>
                </Row>





            </row>
            <Row style={{ height: "730px" }}>
                { }
                <Col sm={5} className="rowheightg">
                    {/* this is a first column*/}
                    <Row className="mt-5"> </Row>

                    <Row className=" mt-5 rowfirst">
                        <Col xs={2}> </Col>
                        <Col>
                            We make internship
                        </Col>
                    </Row>
                    <Row>
                        <Col className=" batch rowfirstsecond justify">
                            <Col xs={2}> </Col>
                            easy for a batch
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={2}></Col>
                        <Col xs={1} className="center num  circle">
                            01
                        </Col>

                        <Col>
                            <Row className="onetwothree mx-2">
                                Bulk resume upload
                            </Row>
                            <Row className="mx-2 lowernumseries">
                                upload multiple resume in one go
                            </Row>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col xs={2}></Col>
                        <Col xs={1} className="center num  circle">
                            02
                        </Col>

                        <Col>
                            <Row className="onetwothree mx-2">
                                Career Councellings
                            </Row>
                            <Row className="mx-2 lowernumseries">
                                Provide suggestion from experts for your students
                            </Row>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col xs={2}></Col>
                        <Col xs={1} className="center num  circle">
                            03
                        </Col>

                        <Col>
                            <Row className="onetwothree mx-2">
                                1400+ Employers
                            </Row>
                            <Row className="mx-2 lowernumseries">
                                Choose from 1400+ companies to set your students
                            </Row>
                        </Col>
                    </Row>

                </Col>




                <Col sm={7} className="mt-5">
                    {/*This is a second column */}
                    <Row >
                        <Col >

                            {!login ? !register ? !forgetpass ?
                                <Col className="mx-5">
                                    <Row className="mt-4"></Row>
                                    <Row className=" img mt-0">
                                        <img src={Iglogo} alt="" />
                                    </Row>


                                    <Row >
                                        <Col xs={3} className="mx-5">
                                            <Row className="mt-4 user">
                                                Existing user
                                            </Row>

                                            <Row className="login">
                                                Login
                                            </Row>
                                        </Col>
                                        <Col className="mx-5">
                                            <Row className="mt-4 user">
                                                First time users
                                            </Row>

                                            <Row onClick={() => { (setRegister(true)) }} className="register">
                                                Register

                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className="mx-4 mt-3">
                                        <input type="email" placeholder="username/email" className="inputfield" />

                                    </Row>
                                    <Row className=" mx-4 mt-3">
                                        <input type="password" placeholder="password" className="inputfield" />
                                    </Row>



                                    <Row className="mt-3 mx-2">
                                        <Col onClick={() => { setLogin(true) }}>
                                            <button className="button">login</button>
                                        </Col>



                                        <Col onClick={() => { setForgetpass(true) }}>
                                            Forget password?

                                        </Col>
                                    </Row>

                                    <Col>

                                        <Row className="mt-4 ">
                                            Or Login with
                                        </Row>

                                        <Row className="mt-4 threeicon">
                                            <Col className="center icons">
                                                <ImGoogle />
                                            </Col>
                                            <Col className="center icons">
                                                <ImFacebook />
                                            </Col>
                                            <Col className="center icons">
                                                <ImWhatsapp />
                                            </Col>
                                        </Row>


                                    </Col>

                                </Col>
                                :
                                <Col>

                                    <Row className=" img mt-0">
                                        <img src={Iglogo} alt="" />
                                    </Row>


                                    <Row className="mx-4 mt-5">
                                        <input type="email" placeholder="Enter mobile number/username/email" className="inputfield" />
                                    </Row>
                                    <Row xs={5} className="mt-5">
                                        <Col >
                                            <button className="button" onClick={() => { setForgetpass(false) }}>Reset</button>
                                        </Col>
                                    </Row>
                                </Col>
                                :
                                <Col>
                                    < Row className=" img mt-0">
                                        <img src={Iglogo} alt="" />
                                    </Row>

                                    <Row >
                                        <Col xs={3} className="mx-5">
                                            <Row className="mt-4 user">
                                                Existing user
                                            </Row>

                                            <Row className="login">
                                                Login
                                            </Row>
                                        </Col>
                                        <Col className="mx-5">
                                            <Row className="mt-4 user">
                                                First time users
                                            </Row>

                                            <Row onClick={() => { (setRegister(true)) }} className="register login">
                                                Register

                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="mx-4 mt-3">
                                        <input type="email" placeholder="Full Name" className="inputfield" />

                                    </Row>
                                    <Row className=" mx-4 mt-3">
                                        <input type="password" placeholder="Email Address" className="inputfield" />
                                    </Row>

                                    <Row className="mx-4 mt-3">
                                        <input type="email" placeholder="Mobile NUmber" className="inputfield" />

                                    </Row>
                                    <Row className=" mx-4 mt-3">
                                        <input type="password" placeholder="Set Password" className="inputfield" />
                                    </Row>
                                    <Row xs={5} className="mt-5">
                                        <Col >
                                            <button className="button" onClick={() => { setRegister(false) }}>Register</button>
                                        </Col>
                                    </Row>
                                </Col>


                                :
                                <Col>
                                   <Col > <Navigation/>

                                        <Row className=" mt-5 navrow">
                                            <Col>
                                            <Row>
                                                Hi, Abhishek
                                            </Row>
                                            <Row>
                                                We have few thing for you look at
                                            </Row>
                                            </Col>
                                        </Row>
                                    </Col>









                                </Col>

                            }

                        </Col>
                    </Row>
                </Col>




            </Row >

        </>
    )