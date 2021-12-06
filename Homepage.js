import React from "react"
import Secondpage from "./Secondpage"
import Navigation from "./Navigation"
import "./Styles.css"

import { Row, Col } from "react-bootstrap"

const Homepage = () => {

    return (

        <>

            <Navigation />

            <Row>
                <Col xs={6} className="fontstylings">
                    This is first column
                </Col>

                <Col xs={6} className="fontstylings">
                    This is second column
                </Col>

                {/*<Col >
                    This is third column
                </Col>

                <Col >
                    This is fourth column
                </Col>*/}
            </Row>


        </>

    )
}

export default Homepage