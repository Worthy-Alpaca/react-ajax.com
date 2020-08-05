import React from 'react';
import './404.css';

function Error_Page() {
    return (
        <div>
            <div id="placeholder1"></div>
            <div className="center">
                <h1 id="white">Error 404</h1>
                <h2 id="white">Site not found</h2>
                <h3 id="white">It seems like you are lost</h3>
                <br/>
                <a id="white" href="/">Click here to get Home</a>
            </div>
        </div>
    );
}

export default Error_Page;