import React, { Component } from 'react';
import './App.css';
import firebase from "./firebase.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      notes: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          date: items[item].date,
          notes: items[item].notes
        });
      }
      this.setState({
        items: newState
      });
    });
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

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    return <div className="app">
        <header>
          <div className="wrapper">
            <h1>Activity tracker</h1>
          </div>
        </header>
        <div className="container">
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
            value={this.state.notes}/>
              <button>Save</button>
            </form>
          </section>
        <section className='display-item'>
          <div className="wrapper">
            <ul>
              {this.state.items.map((item) => {
                return (
                  <li key={item.id}>
                    <h3>Date: {item.date}</h3>
                    <p>Notes: {item.notes}</p>
                    <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
        </div>
      </div>;
  }
}
export default App;