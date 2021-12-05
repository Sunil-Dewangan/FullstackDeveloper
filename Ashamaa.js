import React, { Children, useState } from "react";
import { Row, Col, } from "react-bootstrap"
import "./newstyle.css"
import Ashamaaimg from "./image/ashamaa.png"
import Newnavigation from "./Newnavigation";
import sideimg from "./image/home-header-side-img.png"
import school from "./image/school.svg"
import headerimg from "./image/home-header-img.png"
import arrowimg from "./image/arrow.svg"
import circleimg from "./image/circle-stripes.svg"
import circlesmallimg from "./image/circle-small.svg"
import circlehalfstripes from "./image/circle-half-stripes-blue.svg"
import zigzag from "./image/zigzag-blue.svg"
import lineimg from "./image/line1.png"
import educationimg from "./image/education.png"
import healthimg from "./image/health.png"
import health1 from "./image/health1.png"
import cardimg from "./image/card.png"
import starimg from "./image/star.png"
import halfcircleimg from "./image/circle-half-stripes.svg"
import pinkwaveimg from "./image/pink-wave.png"
import children1img from "./image/children1.svg"
import tikkimg from "./image/tikk.png"
import foodimg from "./image/food-for-hungry-children.jpg"
import childrenimg from "./image/children.8.jpg"
import churchimg from "./image/church-of-the-king.jpg"
import userimg from './image/user.svg'
import volunteerimg from "./image/volunteer.png"
const Ashamaa = () => {
    const [getapiresponse, setGetapiresponse] = useState("")
    return (
        <>
            <Row >
                <Row >
                    <Newnavigation />
                </Row>
                <Row className="lftcolbg" >
                    <Col xs={3}>
                        <img src={sideimg} className="sideimgstyle" alt="" />
                    </Col>
                    <Col xs={5}>
                        {/* <Row className="Rowheight"></Row>*/}
                        <img src="/static/media/zigzag-pink.2c081d37.svg" alt="" />
                        <Row className=" lg-45 helpstyle">Helping Children</Row>
                        <Row className="mx-5 mt-2 comeback">COME BACK TO SCHOOL</Row>
                        <Col>
                            <img src={school} className="schoolstyle" alt="school" />
                        </Col>
                        <Row className="mt-5">
                            <Col className="firstline">
                                We believe in helping the underpriveledged children to outshine themselves in this world and get all the benefits that a normal child gets. We majorly focus on the financially backward children, to get the education and other like healthcare, nutrition, protection, and response in the time of emergencies.
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col>
                                <button className="learnmorebutton">Learn More
                                    <img src={arrowimg} alt="arrow"></img>
                                </button>
                            </Col>
                            <Col>
                                <button className="donatebutton">Donate
                                </button>
                            </Col>
                        </Row>

                    </Col>
                    <Col>
                        <Col>
                            <img src={circleimg} className="" alt="" />
                        </Col>
                        <Row>
                            <img src={headerimg} className="headerimgstyle" alt="" />
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Row className=" mt-5 secondpage">
                        <Col>MEET OUR PARTNERS</Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="majinestyle"> <img src={circlesmallimg} className="smallcircle" alt="" />majine</Col>
                        <Col className="majinestyle"> <img src={circlesmallimg} className="smallcircle" alt="" />GlowUp</Col>
                        <Col className="majinestyle"> <img src={circlesmallimg} className="smallcircle" alt="" />majine</Col>
                        <Col className="majinestyle"> <img src={circlesmallimg} className="smallcircle" alt="" />GlowUp</Col>
                        <Col className="majinestyle"> <img src={circlesmallimg} className="smallcircle" alt="" />majine</Col>
                        <Col className="majinestyle"> <img src={circlesmallimg} className="smallcircle" alt="" />GlowUp</Col>
                    </Row>
                    <Row className="mt-5 Rowheight secondpagecolor">
                        <Row>
                            <Col xs={2}>
                                <Row className="mt-5">
                                    <img src={starimg} className="home-mission-star" alt="" />
                                </Row>
                            </Col>
                            <Col xs={5}>
                                <img src={circlehalfstripes} className="halfcircle" alt="" />
                                <Row className="mt-2">
                                    <Col className="ourstyle">
                                        <img src={lineimg} className="" alt="" /> OUR MISSION</Col>
                                    <Row className="allstyle">All around development</Row>
                                    <Row className="forstyle">FOR THE CHILDREN</Row>
                                    <Col className="loremstyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={5}>
                                <Row className="mt-5">
                                    <Col>
                                        <img src={zigzag} className="mission-zigzag-blue" alt="" />
                                    </Col>
                                    <Row>
                                        <Col>
                                            <img src={educationimg} className="home-mission-card-1 home-mission-card white-bg" alt="" />
                                            <div class="fs-14"> Education & Prevention</div>
                                        </Col>
                                        <Col>
                                            <img src={cardimg} className="home-mission-card-1" alt="" />
                                            Health & Nutrition

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <img src={healthimg} className="home-mission-card-1" alt="" />
                                            Card for Children

                                        </Col>
                                        <Col>

                                            <img src={health1} className="home-mission-card-1" alt="" />
                                            Health & Nutrition
                                        </Col>
                                    </Row>
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Row>
            </Row>
            <Row className="thirdpage">
                <Row>
                    <Col xs={2}>
                        <Row className="mt-5">
                            <img src={starimg} className="home-mission-star" alt="" />
                        </Row>
                    </Col>
                    <Col xs={5}>
                        <Col className="ourstyle">
                            <img src={lineimg} className="" alt="" /> ACTIVE CAMPAIGN</Col>
                        <Col>Follow their</Col>
                        <Col>motivating stories
                        </Col>
                    </Col>
                    <Col xs={5}>
                        <img src={halfcircleimg} className="" alt="" />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <img src={zigzag} className="home-mission-zigzag-blue2" alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={5}>
                        <Row className="ourstyle"> OUR SHINING STUDENT</Row>
                        <Row className="meetstyle">Meet the student who are</Row>
                        <Row className="shiningstyle">shininng bright and
                            back then
                        </Row>
                    </Col>
                    <Col>
                        <Row className="home-student-data">
                            <Row>
                                <Col xs={5}>
                                    <Row className="threestyle">3</Row>
                                    <Row className="onstyle">ONGOING CAMPAIGN</Row>
                                </Col>
                                <Col>
                                    <Row className="threestyle">100+</Row>
                                    <Row className="onstyle">VOLUNTEERS</Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Row className="threestyle">10+</Row>
                                    <Row className="onstyle">BACKERS</Row>
                                </Col>
                                <Col>
                                    <Row className="threestyle">22+</Row>
                                    <Row className="onstyle">CHILDERN HELPED</Row>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}> <img src={children1img} className="" alt="" />
                        <Row className="student1 mt-2">student name</Row>
                        <Row>student class</Row>
                    </Col>
                    <Col xs={3}> <img src={children1img} className="" alt="" />
                        <Row className="student1 mt-2">student name</Row>
                        <Row>student class</Row>
                    </Col>
                    <Col xs={3}> <img src={children1img} className="" alt="" />
                        <Row className="student1 mt-2">student name</Row>
                        <Row>student class</Row>
                    </Col>
                    <Col xs={3}> <img src={children1img} className="" alt="" />
                        <Row className="student1 mt-2">student name</Row>
                        <Row>student class</Row>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <button className="viewbutton">View all
                            <img src={arrowimg} alt="arrow"></img>
                        </button>
                    </Col>
                </Row>
            </Row>
            <Row>

            </Row>
            <Row>
                <Col xs={2}>
                    <Row className="mt-5">
                        <img src={starimg} className="home-mission-star" alt="" />
                    </Row>
                </Col>
                <Col xs={4}>
                    <Row> <Col className="ourstyle">
                        <img src={lineimg} className="" alt="" /> Our Vision</Col>
                    </Row>
                    <Row className="protecting mx-5 mt-2">
                        protecting the rights and wellbeing
                    </Row>
                    <Row className="bright mx-5">
                        FOR EVERY CHILD
                    </Row>
                    <Col>
                        <Row className=" mt-4">
                            <Row className="eduction">EDUCATION FOR EVERY CHILD</Row>
                            <Row className="lorem">Lorem ipsum dolor sit amet, consectetur asipiscing elit,sed do eiusmod temper incididunt ut labore et dolore mangna aliqua</Row>
                        </Row>
                        <Row className=" mt-4">
                            <Row className="eduction">EDUCATION FOR EVERY CHILD</Row>
                            <Row className="lorem">Lorem ipsum dolor sit amet, consectetur asipiscing elit,sed do eiusmod temper incididunt ut labore et dolore mangna aliqua</Row>
                        </Row>
                        <Row className="mt-4">
                            <Row className="eduction" >EDUCATION FOR EVERY CHILD</Row>
                            <Row className="lorem">Lorem ipsum dolor sit amet, consectetur asipiscing elit,sed do eiusmod temper incididunt ut labore et dolore mangna aliqua</Row>
                        </Row>

                    </Col>
                </Col>
                <Col xs={6}>
                    <Row>
                        <img src={pinkwaveimg} className="" alt="" />
                    </Row>
                </Col>
            </Row>
            <Row className="fouth">
                <Col xs={1}></Col>
                <Col xs={5}>
                    <Row className="mt-5"></Row>
                    <Row className="mt-5"></Row>
                    <Row className="mt-5 what">
                        WAHT TO HELP US IN OUR MISSION ?
                    </Row>
                    <Row className="mt-3 dostyle">
                        Do you want to join the initiative
                    </Row>
                    <Row className="mt-3 asstyle">
                        as a partner or a volunteer?
                    </Row>
                </Col>
                <Col xs={6}>
                    <Row className="mt-4"></Row>
                    <Row className="mt-5"></Row>
                    <Row className="mt-5"></Row>
                    <Row className="mt-5">
                        <Col xs={2} className="home-volunteer-section-partners-btn mx-4">
                            <button className="Partners">
                                <Col> Partners <img src={tikkimg} className="" alt="" /></Col>
                            </button></Col>
                        <Col xs={1}></Col>
                        <Col xs={2} className="home-volunteer-section-partners-btn mx-4">
                            <button className="Volunteers">
                                <Col> Volunteers <img src={tikkimg} className="" alt="" /></Col></button>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Row className="mt-5"></Row>
                <Row className="mt-5"></Row>
                <Col xs={4}></Col>
                <Col xs={4}>
                    <Row className="mt-3 news">
                        NEWS AND EVENTS
                    </Row>
                    <Row className="latest">
                        Latest updates
                    </Row>
                </Col>
                <Col xs={4}></Col>
                <Row>
                    <Col xs={4}>
                        <img src={foodimg} className="home-event-card img" alt="" />
                        <Row className="textstyle">New vaccine for cattle protects
                            <div> against fetal calf loss from</div></Row>
                        <Row className="mt-2">
                            <Col>
                                <img src={userimg} className="" alt="" />
                                <Col>
                                    Hawkins Junior
                                </Col>
                            </Col>

                        </Row>
                    </Col>
                    <Col>
                        <img src={childrenimg} className="home-event-card img" alt="" />
                        <Row className="textstyle">New vaccine for cattle protects
                            <div> against fetal calf loss from</div></Row>
                    </Col>
                    <Col>
                        <img src={churchimg} className="home-event-card img" alt="" />
                        <Row className="textstyle">New vaccine for cattle protects
                            <div> against fetal calf loss from</div></Row>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={5}></Col>
                    <Col xs={2}>
                        <button className="viewbutton2">View all
                            <img src={arrowimg} alt="arrow"></img>
                        </button>
                    </Col>
                    <Col xs={5}></Col>
                </Row>
            </Row>
            <Row className="mt-5"></Row>
            <Row className="mt-2 pagecolor">
                <Row className="mt-5"></Row>
                <Col xs={4}></Col>
                <Col xs={4}>
                    <Row className="pink-font">Volunteers & Donor</Row>
                    <Row className="fs-45">Meet the people</Row>
                    <Row className="fs-40">running the initiative</Row>
                </Col>
                <Col xs={4}></Col>
                <Row className="mt-5"></Row>
                <Row className="mt-5"></Row>
                <Row className="">
                    <Col xs={4} className="home-donor-tab-active">OUR WONDERFUL VOLUNTEERS</Col>
                    <Col xs={4} className="home-donor-tab-active">OUR BRAND AMBASSADORS</Col>
                    <Col xs={4} className="home-donor-tab-active">OUR DONORS</Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <img src={volunteerimg} className="" alt="" />
                    </Col>
                    <Col xs={3}>
                        <img src={volunteerimg} className="" alt="" />
                    </Col>
                    <Col xs={3}>
                        <img src={volunteerimg} className="" alt="" />
                    </Col>
                    <Col xs={3}>
                        <img src={volunteerimg} className="" alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} className="fs-20">Volunteer 1</Col>
                    <Col xs={3} className="fs-20">Volunteer 2</Col>
                    <Col xs={3} className="fs-20">Volunteer 3</Col>
                    <Col xs={3} className="fs-20">Volunteer 4</Col>
                    <Row className="mt-5"></Row>
                </Row>
            </Row>
            <Row>
                <Row className="mt-5"></Row>
                <Col xs={1}></Col>
                <Col xs={1} className="fs-200">WE ARE ACERTIFIED NGO</Col>
                <Col></Col>
                <Col className="majinestyle"> <img src={circlesmallimg} className="smallcircle" alt="" />GlowUp</Col>
                <Col className="majinestyle"> <img src={circlesmallimg} className="smallcircle" alt="" />majine</Col>
                <Col className="majinestyle"> <img src={circlesmallimg} className="smallcircle" alt="" />GlowUp</Col>
                <Col></Col>
            </Row>
        </>
    )
}
export default Ashamaa