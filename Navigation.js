import React from "react"

import {Navbar,Nav} from "react-bootstrap"
import {Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import logoo from "./image2/ashamaalogo.png"


const Navigation = () => {

    return (
        <>
             
             {/*<Navbar bg="dark" variant="dark">*/}
            <Navbar bg="white" variant="white">   <Col>  <img src={logoo} className="logoo" alt=""/></Col>          
                <Nav className="me-auto"> 
                   {/*} <Nav.Link as={Link} to="/Homepage">Home page</Nav.Link>*/}
                     <Nav.Link as={Link} to="/Webpage">Web page</Nav.Link>
                    {/*<Nav.Link as={Link} to="/Secondwebpage">Secondweb page </Nav.Link>
                   <Nav.Link as={Link} to="/Thirdwebpage">Thirdweb page</Nav.Link>
                   <Nav.Link as={Link} to="/Secondpage">Second page</Nav.Link>
                   <Nav.Link as={Link} to="/Fifthpage">Fifth page</Nav.Link>*/}
                   {/*The all above statement for navigation & routing*/}
                  {/*<Nav.Link as={Link} to="/Reacthooks">React hooks</Nav.Link>*/}
                  <Nav.Link as={Link} to="/Assignmentashamaa">Assignment ashamaa</Nav.Link>
                 



                   
                </Nav>

            </Navbar>
        </>
    )
}

export default Navigation;