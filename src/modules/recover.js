import React, { Component } from "react";
//import picture
import AJAX from '../assets/AJAX.PNG';
//import Authentification modules
import AuthHelperMethods from '../components/AuthHelperMethods';
//import CSS
import './login modules/login.css'

class Recover extends Component {

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

        fetch(process.env.REACT_APP_API_ADDRESS + `/website/recover?guildID=${this.state.username}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            }
        }).then(res => {
            console.log(res)
            if (res.status === 404) {
                const error_message = document.getElementById('error_message');
                const input1 = document.getElementById('input1');
                input1.classList.add('border_red');
                error_message.style.display = 'block';
            } else if (res.status === 200) {
                const content01 = document.getElementById('content01');
                const content02 = document.getElementById('content02');
                const success_message = document.getElementById('content03');
                content01.style.display = 'none';
                content02.style.display = 'none';
                success_message.style.display = 'block';
            }
        })
        
    }

    cancelForm = () => {
        this.props.history.replace('/');
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
                    <h2 id='error_message' style={{ textAlign: 'center', display: "none", color: "red" }}>That guild does not exist in my database</h2>
                    <div className="container" id="content01">
                        <h2 style={{ textAlign: 'center', color: "white" }}>Please submit your Guild-ID</h2>
                        <label htmlFor="username"><b style={{ color: "white" }}>Username</b></label>
                        <input id="input1" type="text" placeholder="Enter Guild-ID" name="username" onChange={this._handleChange} required />

                        <button onClick={this.handleFormSubmit}>Submit</button>

                    </div>

                    <div className="container" id="content02">
                        <button type="button"
                            className="cancelbtn" onClick={this.cancelForm}>Cancel</button>
                    </div>
                    <div className="container" id="content03" style={{display: "none"}}>
                        <h2 id='success_message' style={{ textAlign: 'center', color: "white" }}>A message has been sent to the guild owner</h2>
                        <button onClick={this.cancelForm}>OK</button>
                    </div>
                </form>

            </React.Fragment>
        );
    }

}

export default Recover;