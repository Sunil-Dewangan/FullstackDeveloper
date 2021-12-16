import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import "./Style.css"
import FirstImg from './images/FirstImg.png'
import FirstImg2 from './images/FirstImg2.png'
import RImg from './images/RImg.jpeg'
import scr1 from './images/scr1.png'
import Scr2 from './images/Scr2.png'
import DonatesScr from './images/DonatesScr.png'
import AshaMaa from './images/AshaMaa.png'
import AshaMaa2 from './images/AshaMaa2.png'
import girls from './images/girls.jpeg'
//import { BsFillCheckCircleFill, } from "react-icons/bs";
import { Box, Checkbox, Radio } from "@material-ui/core";
// import Homepage from "./SecondAssignment/Homepage";
const Homepage = () => {

    const [Donate, setDonate] = useState(false)
    const [Next, setNext] = useState(false)
    

    return (
        <>
            <Row >
                <Row>
                    <Navigation />
                </Row>
                {!Next ? !Donate ?
                    <Col>
                        <Row className="firstrow mt-1">
                            <Col sm={2} className="SwcondImg">
                                {/* First column */}
                                <img src={FirstImg} alt="" sm={5} className="SwcondImg" />
                            </Col>

                            <Col sm={5}>
                                {/* Second column */}
                                <Row className="Rowh"> </Row>
                                <Row className="Frow"></Row>
                                <Row sm={2} className="ItalicFont">
                                    Helping Children
                                </Row >
                                <Row sm={4} className="mx-4 edit">
                                    COME BACK TO SCHOOL
                                </Row>
                                <Row sm={6} className="mt-3 mx-4">
                                    We believe in helping the underpriveledged children to outshine themselves in this world
                                    and get all the benefits that a normal child gets.We majorly focus on the financially backward children,
                                    to get the education and other like healthcare,
                                    nutrition, protection, and response in the time of emergencies.
                                </Row>
                                <Row className="mt-3">
                                    <Col>
                                        <button className="button">
                                            Learn More
                                        </button>
                                    </Col>
                                    <Col>
                                        <button className="button2" onClick={() => { (setDonate(true)) }}  >
                                            Donate
                                        </button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={5}>
                                {/* Third column */}
                                <Row className="mt-5"> </Row>
                                <Row className="mt-5"> </Row>
                                <Row className="mt-5"> </Row>
                                <Row className="mt-1"> </Row>

                                <img src={FirstImg2} alt="left" className=" P SwcondImges" />

                            </Col>
                        </Row>
                        <Row className="mx-5 mt-3">
                            <Row className="mt-5 meet mx-4">
                                MEET OUR PARTNERS
                            </Row>
                            <Row className="mx-4 mt-3">
                                <Col> majine </Col>
                                <Col>Glowup</Col>
                                <Col> majine </Col>
                                <Col>Glowup</Col>
                                <Col> majine </Col>
                                <Col>Glowup</Col>
                            </Row>
                        </Row>
                        <Row className="SecRow mt-5">
                            <Row className="mt-5"></Row>
                            <Col sm={5} className="mx-5 mt-5">

                                <Row className="mission">
                                    -OUR MISSION
                                </Row>
                                <Row className="development mt-4">
                                    All around development
                                </Row>
                                <Row className="children mt-3 mx-3">
                                    FOR THE CHILDREN
                                </Row>
                                <Row className="mt-4 Lorem mx-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip circle
                                    book Education & Prevention Vision Card for Children first aid
                                </Row>
                            </Col>

                            <Col className="mx-1" sm={6}>
                                <Row className="mt-5">
                                    <Col>
                                        <img src={AshaMaa2} alt="" className="book" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={1}></Col>
                        </Row>
                        <Row className="ThirdRow mt-5 ">

                            <Col sm={5} className="mx-5 mt-5">
                                <Row className="mission mx-5">
                                    -ACTIVE CAMPIGN
                                </Row>
                                <Row className=" children mx-5 mt-2">
                                    Follow their
                                </Row>
                                <Row className=" development mx-5 mt-1 ">
                                    motivating stories
                                </Row>
                            </Col>
                        </Row>
                        <Row className="  mt-5 ">

                            <Col sm={5} className="mx-5 mt-5">
                                <Row className="shining mx-5">
                                    OUR SHINIG STUDENT
                                </Row>
                                <Row className="who mx-5 mt-2">
                                    Meet the student who are
                                </Row>
                                <Row className="bright mx-5">
                                    shining bright and back then
                                </Row>

                            </Col>
                            <Col>
                                <img src={scr1} alt="" className="SCR" />
                            </Col>

                            <Row>
                                <img src={RImg} alt="" className="RImg" />
                            </Row>
                            <Row>
                                <Col sm={10}></Col>
                                <Col>
                                    <button className="button">
                                        View all -
                                    </button>
                                </Col>
                            </Row>
                        </Row>
                        <Row className="fourthRow mt-5 ">
                            <Row className="mt-5"></Row>
                            <Col sm={6} className="mt-5 mx-5">
                                <Row className="vision mx-5">
                                    -Our Vision
                                </Row>
                                <Row className="who mx-5 mt-2">
                                    protecting the rights and wellbeing
                                </Row>
                                <Row className="bright mx-5">
                                    FOR EVERY CHILD
                                </Row>
                                <Row className=" mt-3 mx-5 ">
                                    <Box className="box1  mt-3">
                                        <Row className="box1text">EDUCATION FOR EVERY CHILD</Row>
                                        <Row>Lorem ipsum dolor sit amet, consectetur asipiscing elit,
                                            sed do eiusmod temper incididunt ut labore et dolore mangna aliqua</Row>
                                    </Box>
                                </Row>
                                <Row className=" mt-3 mx-5 ">
                                    <Box className="box1 mt-2  ">
                                        <Row className="box1text  mt-3">EDUCATION FOR EVERY CHILD</Row>
                                        <Row>Lorem ipsum dolor sit amet, consectetur asipiscing elit,
                                            sed do eiusmod temper incididunt </Row>
                                    </Box>
                                </Row>
                                <Row className=" mt-3 mx-5 ">
                                    <Box className="box1 mt-2">
                                        <Row className="box1text  mt-3">EDUCATION FOR EVERY CHILD</Row>
                                        <Row>Lorem ipsum dolor sit amet, consectetur asipiscing elit,
                                            sed do eiusmod temper incididunt </Row>
                                    </Box>
                                </Row>
                            </Col>

                            <Col sm={5}>
                                <Row>
                                    <img src={Scr2} alt="" className="Scr2" />
                                </Row>
                            </Col>
                            <Col sm={1}>

                            </Col>
                        </Row>
                        <Row className="FifthRow mt-5 ">
                            <Col sm={8} className="mt-3">
                                <Row className="vision2 mt-5 mx-5">
                                    WAHT TO HELP US IN OUR MISSION?
                                </Row>
                                <Row className="who2 mt-4 mx-5">
                                    Do you want to join the initiative
                                </Row>
                                <Row className="bright2 mx-5">
                                    as a partner or a volunteer?
                                </Row>
                            </Col>
                            <Col sm={4} className="mt-5">
                                <Row className="mt-5"></Row>
                                <Row>
                                    <Col className="mt-5">
                                        <button className=" button3">
                                            <Row>
                                                <Col className="mx-4">
                                                    Partners
                                                </Col>
                                                <Col >
                                                   
                                                    */}
                                                </Col>
                                            </Row>
                                        </button>
                                    </Col>
                                    <Col className="mt-5">
                                        <button className="button4">
                                            <Row>
                                                <Col className="mx-4">
                                                    volunteer
                                                </Col>
                                                {/* <Col><BsFillCheckCircleFill /></Col> */}
                                            </Row>
                                        </button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="SixRow mt-5 ">
                            <Row>
                                <Col className="mx-5 mt-5 News">
                                    NEWS AND EVENTS
                                </Col>
                            </Row>
                            <Row className="News2">
                                Latest updates
                            </Row>
                            <Row>
                                <img src={AshaMaa} alt="" className="AshaMaa" />
                            </Row>
                            <Row>
                                <Col sm={5} className=""></Col>
                                <Col>
                                    <button className="mx-5 button5 ">
                                        View All
                                    </button>
                                </Col>
                            </Row>
                        </Row>
                        <Row className="SevenRow mt-5 ">

                            <Row>
                                <Row className="mt-3 News">
                                    Volunteers & Donor
                                </Row>
                                <Row className="News3">
                                    Meet the people
                                </Row>
                                <Row className="News2">
                                    running the initiative
                                </Row>
                            </Row>
                            <Row>
                                <Col className="mx-5">
                                    {/* OUR WONDERFUL VOLUNTEERS */}
                                </Col>
                                <Col>
                                    {/* OUR BRAND AMBASSADORS */}
                                </Col>
                                <Col>
                                    {/* OUR DONORS */}
                                </Col>
                            </Row>
                            <Row>
                                <img src={girls} alt="" className="girls4 mx-4" />
                            </Row>

                        </Row>

                        <Row className="EightRow mt-5 ">
                            <Row className="mx-5 mt-3">
                                <Row >

                                </Row>
                                <Row className="mx-4 mt-3">
                                    <Col sm={2} className=" meet mx-4">
                                        WE ARE A CERTIFIED NGO
                                    </Col>
                                    <Col className="mx-5"> Glowup</Col>
                                    <Col> majine </Col>
                                    <Col>Glowup</Col>
                                </Row>
                            </Row>
                        </Row>
                    </Col>




                    :
                    <Row className="mx-3">
                        <Row className="Tmeet">
                            <Row className="mt-5 mx-5">
                                <Row className="mx-5 Ddetails">
                                    Donation details_______Donor details
                                </Row>
                                <Row className="mt-2 mx-5">
                                    <Col sm={7} className=" Donate">
                                        {/* This is first column */}
                                        <Row className="mt-4 mx-3">
                                            <Col className="payment" >
                                                PAYMENT TYPE
                                            </Col>
                                            <Col>
                                                <form>
                                                    <label>
                                                        <input type="Radio" name="name" />
                                                        1 Time
                                                    </label>
                                                </form>
                                            </Col>
                                            <Col>
                                                <form>
                                                    <label>
                                                        <input type="Radio" name="name" />
                                                        Recurring
                                                    </label>
                                                </form>
                                            </Col>
                                            <Col>
                                                <select>
                                                    <option value="grapefruit">Monthly</option>
                                                    <option value="lime">Weekly</option>
                                                    <option selected value="coconut">Yearly</option>
                                                </select>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3 mx-3">
                                            <Col sm={3} className="payment">
                                                COMPENSATION
                                            </Col>
                                            <Col sm={4}>
                                                <form>
                                                    <label>
                                                        <input type="Radio" name="name" />
                                                        1000 INR
                                                    </label>
                                                </form>
                                            </Col>
                                            <Col>
                                                <form>
                                                    <label>
                                                        <input type="Radio" name="name" />
                                                        2000 INR
                                                    </label>
                                                </form>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3 mx-3">
                                            <Col sm={3}></Col>
                                            <Col>
                                                <form>
                                                    <label>
                                                        <input type="Radio" name="name" />
                                                        4000 INR
                                                    </label>
                                                </form>
                                            </Col>
                                            <Col>
                                                <form>
                                                    <label>
                                                        <input type="Radio" name="name" />
                                                        8000 INR
                                                    </label>
                                                </form>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3 mx-3">
                                            <Col sm={3}></Col>
                                            <Col>
                                                <input type="amount" placeholder="Enter Custom Amount">

                                                </input>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3 payment mx-3">
                                            <Col sm={3}>
                                                SELECT INTERVAL
                                            </Col>
                                            <Col>
                                                <input type="amount" placeholder="Start Date">

                                                </input>
                                            </Col>
                                            <Col>
                                                <input type="amount" placeholder="End Date">

                                                </input>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3 payment mx-3">
                                            <Col sm={3}>
                                                ADDITIONAL MESSAGE
                                            </Col>
                                            <Col>
                                                <textarea>
                                                    Hello there, this is some text in a text area
                                                </textarea>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3  mx-3">
                                            <Col sm={3} className="payment">
                                                ANONYMOUS DONATION
                                            </Col>
                                            <Col>
                                                <Radio>

                                                </Radio>
                                            </Col>
                                        </Row>
                                        <Row className="mt-0 mx-3">
                                            <Col sm={9}>

                                            </Col>
                                            <Col sm={3}>
                                                <button onClick={() => { (setNext(true)) }} className="button">
                                                    Next
                                                </button>
                                            </Col>
                                        </Row>

                                    </Col>






                                    <Col sm={4} className="mx-5 ">
                                        {/* This is Second column */}
                                        <img src={DonatesScr} alt="" className="DonateImg2" />
                                    </Col>
                                    <Col sm={1}>
                                    </Col>

                                </Row>

                            </Row>

                            <Row className="mt-5 meet mx-4">
                                MEET OUR PARTNERS
                            </Row>

                            <Row className="mx-4 mt-3">
                                <Col> majine </Col>
                                <Col>Glowup</Col>
                                <Col> majine </Col>
                                <Col>Glowup</Col>
                                <Col> majine </Col>
                                <Col>Glowup</Col>
                            </Row>

                            <Row className="FifthRow mt-5 ">
                                <Col sm={8} className="mt-3">
                                    <Row className="vision2 mt-5 mx-5">
                                        WAHT TO HELP US IN OUR MISSION?
                                    </Row>
                                    <Row className="who2 mt-4 mx-5">
                                        Do you want to join the initiative
                                    </Row>
                                    <Row className="bright2 mx-5">
                                        as a partner or a volunteer?
                                    </Row>
                                </Col>
                                <Col sm={4} className="mt-5">
                                    <Row className="mt-5"></Row>
                                    <Row>
                                        <Col className="mt-5">
                                            <button className=" button3">
                                                <Row>
                                                    <Col className="mx-4">
                                                        Partners
                                                    </Col>
                                                    <Col >
                                                        {/* <BsFillCheckCircleFill className="Tick" /> */}
                                                    </Col>
                                                </Row>
                                            </button>
                                        </Col>
                                        <Col className="mt-5">
                                            <button className="button4">
                                                <Row>
                                                    <Col className="mx-4">
                                                        volunteer
                                                    </Col>
                                                    {/* <Col><BsFillCheckCircleFill /></Col> */}
                                                </Row>
                                            </button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>


                        </Row>
                    </Row>





                    :
                    <Row className="back2">
                        <Row className="mx-5 mt-5 Ddetails">
                            Donation details_______Donor details
                        </Row>
                        <Row className="mt-2 mx-5 back2">
                            <Col sm={7} className=" Donate">
                                {/* This is first column */}
                                <Row className="mt-4 mx-3">
                                    <Col className="payment" >
                                        Full Name
                                    </Col>
                                    <Col>
                                        <form>
                                            <label>
                                                <input type="text" placeholder="Enter First Name" />
                                            </label>
                                        </form>
                                    </Col>
                                    <Col>
                                        <form>
                                            <label>
                                                <input type="Text" placeholder="Enter last Name" />
                                            </label>
                                        </form>
                                    </Col>
                                </Row>

                                <Row className="mt-4 mx-3">
                                    <Col sm={4} className="payment" >
                                        Contact
                                    </Col>
                                    <Col sm={1}>
                                        <input type="amount" placeholder="+91">
                                        </input>
                                    </Col>
                                    <Col sm={7}>
                                        <form>
                                            <label>
                                                <input type="text" placeholder="Enter Contact Number" />
                                            </label>
                                        </form>
                                    </Col>
                                </Row>
                                <Row className="mt-4 payment mx-3">
                                    <Col sm={4}>
                                        EMAIL ID
                                    </Col>
                                    <Col>
                                        <form>
                                            <label>
                                                <input type="text" placeholder="Enter Email ID" />
                                            </label>
                                        </form>
                                    </Col>
                                </Row>
                                <Row className="mt-4 payment mx-3">
                                    <Col sm={4}>
                                        ADDRESS
                                    </Col>
                                    <Col>
                                        <form>
                                            <label>
                                                <input type="text" placeholder="Enter Address" />
                                            </label>
                                        </form>
                                    </Col>
                                </Row>
                                <Row className="mt-4  mx-3">
                                    <Col sm={4} className="payment">
                                        COUNTRY & ZIPCODE
                                    </Col>
                                    <Col>
                                        <form>
                                            <label>
                                                <input type="text" placeholder="Enter Country" />
                                            </label>
                                        </form>
                                    </Col>
                                    <Col>
                                        <form>
                                            <label>
                                                <input type="Text" placeholder="Zipcode" />
                                            </label>
                                        </form>
                                    </Col>
                                </Row>
                                <Row className="mt-4 mx-5">
                                    
                                    <Row className="mt-5">
                                    <Col sm={4}> </Col>
                                        <Col sm={0}>
                                            <button onClick={() => { (setNext(true)) }} className="button">
                                                BACK
                                            </button>
                                        </Col>
                                        <Col sm={0}>
                                            <button  className="button">
                                                Next
                                            </button>
                                        </Col>
                                    </Row>
                                </Row>

                            </Col>
                            <Col sm={4} className="mx-5 ">
                                {/* This is Second column */}
                                <img src={DonatesScr} alt="" className="DonateImg2" />
                            </Col>
                            <Col sm={1}>
                            </Col>

                        </Row>




                        <Row className="mt-5 meet mx-4">
                            MEET OUR PARTNERS
                        </Row>

                        <Row className="mx-4 mt-3">
                            <Col> majine </Col>
                            <Col>Glowup</Col>
                            <Col> majine </Col>
                            <Col>Glowup</Col>
                            <Col> majine </Col>
                            <Col>Glowup</Col>
                        </Row>
                        <Row className="FifthRow mt-5 ">
                            <Col sm={8} className="mt-3">
                                <Row className="vision2 mt-5 mx-5">
                                    WAHT TO HELP US IN OUR MISSION?
                                </Row>
                                <Row className="who2 mt-4 mx-5">
                                    Do you want to join the initiative
                                </Row>
                                <Row className="bright2 mx-5">
                                    as a partner or a volunteer?
                                </Row>
                            </Col>
                            <Col sm={4} className="mt-5">
                                <Row className="mt-5"></Row>
                                <Row>
                                    <Col className="mt-5">
                                        <button className=" button3">
                                            <Row>
                                                <Col className="mx-4">
                                                    Partners
                                                </Col>
                                                <Col >
                                                    {/* <BsFillCheckCircleFill className="Tick" /> */}
                                                </Col>
                                            </Row>
                                        </button>
                                    </Col>
                                    <Col className="mt-5">
                                        <button className="button4">
                                            <Row>
                                                <Col className="mx-4">
                                                    volunteer
                                                </Col>
                                                {/* <Col><BsFillCheckCircleFill /></Col> */}
                                            </Row>
                                        </button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                }
            </Row>

        </>
    )
}
export default Homepage;