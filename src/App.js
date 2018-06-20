import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./Landing"
import Activities from "./Activities"

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
          component={Activities} />
          }
      />
      </Switch>
    </BrowserRouter>
    )
  }
}
export default App;