import React, { Component } from "react";
//import picture
import AJAX from '../assets/AJAX.PNG';
//import Authentification modules
import AuthHelperMethods from '../components/AuthHelperMethods';
//import CSS
import './login modules/login.css'

class Login extends Component {

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

        //handling the login with an API call
        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                }
                //console.log(this.context)
                this.props.history.replace("/dashboard");
            })
            .catch(err => {
                const error_message = document.getElementById('error_message');
                const input1 = document.getElementById('input1');
                const input2 = document.getElementById('input2');
                input1.classList.add('border_red');
                input2.classList.add('border_red');
                error_message.style.display = 'block';                
            }); 
    }

    componentWillMount() {
        //redirecting IF already logged in
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
                    <h2 id='error_message' style={{ textAlign:'center', display: "none", color: "red"}}>Password or Username incorrect</h2>
                    <div className="container">
                        <label htmlFor="username"><b style={{ color: "white" }}>Username</b></label>
                        <input id="input1" type="text" placeholder="Enter Server ID" name="username" onChange={this._handleChange} required />

                        <label htmlFor="password"><b style={{ color: "white" }}>Password</b></label>
                        <input id="input2" type="password" placeholder="Enter Password" name="password" onChange={this._handleChange} required />

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