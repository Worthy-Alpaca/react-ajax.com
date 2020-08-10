import React, { Component } from 'react';
//import CSS
import './setup.css';
//Import Navbar
import Navbar from '../essential modules/navbar';
//import authentification modules
import AuthHelperMethods from '../../components/AuthHelperMethods';
//Import component to protect the page
import withAuth from '../../components/withAuth';

class Setup_Page extends Component {

    //new Auth instance
    Auth = new AuthHelperMethods();

    state = {
        username: "",
        password: ""
    }

    render() {

        let name = null;
        //console.log(this.props.confirm, "1")

        if (this.props.confirm) {
            name = this.props.confirm._id;
        }

        return (
            <div>
                <h1>Logged in as {name}</h1>
                <h1>This is where we configure the setup process</h1>
            </div>
        );
    }

}

export default withAuth(Setup_Page);