import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from "react";

import Landing from "./Landing"
import ActivitiesContainer from "./Activities/ActivitiesContainer"

const redirectToLanding = () => <Redirect to="/landing" />

const renderLanding = (user, handleLogout) => () =>
    <Landing user={user} handleLogout={handleLogout} />

const renderActivities = (user, handleLogout) => () => (
  <ActivitiesContainer user={user} handleLogout={handleLogout} />
);

function SignedInRouter({user, handleLogout}) {
    return(
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={redirectToLanding}
                />

                <Route
                    exact
                    path="/landing"
                    render={renderLanding(user, handleLogout)}
                />

                <Route
                    exact
                    path="/activities"
                    render={renderActivities(user, handleLogout)}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default SignedInRouter