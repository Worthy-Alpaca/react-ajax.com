import React from 'react';
import ReactDOM from 'react-dom';
//Import React router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Import Pages
import './index.css';
import Login_Page from './modules/login';
import Landing_page from './modules/landing_page';
import Personal_Page from './modules/personal_page';
import Command_page from './modules/commands';
import Error_Page from './modules/errors/404';
import Edit from './modules/dashboard modules/edit'
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
        <Route path='/dashboard/edit' component={Edit} />
        <Route component={Error_Page} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);
