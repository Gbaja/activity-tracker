import React, { Component } from 'react';
import {Link} from "react-router-dom"

import Header from "./Header"
import firebase from "../firebase";

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            date: '',
            notes: '',
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
            notes: this.state.notes
        }
        itemsRef.push(data);
        this.setState({
            date: '',
            notes: ''
        });
    }

    render() {
        return <div className="app">
            <Header />
            <div className="container">
                <section className='display-item'>
                    <button>
                        <Link className="anchor_tags" to="/activities"> View past logs</Link>
                    </button>
                </section>
                <section className="add-item">
                    <form onSubmit={this.handleSubmit}>
                        <input type="date"
                            name="date"
                            onChange={this.handleChange}
                            value={this.state.date} />
                        <input type="text"
                            name="notes"
                            placeholder="What are you doing?"
                            onChange={this.handleChange}
                            value={this.state.notes} />
                        <button>Save</button>
                    </form>
                </section>
               
            </div>
           
        </div>;
    }
}
export default Landing;