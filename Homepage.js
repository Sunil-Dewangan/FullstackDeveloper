import React, { useState } from "react"
//import Secondpage from "./Secondpage"
import Navigation from "./Navigation"
import "./Styles.css"
import Iglogo from "./Images/Iglogo.png"
import { ImGoogle } from "react-icons/im"
import { Row, Col } from "react-bootstrap"

const Homepage = () => {

    const [forgetpass, setForgetpass] = useState(false)

    return (

        <>
            <Row>
                <Navigation />
            </Row>
            <Row style={{ height: "730px" }}>
                {/*This is the left Column*/}
                <Col sm={5} className="lftcolbg">
                    <Row className="mt-5">
                    </Row>

                    <Row className="mt-5 lftcoltoptxt ">
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
                {/*This is the right Column*/}
                <Col sm={7}>
                    <Row>
                        <Col xs={1}></Col>
                        {!forgetpass ?
                            <Col>
                                <Row className="mt-4"></Row>
                                <Row className="mt-0">
                                    <img src={Iglogo} className="secondpageimgstyle" alt="" />
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
                                    <Col className="forgetpasstext"
                                        onClick={() => { setForgetpass(true) }}
                                        style={{ cursor: "pointer" }}
                                    >
                                        Forget password ?
                                    </Col>
                                </Row>
                                <Row className="mt-5 mx-0 googleiocnbg justycntntcntr">
                                    <ImGoogle />
                                </Row>
                            </Col>
                            :
                            <Col>
                                <Row className="mt-4"></Row>
                                <Row className="mt-0">
                                    <img src={Iglogo} className="secondpageimgstyle" alt="" />
                                </Row>

                                <Row className="mt-5">
                                    <input type="email" placeholder="Enter username/email to reset your password" className="logininputfield" />
                                </Row>

                                <Row className="mt-5">
                                    <Col xs={5}>
                                        <button className="loginbutton"
                                            onClick={() => { setForgetpass(false) }}
                                        >Reset</button>
                                    </Col>
                                    <Col className="forgetpasstext">

                                    </Col>
                                </Row>
                            </Col>
                        }
                    </Row>

                </Col>
            </Row>

        </>

    )
}

export default Homepage
