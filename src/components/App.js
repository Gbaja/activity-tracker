import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./Landing"
import ActivitiesContainer from "./Activities/ActivitiesContainer"

class App extends Component {
  render() {
    return (<BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={Landing}/>
          }
        />
        <Route
          exact
          path="/activities"
          component={ActivitiesContainer} />
          }
      />
      </Switch>
    </BrowserRouter>
    )
  }
}
export default App;