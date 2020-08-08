import React, { Component } from "react";
import AJAX from '../assets/AJAX.PNG';

/* We want to import our 'AuthHelperMethods' component in order to send a login request */

import AuthHelperMethods from '../components/AuthHelperMethods';

import './login modules/login.css'


class Login extends Component {

/* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
    Auth = new AuthHelperMethods();
    

    state = {
        username: "",
        password: ""
    }

    /* Fired off every time the use enters something into the input fields */
    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {
        e.preventDefault();        

        /* Here is where all the login logic will go. Upon clicking the login button, 
        we would like to utilize a login method that will send our entered credentials over to the server for verification. 
        Once verified, it should store your token and send you to the protected route. */
        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                }
                //console.log(this.context)
                this.props.history.replace("/dashboard");
            })
            .catch(err => {
                alert(err);
            }); 
    }

    componentWillMount() {

        /* Here is a great place to redirect someone who is already logged in to the protected route */
        if (this.Auth.loggedIn()) {
            
            //console.log('redirect to dashboard')
            
            this.props.history.replace('/dashboard');
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="modal-content">
                    <div className="imgcontainer">
                        <img src={AJAX} className="avatar" alt='' />
                    </div>
                    <h1 style={{ color: "red" }}>This doesn't do anything yet</h1>
                    <div className="container">
                        <label htmlFor="username"><b style={{ color: "white" }}>Username</b></label>
                        <input type="text" placeholder="Enter Server ID" name="username" onChange={this._handleChange} required />

                        <label htmlFor="password"><b style={{ color: "white" }}>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" onChange={this._handleChange} required />

                        <button onClick={this.handleFormSubmit}>Login</button>
                        
                    </div>

                    <div className="container">
                        <button type="button"
                            className="cancelbtn"><a style={{ textDecoration: "none", color: "white" }} href="/">Cancel</a></button>
                        <span className="psw"><a style={{ textDecoration: "none", color: "white" }} href="#">Forgot password?</a></span>
                    </div>
                </form>
                
            </React.Fragment>
        );
    }

}

export default Login;