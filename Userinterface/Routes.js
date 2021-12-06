import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Homepage from "../Componentss/Homepage"
import Secondpage from "../Componentss/Secondpage"


const Routes = () => {

    return (
        <HashRouter>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Secondpage" component={Secondpage} />
            
        </HashRouter>
    )
}

export default Routes