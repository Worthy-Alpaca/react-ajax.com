import React, { Component } from 'react';
//Import Navbar
import Navbar from './essential modules/navbar';
import SetupPage from './dashboard modules/setup';
//Import CSS
import './dashboard modules/setup.css';
//import authentification modules
import AuthHelperMethods from '../components/AuthHelperMethods';
//component to protect the page
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

        return (
            <div className="App">
                <Navbar />
                <div className="placeholder"></div>
                <div className="placeholder"></div>
                <div className="center" id="white">
                    <h1>Welcome to the Server Dashboard</h1>
                    <h2>Here you can currently see how your server is configured</h2>
                </div>
                <SetupPage/>
            </div>
        );
    }
}

export default withAuth(Personal_Page);