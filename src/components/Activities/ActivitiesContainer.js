import React, { Component, Fragment } from "react";

import Activities from "./Activities";
import firebase from "../../firebase";
import Header from "../Header"


class ActivitiesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: false,
            items: []
        };
        this.itemsRef = firebase.database().ref("items");
    }



    componentDidMount() {
        this.setState({loading: true}, ()=>{
            this.itemsRef.on('value', (snapshot) => {
                const items = snapshot.val();
                const newState = Object.keys(items).map(key => ({
                    id: key,
                    date: items[key].date,
                    notes: items[key].notes,
                    author: items[key].author
                })).filter((each) => {
                    return each.author === this.props.user.displayName; 
                })
                console.log(newState)
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
            <Fragment>
                <Header user={this.props.user} handleLogout={this.props.handleLogout} />
                 <Activities
                    activities={this.changeIt(this.state.items)}
                    removeItem={this.removeItem}
                    loading={this.state.loading}
                />
        </Fragment>
    );
    }

}

export default ActivitiesContainer;