import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import AshaLogo from './images/AshaLogo.png'
import { Row, Col } from "react-bootstrap"

const Navigation = () => {
    return (

        <>
            <Row >
                <Col sm={5}>
                    <Navbar.Brand href="#home">
                        <Row className="navlogo">
                            <img src={AshaLogo} alt="" />
                        </Row>
                    </Navbar.Brand>

                </Col>
                <Col>
                    <Nav.Link href="#Reachooks" className="">Learn more about us</Nav.Link>
                </Col><Col>
                    <Nav.Link href="#Reachooks">Get involved</Nav.Link>

                </Col>
                <Col>
                    <Nav.Link href="#Reachooks">latest Updates</Nav.Link>
                </Col><Col>
                    <Nav.Link href="#Reachooks">Contact us</Nav.Link>
                </Col>

            </Row>
        </>
    )
}

export default Navigation