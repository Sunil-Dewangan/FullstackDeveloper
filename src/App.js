import logo from './logo.svg';
import './App.css';
//import Homepage from "./Homepage"
//import Secondpage from './Secondpage';
import Routes from './Route';
import { HashRouter } from "react-router-dom"
import { Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <Container fluid>
        <HashRouter>
          <Routes />
        </HashRouter>
      </Container>
    </>
  );
}

export default App;
