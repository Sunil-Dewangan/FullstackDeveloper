import React from "react"

import {Navbar, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

const Navigation = () => {

    return (
        <>
            <Navbar bg="dark" variant="blue">                
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Webpage</Nav.Link>
                    <Nav.Link as={Link} to="/Secondwebpage">Secondwebpage</Nav.Link>
                   
                </Nav>

            </Navbar>
        </>
    )
}

export default Navigation