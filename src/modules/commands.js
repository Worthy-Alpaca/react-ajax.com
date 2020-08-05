import React from 'react';
import './commands modules/commands.css';
import Commands from './commands modules/commands';
import Navbar from './essential modules/navbar';

function Command_page() {
    return (
        <div>
            <Navbar/>
            <Commands/>
        </div>
    );
}

export default Command_page;