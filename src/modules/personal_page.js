import React, { Component } from 'react';


/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from '../components/AuthHelperMethods';
//Our higher order component
import withAuth from '../components/withAuth';

class Personal_Page extends Component {

    Auth = new AuthHelperMethods();

    /* Create a new instance of the 'AuthHelperMethods' compoenent*/
    state = {
        username: "",
        password: ""
    }

    /* Here will want to add a method to log the user out upon clicking 'Logout' */
    _handleLogout = () => {
        this.Auth.logout()        
        this.props.history.replace('/');
    }

    //Render the protected component
    render() {
        let name = null;
        console.log(this.props.confirm, "1")

        //This will be null until we set up authentication...
        if (this.props.confirm) {
            name = this.props.confirm._id;
        }

        return (
            <div className="App">
                <div className="main-page">
                    <div className="top-section">
                        <h1>Welcome, {name}</h1>
                    </div>
                    <div className="bottom-section">
                        <button onClick={this._handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        );
    }
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.

export default withAuth(Personal_Page);