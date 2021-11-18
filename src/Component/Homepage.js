import React from 'react'
import { Row, Col } from "react-bootstrap"


const Homepage = () => {
    return (
        <>
            <row >
  <Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>
  </Row>
                <Row >
                    <Col lg={6} >We make intership </Col>
                </Row>
                <Row>
                    <Col>easy for a batch </Col>
                </Row>
                <Row>
                    <Col>(01)Bulk resume upload</Col>
                </Row>
                <Row>
                    <Col>Upload multiple resumes in one go</Col>
                </Row>
                <Row>
                    <Col>(02)Carrer concelling </Col>
                </Row>
                <Row>
                    <Col>provide suggestions from experts for your students</Col>
                </Row>
                <Row>
                    <Col>(03)1400+ employee </Col>
                </Row>
                <Row>
                    <Col>Choose from 1400+ companies to set your students</Col>
                </Row>





            </row>

        </>
    )
}

export default Homepage

