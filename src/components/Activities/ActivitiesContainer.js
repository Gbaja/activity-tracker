import React, { Component } from "react";

import Activities from "./Activities";
import firebase from "../../firebase";

class ActivitiesContainer extends Component {
    constructor() {
        super();
        this.state = { 
            loading: false,
            items: [] 
        };
    }

    componentDidMount() {
        const itemsRef = firebase.database().ref("items");
        this.setState({loading: true}, ()=>{
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
                    items: newState,
                    loading: false
                });
            });
        });
        
    }

    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    }
    render() {
        return (
            <Activities 
            activities={this.state.items} 
            removeItem={this.removeItem} 
            loading={this.state.loading}
            />
        )
    }
}

export default ActivitiesContainer;