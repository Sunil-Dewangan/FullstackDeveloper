import React from "react"
import logo from './logo.svg';
import './App.css';

import Homepage from "./Components/Homepage"
import Secondpage from "./Components/Secondpage"

import {Container} from "react-bootstrap"

function App() {

  //alert("")

  /*console.log("This is the part of console written above return")*/

  return (

    <div className="App">
      <Container fluid>
      <Homepage />
      <Secondpage/>
      </Container>
    </div>

  );
}

export default App;
