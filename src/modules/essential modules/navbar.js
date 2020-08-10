import React, { Component } from 'react';
//import CSS
import './navbar.css';
//Import different Navbars
import Navbar_Content from './navbar_content';
import Navbar_Content_LoggedIn from './navbar_content_loggedin';
//import authentification modules
import AuthHelperMethods from '../../components/AuthHelperMethods';
//.env Import
const dotenv = require('dotenv');
dotenv.config();


class Navbar extends Component {

  Auth = new AuthHelperMethods();
  
  state = {
    username: "",
    password: "",
  }

  _handleLogout = () => {
    this.Auth.logout()
    this.props.history.replace('/');
  }

  componentWillMount() {
    //redirecting IF already logged in
    if (this.Auth.loggedIn()) {
      //console.log('redirect to dashboard')
      this.setState({
        login: true
      })
    }
  }

  render() {

    if (this.state.login) {
      
      return (
        <Navbar_Content_LoggedIn />
      )
    } else {
      return (
        <Navbar_Content />
      )
    }    
  }
}

export default Navbar;