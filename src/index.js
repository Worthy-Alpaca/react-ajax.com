import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
//Import React router
import { BrowserRouter, Switch, Route, IndexRoute, Redirect, useHistory, useLocation } from 'react-router-dom';
//Import Pages
import './index.css';
import Login_Page from './modules/login';
import Landing_page from './modules/landing_page';
import Personal_Page from './modules/personal_page';
import Command_page from './modules/commands';
import Error_Page from './modules/errors/404';
//.env Import
const dotenv = require('dotenv');
dotenv.config();

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path='/' exact component={Landing_page} />
        <Route path='/commands' component={Command_page} />
        <Route path='/login' component={Login_Page} />
        <Route path='/dashboard' component={Personal_Page} />
        <Route component={Error_Page} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
