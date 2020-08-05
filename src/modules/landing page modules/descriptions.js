import React from 'react';
import './descriptions.css';

function Description() {
    return (
        <div className="centering">
            <div className="placeholder_description"></div>
            <div className="description_field" id="white">
                <h2>What it can do</h2>
                <ul>
                    <li>
                        <h3>AJAX has build in spam protection and can be used to multi-kick. It also has the ability to
                        add/remove roles to multiple
                        members at once. Furthermore it features a customizable rank system that allows users to
                        show
                            what they like to play/do.</h3>
                    </li>
                    <li>
                        <h3>AJAX has a database at his back that allows you to customize the way it works on your
                        server.
                        </h3>
                    </li>
                    <li>
                        <h3>Once you invite AJAX to your server it will set up a bot-setup channel that can be used to
                        configure it, using the built
                        in !setserver command. Once all has been configured that channel will be deleted after 2
                            minutes.</h3>
                    </li>
                    <li>
                        <h3>The most important executive commands (kick, ban, mute, role) get logged in the reports
                        channel
                        that you set in the
                            setup process.</h3>
                    </li>
                    <li>
                        <h3>In the configurtion you also have the option to set a custom prefix. The default prefix is
                        !.
                        </h3>
                    </li>
                    <li>
                        <h3>The help menu is customized to the permission of the user who calls it and features a multi
                        page
                            setup.</h3>
                    </li>
                    <li>
                        <h3>AJAX features a report mechanic that gets logged. In combination with that it will kick a member on
                            three infractions and ban them on six.</h3>
                    </li>
                </ul>
            </div>
            <div className="placeholder_description"></div>
        </div>
    )
}

export default Description;