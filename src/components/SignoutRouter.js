import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from "react";

import Home from "./Home"

function SignedOutRouter(){
    return (<BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route render={() => <Redirect to="/" />} />
        </Switch>
    </BrowserRouter>
    )
}
export default SignedOutRouter