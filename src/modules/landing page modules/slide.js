import React from 'react';
import './slideshow.css';

function Slide(props) {

    return (
        <div className="mySlides">
            <img src={props.src} id="images" alt=''/>
            <div className="text">{props.desc}</div>
        </div>
    );
}

export default Slide;