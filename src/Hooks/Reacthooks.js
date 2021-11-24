import React from "react";
//import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Navigation from "../Component/Navigation";

const Reacthooks = () => {
const{count,setCount}=useState(0)
    return (
        < >
            <Row><Navigation /></Row>
            <Row>
                <Col></Col>
                <Col>
                    <Row className="mt=5">
                        Counter:{count}
                    </Row>
                    <Row>
                        <button className=" mt-5 button"
                        onClick={() => setCount(count + 1)}
                        >Click</button>
                    </Row>
                </Col>
                <Col></Col>
            </Row>

        </>
    )

}
export default Reacthooks