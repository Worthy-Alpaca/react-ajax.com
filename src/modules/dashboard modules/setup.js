import React, { Component } from 'react';
//import CSS
import './setup.css';
//import authentification modules
import AuthHelperMethods from '../../components/AuthHelperMethods';
//Import component to protect the page
import withAuth from '../../components/withAuth';

class Setup_Page extends Component {

    //new Auth instance
    Auth = new AuthHelperMethods();

    state = {
        username: "",
        password: "",
        server: []
    }

    _showserver = async () => {
        const test = await fetch(process.env.REACT_APP_API_ADDRESS + '/discord/showserver', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'auth-token': this.Auth.getToken()
            },
            body: JSON.stringify({
                server_id: this.props.confirm._id
            })
        }).then(function (response) {
            return response.json();
        })
        if (test.error) {
            console.log(test.error)
        }
        this.setState({
            server: test
        })
    }

    render() {

        let name = null;
        //console.log(this.props.confirm, "1")

        if (this.props.confirm) {
            name = this.props.confirm._id;
        }

        return (
            <div style={{color: 'white'}}>
                <h1>Logged in as {name}</h1>
                <h1>This is where we configure the setup process</h1>
                <button onClick={this._showserver}>Get Server info</button> 
                <p>{this.state.server.greeting}</p>
            </div>
        );
    }

}

export default withAuth(Setup_Page);