import React from "react"
import "./ashtaCss.css"
import {Navbar, Nav,Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import img1 from "./logo1.png"

const Navigation = () => {

    return (
        <>
        <Row>
          <Col xs={5} md={12}> <img src={img1} className="logo1 mt-5 " alt="" />
          </Col>
                                    </Row>
<Row>
         <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>Let more about us</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>Get involved</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>Latest update </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Contact Us
      </Nav.Link>
    </Nav.Item>
  </Nav>
  </Row>
          {/*  <Navbar bg="dark" variant="dark">                
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Secondpage">Second page</Nav.Link>
                    <Nav.Link as={Link} to="/Reacthooksdemo">React Hooks Demo</Nav.Link>
                    <Nav.Link as={Link} to="/Student">Student</Nav.Link>                               
                </Nav>
    </Navbar>*/}
        </>
    )
}

export default Navigation