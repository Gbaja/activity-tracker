import React, { Component } from 'react';

import SignedOutRouter from "./SignoutRouter"
import SignedInRouter from "./SignedInRouter"
import { auth } from "../firebase.js";
import Loading from "./Loading"
require("dotenv").config();

class App extends Component {
  state = {
    loading: true,
    user: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => this.setState({ loading: false, user }));
  }
  
  handleLogout = () => this.setState({ user: null });

  render() {
    const { loading, user } = this.state;

    if (loading) {
      return (
        <Loading/>
      );
    }
    else if (user) {
      return (
        <SignedInRouter
          handleLogout={this.handleLogout}
          user={user}
        />
      );
    }
    else {
      return <SignedOutRouter />;
    }
  }
}
export default App;