import React, {Component} from "react";
import {withRouter} from "react-router"
import { auth, provider } from "../firebase.js";

class Home extends Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login() {
        console.log("hey")
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                if(user){
                    this.props.history.push(`/landing`)
                } 
            });
    }

    render(){
        return (
            <div className="home_container">
                <h1>Activity tracker</h1>
                <p>See how productive you are by keeping a online log entry of what you get up to each day</p>
                <button onClick={this.login}>Log in with Google</button>
            </div>
        )
    }
}

export default withRouter(Home);