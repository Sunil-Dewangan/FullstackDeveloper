import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Homepage from "./Component/Homepage"
import Secondpage from "./Component/Secondpage"
import Thirdpage from "./Component/Thirdpage"

const Routes = () => {

    return (
        <HashRouter>

            <Route exact path="/" component={Homepage} />
            <Route exact path="/Secondpage" component={Secondpage} />
            <Route exact path="/Thirdpage" component={Thirdpage} />
        </HashRouter>
    )
}

export default Routes