import React, {Component} from "react";
import {Link} from "react-router-dom"

import Header from "./Header";
import firebase from "./firebase.js";

class Activities extends Component{
    constructor() {
        super();
        this.state = { items: [] };
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
    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    }
    render(){
       return <React.Fragment>
           <div className="app">
             <Header />
             <section className="display-item">
               <div>
                 <button>
                   <Link className="anchor_tags" to="/">
                     Back
                   </Link>
                 </button>
               </div>
               <div className="wrapper">
                 <ul>
                   {this.state.items.map(item => {
                     return <li key={item.id}>
                         <h3>Date: {item.date}</h3>
                         <p>Notes: {item.notes}</p>
                         <button
                           onClick={() => this.removeItem(item.id)}
                         >
                           Remove Item
                         </button>
                       </li>;
                   })}
                 </ul>
               </div>
             </section>
           </div>
         </React.Fragment>;
    }
}

export default Activities;