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
        this.itemsRef = firebase.database().ref("items");
    }



    componentWillMount() {
        this.setState({loading: true}, ()=>{
            this.itemsRef.on('value', (snapshot) => {
                const items = snapshot.val();
                const newState = Object.keys(items).map(key => ({
                    id: key,
                    date: items[key].date,
                    notes: items[key].notes,
                }))

                this.setState(previousState => ({
                    ...previousState,
                    items: newState,
                    loading: false,
                })
            )
            });
        });

        
    }

    componentWillUnmount() {
        this.itemsRef.off();
    }

    removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
    }

    changeIt = (array) => {
        return array.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);

        })
    }
    
    render() {
        return (
            <Activities 
            activities={this.changeIt(this.state.items)} 
            removeItem={this.removeItem} 
            loading={this.state.loading}
            />
        )
    }
}

export default ActivitiesContainer;