import React, {Component, Fragment} from "react"
import { withRouter } from "react-router";

import {auth} from "../firebase"
import "./App.css";

class Header extends Component {
    logout = () =>{
        console.log("bye");
        
        auth.signOut()
            .then(() => {
                this.props.handleLogout();
                this.props.history.push(`/`);
            });
    }
    render(){

        return (
            <Fragment>
                <header>
                    <div className="header_container">
                        <h1>{`${this.props.user.displayName}`} daily logs</h1>
                            <button onClick={this.logout}>Logout</button>
                    </div>
                </header>
                </Fragment>
        )
    }
}

export default withRouter(Header)