import React from 'react';
import axios from 'axios';
//Import Pages
import './index.css';
import Login_Page from './modules/login';
import Landing_page from './modules/landing_page';
import Personal_Page from './modules/personal_page';
import Command_page from './modules/commands';
import Error_Page from './modules/errors/404';
//Import React router
import { BrowserRouter as Router, Switch, Route, IndexRoute, Redirect, useHistory, useLocation } from 'react-router-dom';
//.env Import
const dotenv = require('dotenv');
dotenv.config();

const verify = () => {
    axios.post(process.env.REACT_APP_API_ADDRESS + '/verify')
    console.log("verify here")
}

function App() {
    return (
        <Router >
            <React.StrictMode>
                <Switch>
                    <Route path='/' exact component={Landing_page}/>
                    <Route path='/commands' component={Command_page}/>
                    <Route path='/login' component={Login_Page}/>
                    <Route path='/dashboard' component={Personal_Page}/>
                    <Route component={Error_Page} />
                </Switch>
            </React.StrictMode>
        </Router>
    );
}



export default App;