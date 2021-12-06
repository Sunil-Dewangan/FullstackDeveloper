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
import Abhinash from "./abhinash.png"
import Abhishek from "./abhishek.png"
import Blackboad from "./blackboad.png"
import Education from "./education.png"
import Star from "./star.png"
import hundreadPlus from "./100+.png"
import StudentName from "./studentName.png"
import EducationFor from "./educationForEveryChild.png"
import Girls from "./girls.png"
import Partners from "./partners.png"
import Health from "./health.png"
import Hot from "./volenteer.png"


const Homepage = () => {

    const [Forgoat, setForgoat] = useState(false)

    return (

        <>
            <Row><Navigation /></Row>
            {/*first page*/}
            <Row className="happyChild" style={{ height: "800px" }}>
                <Col sm="2">
                    <Row >
                        <img src={Abhinash} alt="" />
                    </Row>
                </Col>
                <Col sm="6">
                    <Row style={{ height: "80px" }}> </Row>
                    <Row className="helpingChildreen">Helping Childreen</Row>
                    <Row className="mt-3 mx-3 comebacktoSchool">➡  COME BACK TO SCHOOL</Row>
                    <Row className="mt-2 mx-2 logo2">
                        <img src={Blackboad} alt="" />
                    </Row>
                    <Row className="mt-5 mx-3">
                        We believe in helping the underpriveledged children to outshine themselves in this world
                        and get all the benefits that a normal child gets.We majorly focus on the financially backward children,
                        to get the education and other like healthcare,
                        nutrition, protection, and response in the time of emergencies.
                    </Row>
                    <Row style={{ height: "80px" }}> </Row>
                    <Row>
                        <Col> <button className="button learnMor mx-3">Learn More ➡</button></Col>
                        <Col> <button className="button donate">Donate</button></Col>
                    </Row>
                </Col>
                <Col sm="4">
                    <Row style={{ height: "80px" }}> </Row>
                    <Row className="mt-5 mt-5">
                        <img src={Abhishek} alt="" />
                    </Row>
                </Col>

            </Row>

            {/*Second Page*/}
            <Row style={{ height: "200px" }}>
                <Row>
                    <Col>
                        <Row className="mt-5 mx-5 certified">MEET OUR PARTNERS</Row>
                        <Row className="mt-2 mx-5">
                            <Row className="mt-3 mx-5">
                                <Col className="glowUp"> majine </Col>
                                <Col className="glowUp">Glowup</Col>
                                <Col className="glowUp"> majine </Col>
                                <Col className="glowUp">Glowup</Col>
                                <Col className="glowUp">majine </Col>
                                <Col className="glowUp">Glowup</Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Row>

            {/*Theird Page*/}

            <Row className="seventhPage" style={{ height: "800px" }}>
                <Col sm={6}>
                    <Row style={{ height: "120px" }}></Row>
                    <Row className="mt-5 mx-5 ourMission">__OUR MISSION</Row>
                    <Row className="allArround mx-4 mt-4">All around development</Row>
                    <Row className="forTheChildreen mx-5 mt-1">FOR THE CHILDREN</Row>
                    <Row className="mt-4 mx-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</Row>
                </Col>

                <Col sm={6}>
                    <Row style={{ height: "60px" }}></Row>
                    <Row className="mt-5 mx-2"><img src={Education} alt="" /></Row>
                </Col>
            </Row>

            {/*Fourth Page*/}

            <Row className="mt-5 mx-5" style={{ height: "500px" }}>
                <Col sm={1}>
                    <Row style={{ height: "100" }}>
                        <img src={Star} alt="" />
                    </Row>
                </Col>
                <Col sm={8}>
                    <Row className="mt-5 mx-2 ourMission">__ACTIVE CAMPAIGN</Row>
                    <Row className="mx-3 mt-2 forTheChildreen">Follow their</Row>
                    <Row className="allArround mx-3" >motivating stories</Row>
                </Col>
                <Col sm={3}></Col>
            </Row>

            {/*Fift Page*/}

            <Row className="colour" style={{ height: "800px" }}>

                <Col sm={2}></Col>
                <Col sm={4}>
                    <Row className="ourMission mt-5">OUR SHINING STUDENT</Row>
                    <Row className="allArround">Meet the student who are</Row>
                    <Row className="forTheChildreen">shininng bright and back then</Row>
                </Col>
                <Col sm={4} >
                    <Row className="mx-4 mt-5">
                        <img src={hundreadPlus} alt="" />
                    </Row>
                </Col>
                <Row className="mx-1 mt-5"> <img src={StudentName} alt="" /></Row>
            </Row>

            {/*Fift Page*/}

            <Row style={{ height: "1000px" }}>

                <Col sm={1}></Col>
                <Col sm={6} >
                    <Row className="ourVision mt-5">_Our Vision </Row>
                    <Row className="allArround">
                        Protecting the Write and belbing
                    </Row>
                    <Row className="forTheChildreen mt-2 mx-1">
                        For Every Child
                    </Row>
                    <Row className="mt-5">
                        <img src={EducationFor} alt="" />
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <img src={Girls} alt="" />
                    </Row>
                </Col>
            </Row>
            {/*Fift Page*/}
            <Row className="fiftPage" style={{ height: "490px" }}>
                <Col sm={7} >
                    <Row className="ourMission mt-5 mx-5">WAHT TO HELP US IN OUR MISSION ? </Row>
                    <Row className="allArround mx-5 mt-2">Do you want to join the initiative</Row>
                    <Row className="forTheChildreen mx-5 mt-2">as a partner or a volunteer?</Row>
                </Col>
                <Col>
                    <Row>
                        <img src={Partners} alt="" />
                    </Row>
                </Col>
            </Row>

            {/*Sixt Page*/}

            <Row style={{ height: "120px" }}> </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Row className="ourMission center">NEWS AND EVENTS</Row>
                    <Row className="allArround center">Latest updates</Row>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <img src={Health} alt="" />
            </Row>
            <Row>
                <Col sm={5}></Col>
                <Col>
                    <Row className="center">
                        <Button className="viewAll"> View All➡</Button>
                        <Row style={{ height: "70px" }}> </Row>
                    </Row>
                </Col>
                <Col sm={5}></Col>
            </Row>

            {/*Seventh Page*/}

            <Row className="seventhPage" style={{ height: "900px" }}>
                <Col></Col>
                <Col >
                    <Row className="ourMission center mt-5">Volunteers & Donor</Row>
                    <Row className="allArround center">Meet the people</Row>
                    <Row className="forTheChildreen center">running the initiative</Row>
                </Col>
                <Col></Col>
                <Row>
                    <img src={Hot} />
                </Row>
            </Row>
            {/*last page*/}
            <Row style={{ height: "150px" }}>
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={2} className="mt-5 certified">WE ARE A CERTIFIED NGO</Col>
                    <Col sm={1}></Col>
                    <Col className="glowUp mt-5" sm={2}>GlowUp</Col>
                    <Col className="glowUp mt-5" sm={2}>majine</Col>
                    <Col className="glowUp mt-5" sm={2}>GlowUp</Col>
                </Row>
            </Row>



            {/* 
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
*/}
        </>

    )
}

export default Homepage