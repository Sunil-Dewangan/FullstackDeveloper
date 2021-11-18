import React from "react";
import Navigation from "./Navigation";
import {Row} from "react-bootstrap"
import Secondpageimg from "./Images/Iglogo.png"


const Secondpage = () => {
    return (
        <>
            <Row>
                <Navigation />
            </Row>
            <Row className="fontstylings">
                This is the second page
            </Row>
            <Row>
                <img src={Secondpageimg} className="secondpageimgstyle" alt="" />
            </Row>

        </>
    )
}

export default Secondpage
