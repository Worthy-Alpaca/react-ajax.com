import React from 'react';
//import Modules
import Commands from './commands modules/commands';
import Navbar from './essential modules/navbar';
//import CSS
import './commands modules/commands.css';

function Command_page() {
    return (
        <div>
            <Navbar/>
            <Commands/>
        </div>
    );
}

export default Command_page;