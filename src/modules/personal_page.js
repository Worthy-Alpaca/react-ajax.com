import React, { Component } from 'react';
//Import Navbar
import Navbar from './essential modules/navbar';

/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from '../components/AuthHelperMethods';
//Our higher order component
import withAuth from '../components/withAuth';

class Personal_Page extends Component {

    //new Auth instance
    Auth = new AuthHelperMethods();

    state = {
        username: "",
        password: ""
    }

    //logout the User
    _handleLogout = () => {
        this.Auth.logout()        
        this.props.history.replace('/');
    }

    //Render the protected component
    render() {
        let name = null;
        //console.log(this.props.confirm, "1")

        if (this.props.confirm) {
            name = this.props.confirm._id;
        }

        return (
            <div className="App">
                <Navbar/>
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

export default withAuth(Personal_Page);