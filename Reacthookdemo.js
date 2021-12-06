import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"
import Navigation from "./Navigation"

const Reacthooksdemo = () => {

    const [count, setCount] = useState(0)

    const [fullname, setFullname] = useState("")

    const [show, setShow] = useState(false)

    console.log(show)

    return (
        <>
            <Row>
                <Navigation />
            </Row>

            <Row>
                <Col></Col>
                <Col>
                    <Row className="mt-5">
                        Counter: {count}
                    </Row>
                    <Row className="mt-5">
                        Click the below button to increase the counter
                    </Row>
                    <Row >
                        <button className="loginbutton"
                            onClick={() => setCount(count + 1)}
                        >Click here</button>
                    </Row>

                    <Row className="mt-5">
                        Student Name: {fullname}
                    </Row>
                    <Row className="mt-3">
                        <input type="text" placeholder="Enter Full name" className="logininputfield"
                            onChange={(e) => setFullname(e.target.value)}
                        />
                    </Row>

                    <Row className="mt-5">
                        {
                            show ?
                            "Show this component on the click of the show button"
                                :
                                null
                        }
                    </Row>

                    <Row >
                        <button className="loginbutton"
                            onClick={() => setShow(true)}
                        >Show</button>
                    </Row>

                </Col>
                <Col></Col>
            </Row>
        </>
    )
}

export default Reacthooksdemo 