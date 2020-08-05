import React from 'react';
import Portrait from './landing page modules/landing_first';
import Slideshow from './landing page modules/slideshow';
import Description from './landing page modules/descriptions';
import './landing page modules/landing_page.css';


function Landing_page() {
    return (
        <div>
            <Portrait />
            <div className='placeholder_invite_box'></div>
            <Slideshow />
            <Description />    
            <div className='placeholder_invite_box'></div>
        </div>
    );
}

export default Landing_page;