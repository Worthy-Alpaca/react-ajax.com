import React from 'react';
import './landing_page.css';


function Portrait() {
    return (
        <div>
            <div id="placeholder_portrait"></div>
            <div id="portrait" className="circle"></div>
            <div className="centering" id="white">
                <h1 id="head1">Welcome to AJAX</h1>
                <h2 id="head2">AJAX is a moderation bot for discord.</h2>
                <h2>It also has an EDSM and INARA API connection so you can use it for Elite: Dangerous servers.</h2>
            </div>

            <div /* className="center" */>
                <div id="invite_field">
                    <div className="placeholder_invite_box"></div>
                    <div className="invite_box">
                        <p id="invite_text">Want to invite me to your server?</p>
                        <a href="https://discord.com/api/oauth2/authorize?client_id=682255208125956128&permissions=8&redirect_uri=https%3A%2F%2Fworthyalpaca.de%2F&scope=bot"
                            id="invite_button" rel="noopener noreferrer" target="_blank">Invite Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portrait;