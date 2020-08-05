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
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("display");
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].classList.add("display");
        /* dots[slideIndex - 1].className += " active"; */
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    window.onload = () => {        
        var slideIndex = 1;
        var slides = document.getElementsByClassName("mySlides")
        var display = Math.floor(slides.length * Math.random());
        slides[display].classList.toggle("display");
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
                <span className="dot" onClick></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
}

export default Slideshow;