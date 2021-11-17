import React from "react"

import {Navbar, Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

const Navigation = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">                
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Secondpage">Second page</Nav.Link>
                   
                </Nav>

            </Navbar>
        </>
    )
}

export default Navigation