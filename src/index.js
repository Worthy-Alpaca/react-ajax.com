import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './modules/essential modules/navbar';
import Landing_page from './modules/landing_page';
import Command_page from './modules/commands';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
/* import * as serviceWorker from './serviceWorker'; */

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Landing_page} />
        <Route path='/commands' component={Command_page} />
      </Switch>      
    </React.StrictMode>
  </Router>,  
  document.getElementById('root')
);

/* serviceWorker.unregister(); */
