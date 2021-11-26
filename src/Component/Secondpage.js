import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { Col, Row } from "react-bootstrap"
//import Secondpageimg from "./Images/Iglogo.png"


const Secondpage = () => {

    const [getapiresponse, setGetapiresponse] = useState("")

    const [getarrayres, setGetarrayres] = useState([])

    useEffect(() => {

        fetch("https://reqres.in/api/users/2",
            { method: 'GET' }
        )
            .then(
                (apipromise) => {
                    //console.log(apipromise)
                    return apipromise.json()
                }
            )
            .then(
                (apidata) => {
                    //console.log(apidata.data)
                    setGetapiresponse(apidata.data)
                }
            )
    }, [])

    useEffect(() => {

        fetch("https://reqres.in/api/users?page=2",
            { method: 'GET' }
        )
            .then(
                (apipromise) => {
                    //console.log(apipromise)
                    return apipromise.json()
                }
            )
            .then(
                (apidata) => {
                    //console.log(apidata.data)
                    setGetarrayres(apidata.data)
                }
            )
    }, [])

    //console.log(getarrayres)

    return (
        <>
            <Row>
                <Navigation />
            </Row>
            <Row>
                The responce from single user api
            </Row>
            <Row className="fontstylings mt-3">
                First name: {" "} {getapiresponse.first_name}
            </Row>
            <Row className="fontstylings">
                Last name: {" "} {getapiresponse.last_name}
            </Row>
            <Row className="fontstylings">
                Email id: {" "} {getapiresponse.email}
            </Row>
            <Row>
                <Col>
                    <img src={getapiresponse.avatar} width="200px" height="200px" alt="" />
                </Col>
            </Row>

            <Row className="mt-5">
                The responce from user list api
            </Row>

            {
                getarrayres.map((key) => (
                    <>
                        <Row className="fontstylings mt-3">
                            First name: {" "} {key.first_name}
                        </Row>
                        <Row className="fontstylings">
                            Last name: {" "} {key.last_name}
                        </Row>
                        <Row className="fontstylings">
                            Email id: {" "} {key.email}
                        </Row>
                        <Row>
                            <Col>
                                <img src={key.avatar} width="200px" height="200px" alt="" />
                            </Col>
                        </Row>
                    </>
                ))
            }

        </>
    )
}

export default Secondpage
