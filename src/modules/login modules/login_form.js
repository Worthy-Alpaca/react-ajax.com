import React from 'react';
import AJAX from '../../assets/AJAX.PNG';
import './login.css';

function Login_Form() {

    async function login() {
        console.log("test")
        await fetch(process.env.REACT_APP_API_ADDRESS + '/user/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                username: this.username,
                password: this.password                
            })
        })
    }

    return (
        <form className="modal-content" /* onSubmit={login} */action={process.env.REACT_APP_API_ADDRESS + "/user/login"} method="POST">
            <div className="imgcontainer">
                <img src={AJAX} className="avatar" alt='' />
            </div>
            <h1 style={{ color: "red" }}>This doesn't do anything yet</h1>
            <div className="container">
                <label htmlFor="username"><b style={{ color: "white" }}>Username</b></label>
                <input type="text" placeholder="Enter Server ID" name="username" required />

                <label htmlFor="password"><b style={{ color: "white" }}>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required />

                <button type="submit">Login</button>
                {/* <label>
                    <input type="checkbox" defaultChecked name="remember" />Remember me
                    </label> */}
            </div>

            <div className="container">
                <button type="button"
                    className="cancelbtn"><a style={{ textDecoration: "none", color: "white" }} href="/">Cancel</a></button>
                <span className="psw"><a style={{ textDecoration: "none", color: "white" }} href="#">Forgot password?</a></span>
            </div>
        </form>
    );

}

export default Login_Form;