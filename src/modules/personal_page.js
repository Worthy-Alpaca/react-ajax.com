import React, { Component } from 'react';
import { useRouteMatch, Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
//Import Navbar
import Navbar from './essential modules/navbar';
import Setup_Page from './dashboard modules/setup';
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
        let name = null;
        //console.log(this.props.confirm, "1")

        if (this.props.confirm) {
            name = this.props.confirm._id;
        }

        

        return (
            <div className="App">
                <Navbar />
                <div className="top-section">
                    <h1>Welcome, {name}</h1>
                </div>
                <div className="bottom-section">
                    <button onClick={this._handleLogout}>Logout</button>
                </div>
                <Subpages />
            </div>
        );
    }
}

function Subpages() {
    let { path, url } = useRouteMatch();

    return (
        <Router>
            <div>
                <Link to={`${url}/setup`}>Setting up the bot</Link>

                <Switch>
                    <Route exact path={`${path}/setup`} component={Setup_Page}/>
                </Switch>
            </div>
        </Router>
    )
}

export default withAuth(Personal_Page);