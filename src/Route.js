import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Homepage from "./Component/Homepage"
import Secondpage from "./Component/Secondpage"
import Reacthooksdemo from "./Component/Reacthooksdemo"
import Student from "./Component/Student"

const Routes = () => {

    return (
        <HashRouter>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Secondpage" component={Secondpage} />
            <Route exact path="/Reacthooksdemo" component={Reacthooksdemo} />
            <Route exact path="/Student" component={Student} />
          </HashRouter>
    )
}

export default Routes