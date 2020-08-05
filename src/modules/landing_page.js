import React from 'react';
import Portrait from './landing page modules/landing_first';
import Slideshow from './landing page modules/slideshow';
import Description from './landing page modules/descriptions';
import Navbar from './essential modules/navbar';
import './landing page modules/landing_page.css';


function Landing_page() {
    return (
        <div>
            <Navbar/>
            <Portrait />
            <div className='placeholder_invite_box'></div>
            <Slideshow />
            <Description />    
            <div className='placeholder_invite_box'></div>
        </div>
    );
}

export default Landing_page;