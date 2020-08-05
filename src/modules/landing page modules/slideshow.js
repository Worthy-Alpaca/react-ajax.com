import React, { useState } from 'react';
import Slide from './slide';
import './slideshow.css';
import help from '../../assets/images/help.PNG';
import reports from '../../assets/images/reports.PNG';
import ranks from '../../assets/images/ranks.PNG';
import showserver from '../../assets/images/showserver.PNG';




function Slideshow() {
    
    var slideIndex = 0;    
    
    function showSlides(n) {
        var i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        console.log(slides)
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[n -1].style.display = "block";
        dots[n -1].className += " active";
    }

    const load1 = () => {
        showSlides(1);
    }
    const load2 = () => {
        showSlides(2);
    }
    const load3 = () => {
        showSlides(3);
    }
    const load4 = () => {
        showSlides(4);
    }

    window.onload = () => {        
        var slideIndex = 1;
        var slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        var display = Math.floor(slides.length * Math.random());
        slides[display].classList.toggle("display");
        dots[display].className += " active";
    }

    return (
        <div>
            <div className='slideshow-container'>
                <Slide className="mySlides fade" src={help} desc='Custom Help command' />
                <Slide className="mySlides fade" src={reports} desc='Reports are logged' />
                <Slide className="mySlides fade" src={ranks} desc='Customizable ranks' />
                <Slide className="mySlides fade" src={showserver} desc='Customize on your server' />   
            </div>
            <div style={{ textAlign: "center" }}>                
                <span className="dot" onClick={load1}></span>
                <span className="dot" onClick={load2}></span>
                <span className="dot" onClick={load3}></span>
                <span className="dot" onClick={load4}></span>
            </div>
        </div>
    );
}

export default Slideshow;