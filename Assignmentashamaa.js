import React from "react"

import { Col, Row } from "react-bootstrap"
import Navigation from "./Navigation"
import "./Newstyle.css"
import leftpic from "./image3/fleftsidepic.png"
import rightpic from "./image4/rightsideboy.png"
import sdpagebook from "./image5/spagebook.png"
import sdpagemind from "./image6/spagemind.png"
import sdpagebox from "./image7/apagebox.png"
import sdpagerectrangle from "./image8/spagerectrangle.png"
//import thirdpgcrl from "./image11/halfcircle.svg"
//import thirdpagegbimg from "./imagesss/thirdpagegirlsboys"
//import { Box, Checkbox, Radio } from "@material-ui/core";
import { BsFillCheckCircleFill, } from "react-icons/bs";
//import { Box, Checkbox, Radio } from "@material-ui/core";

const fun = () => {



    return (

        <>

            <Row><Navigation /></Row>


            <Row className="firstrow mt-1">
                            <Col sm={2} className="leftpic">
                                {/* First column */}
                                <img src={leftpic} alt="" sm={5} className="leftpic" />
                            </Col>

                            <Col sm={5}>
                                {/* Second column */}
                                <Row className="Rowh"> </Row>
                                <Row className="Frow"></Row>
                                <Row sm={2} className="uppertext">
                                    Helping Children
                                </Row >
                                <Row sm={4} className="mx-4 middletext">
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
                                       {/*} <button className="button">
                                            Learn More
                                           </button>*/}
                                   {/*} </Col>
                                    <Col>
                                        <button className="button2" onClick={() => { (setDonate(true)) }}  >
                                            Donate
                                        </button>*/}
                                        </Col>
                                </Row>
                            </Col>
                            <Col sm={5}>
                                {/* Third column */}
                                <Row className="mt-5"> </Row>
                                <Row className="mt-5"> </Row>
                                <Row className="mt-5"> </Row>
                                <Row className="mt-1"> </Row>

                                <img src={rightpic} alt="left" className="rightimage" />

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
                                        <img src={sdpagebook} alt="" className="sdpagebook" />
                                        <Row><img src={sdpagebox} alt=""className="sdpagebox"/></Row>
                                    </Col>
                                    <Col><img src={sdpagemind} alt="" className="sdpagemind"/>
                                    <Row><img src={sdpagerectrangle} alt="" className="sdpagerectrangle"/> </Row>
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
                            <Row className="  mt-5 "></Row>

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

{/*<Row>
    <Col> <img src={thirdpagegbimg} alt="" className="thirdpagegirls"/></Col>
</Row>*/}
                              {/*} <Col sm={5} className="mx-5 mt-5">
                               <Row> <img src={thirdpgcrl} alt="" className="thirdpagecircle" />
                               </Row>
                               
                                    </Col>*/}

                           
                               
                            </Row>
                            <Row>
                                <Col sm={10}></Col>
                                <Col>
                                    <button className="viewallbutton">
                                        View all -
                                    </button>
                                </Col>
                                
                                </Row>
                                <Row className="fourthRow mt-5 "></Row>
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
                                <Row className="fifthrow mt-5 ">
                            <Col sm={8} className="mt-3">
                                <Row className="forthpagevision mt-5 mx-5">
                                    WAHT TO HELP US IN OUR MISSION?
                                </Row>
                                <Row className="forthpagesdtext mt-4 mx-5">
                                    Do you want to join the initiative
                                </Row>
                                <Row className="thirdpgthrdtext mx-5">
                                    as a partner or a volunteer?
                                </Row>
                                <Col className="mx-4">
                                                    Partners
                                                </Col>
                            </Col>
                            </Row>
                                {/*<Row className=" mt-3 mx-5 ">
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
                                </Row>*/}
                                 </Col>
                             <Col sm={4} className="mt-5">
                                <Row className="mt-5"></Row>
                                <Row>
                                    <Col className="mt-5"/>
                                        <button className="fifthpagebutton">
                                            <Row>
                                                <Col className="mx-4">
                                                    Partners
                                                </Col>
                                                <Col >
                                                    <BsFillCheckCircleFill className="writesign" />
                                                </Col>
                                            </Row>
                                        </button>
                                        </Row>
                                    
                                    </Col>
                                    <Row className="SixRow mt-5 ">
                            <Row>
                                <Col className="mx-5 mt-5 News">
                                    NEWS AND EVENTS
                                </Col>
                            </Row>
    
                            <Row className=".mx-5 mt-5 fifthpagetext">
                                Latest updates
                            </Row>
                            </Row>
                            

                            
                           

           
        
        </>
  )
}
                export default fun