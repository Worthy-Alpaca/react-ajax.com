import React, {Component} from 'react';
//Import Pages
import './index.css';
import Login_Page from './modules/login';
import Landing_page from './modules/landing_page';
import Personal_Page from './modules/personal_page';
import Command_page from './modules/commands';
import Error_Page from './modules/errors/404';
//Import React router
import { BrowserRouter as Router, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
//component to protect the page
import withAuth from './components/withAuth';
//.env Import
const dotenv = require('dotenv');
dotenv.config();

export default function App() {

    let { path, url } = useRouteMatch();

    console.log(this.props.confirm)

    return (
        <Router >
            <React.Fragment>
                <Switch>
                    <Route path={`/`} exact component={Landing_page} />
                    <Route path={`/commands`} component={Command_page} />
                    <Route path={`/login`} component={Login_Page} />
                    <Route path={`/dashboard`} component={Personal_Page} />
                    <Route component={Error_Page} />
                </Switch>
            </React.Fragment>
        </Router>
    );
}
