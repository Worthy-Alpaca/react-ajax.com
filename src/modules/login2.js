import React, { Component } from 'react';
import Login_Form from './login modules/login_form';
import './login.css';
import AJAX from '../assets/AJAX.PNG';
import { Link } from 'react-router-dom';

function Login_Page() {


    return (
        <div>
            <Login_Form />
        </div >
    );
}

export default Login_Page;