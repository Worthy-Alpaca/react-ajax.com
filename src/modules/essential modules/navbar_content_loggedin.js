import React, { Component } from 'react';
//import CSS
import './navbar.css';
//import authentification modules
import AuthHelperMethods from '../../components/AuthHelperMethods';
//component to protect the page
import withAuth from '../../components/withAuth';

class Navbar_Content_LoggedIn extends Component {
    Auth = new AuthHelperMethods();


    state = {
        username: "",
        password: ""
    }

    _handleLogout = () => {
        this.Auth.logout()
    }

    render() {

        const extend = () => {
            const burger = document.querySelector(".burger");
            const nav = document.querySelector(".nav-links");
            const slide = document.querySelector(".slideshow-container");
            const navLinks = document.querySelectorAll(".nav-links li");
            const prev = document.querySelector(".prev");
            const next = document.querySelector(".next");

            if (slide) {
                slide.classList.toggle("slideshow-container");
                slide.classList.toggle("slideshow-background");
            }
            if (prev && next) {
                prev.classList.toggle("prevtoggle");
                next.classList.toggle("nexttoggle");
            }
            nav.classList.toggle("nav-active");
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
                }
            })

            burger.classList.toggle('toggle');
        }
        //sticking Navbar handling
        window.onscroll = function () {
            var navbar = document.getElementById("navBar");

            var sticky = navbar.offsetTop;

            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            }
            if (window.pageYOffset < 2) {
                navbar.classList.remove("sticky");
            }
        }

        return (
            <div>
                <nav id="navBar">
                    <h1 className="logo"><a href="/">AJAX</a></h1>
                    <ul className="nav-links" id='test'>
                        <li><a onClick={this._handleLogout} href="/">Logout</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/commands">Commands</a></li>
                        <li><a className="login" href={"/login"}>Dashboard</a></li>
                        <li><a href="https://github.com/Worthy-Alpaca/AJAX" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                    <div onClick={extend} className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>                
            </div>

        );
    }
}

export default withAuth(Navbar_Content_LoggedIn);