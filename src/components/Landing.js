import React, { Component, Fragment } from 'react';

import firebase, { auth } from "../firebase";
import NewActivityForm from "./Form"
import Header from "./Header"

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            notes: '',
            author: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const data = { 
            date: this.state.date, 
            notes: this.state.notes, 
            author: this.props.user.displayName 
        };
        itemsRef.push(data);
        this.setState({
            date: '',
            notes: '',
            author: ''
        });
    }

    render() {
        console.log("USER: ", this.props.user)
        return( <div className="app">
            <Fragment>
                <Header user={this.props.user} handleLogout={this.props.handleLogout}/>
                <div className="container">
                <NewActivityForm 
                    handleSubmit={this.handleSubmit} 
                    handleChange={this.handleChange} 
                    date={this.state.date} 
                    notes={this.state.notes}/>  
                </div>  
            </Fragment>
        </div>
        )
    }
}
export default Landing;