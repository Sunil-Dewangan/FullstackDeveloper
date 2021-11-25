
import './App.css';

import { HashRouter ,Routes ,Route } from 'react-router-dom';
import Secondwebpage from "./assignment/Secondwebpage";
import Webpage from "./assignment/Webpage";
function App() {
  return (
    <>
   <HashRouter>
     <Routes>
   <Route exact path="/" element={<Webpage/>}/>
            <Route exact path="/Secondwebpage" element={<Secondwebpage/>}/>
      </Routes>      
  </HashRouter>
 
    </>
  )
}

export default App;
