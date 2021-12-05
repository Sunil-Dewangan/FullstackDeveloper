import React from "react"

import {Navbar, Nav, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import "./newstyle.css"
import Ashamaaimg from "./image/ashamaa.png"
const Newnavigation = () => {

    return (
        <>
         <Row>
         <Col xs={1}></Col>
        <img src={Ashamaaimg} className="imgstyle" alt=""/>
       <Col>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="blue">
    <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"></Nav.Link>
      </Nav>
    <Nav>
       <Nav.Link href="#Learn More About Us">Learn More About Us</Nav.Link>
      <Nav.Link href="#Get involved">Get involved</Nav.Link>
      <Nav.Link href="#Latest Update">Latest Update</Nav.Link>  
      <Nav.Link eventKey={2} href="#Contact">
        Contact Us
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </Col>
            </Row>   
        </>
    )
}

export default Newnavigation