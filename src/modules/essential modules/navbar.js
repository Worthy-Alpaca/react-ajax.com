import React, { Component } from 'react';
//import CSS
import './navbar.css';
//Import different Navbars
import NavbarContent from './navbar_content';
import NavbarContentLoggedIn from './navbar_content_loggedin';
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
        <NavbarContentLoggedIn />
      )
    } else {
      return (
        <NavbarContent />
      )
    }    
  }
}

export default Navbar;