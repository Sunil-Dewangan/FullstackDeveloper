import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
//import Iglogo from './images/Iglogo.png';
import { Row, Col } from "react-bootstrap"

const Navigation = () => {
  return (

    <>
      <Row >
        <Col>
          <Navbar.Brand href="#home">
            <Row className="navlogo">
              {/* <img src={Iglogo} alt="" /> */}
            </Row>
          </Navbar.Brand>
        </Col>
        <Col>
          <Nav.Link href="#Reachooks">internship</Nav.Link>
        </Col><Col>
          <Nav.Link href="#Reachooks">Online Training</Nav.Link>

        </Col>
        <Col>
          <Nav.Link href="#Reachooks">Career Conselling</Nav.Link>
        </Col><Col>
          <Nav.Link href="#Reachooks">Test Your Knownledge</Nav.Link>
        </Col>

      </Row>









      <Navbar bg="dark" variant="dark">

        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Resume</Nav.Link>
          <Nav.Link href="#features">My Application</Nav.Link>
          <Nav.Link href="#pricing">Test Your Knowledge</Nav.Link>

        </Nav>

      </Navbar>

    </>
  )
}

export default Navigation
