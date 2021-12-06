import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"
import Navigation from "./Navigation"

const Reacthooksdemo = () => {
    const [count, setCount] = useState(10);
    const [name, setName] = useState("")
    const [show, setShow] = useState(false)
    //console.log(count)
    return (
        <>
            <Row>
                <Navigation />
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Row className="mt-5"> Count: {count} </Row>
                    <Row className="mt-5"></Row>
                    <Row >Click here below the button to increase the value</Row>
                    <Row className="mt-2">
                        <button className="loginButton" onClick={() => setCount(count + 5)} >Click here</button>
                    </Row>
                    <Row className="mt-5"></Row>
                    <Row >Student Name :</Row>
                    <Row className="mt-2">
                        <input type="text" placeholder="Student Name" className="email"
                            onChange={(e) => setName(e.target.value)} />
                    </Row>
                    <Row className="mt-5"></Row>
                    <Row >
                        {
                            show ?
                            "Show when you click the button"
                                :
                                null
                        }</Row>
                    <Row className="mt-2">
                        <button className="loginButton" onClick={() => setShow(true)} >Show</button>
                    </Row>
                </Col>
                <Col></Col>
            </Row>

        </>
    )
}
export default Reacthooksdemo