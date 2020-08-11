import React from 'react';

function Commands() {
    return (
        <div>
            <div className="placeholder"></div>
            <div className="center" id="white">
                <h1>My Commands</h1>
                <details>
                    <summary>Moderation</summary>
                    <ul>
                        <li>!ban => Bans the person mentioned</li>
                        <li>!clear => Clears the chat</li>
                        <li>!close => Clears a voice channel</li>
                        <li>!kick => Kicks all the members you mention</li>
                        <li>!lock => Locks a voice channel</li>
                        <li>!move => Moves all members from one channel to the other</li>
                        <li>!mute => mutes a person</li>
                        <li>!purge => Kicks all members who don't have the approved role</li>
                        <li>!report => reports a member</li>
                        <li>!role => adds/removes role to all mentioned members</li>
                    </ul>
                </details>
                <div className="placeholder"></div>
                <details>
                    <summary>Information</summary>
                    <ul>
                        <li>!about => Gives information about the bot and the server</li>
                        <li>!addrank => Adds a rank to the database</li>
                        <li>!delrank => Deletes a rank from the database</li>
                        <li>!help => Returns all commands, or one specific command info</li>
                        <li>!infractions => Tells you how often you have been reported</li>
                        <li>!rank => Applies the given rank</li>
                        <li>!ranks => Shows available ranks</li>
                        <li>!roster => People who do stuff</li>
                        <li>!welcome => Give the welcome message</li>
                        <li>!whois => Returns user information</li>
                    </ul>
                </details>
                <div className="placeholder"></div>
                <details>
                    <summary>Fun stuff</summary>
                    <ul>
                        <li>!addreddit => Adds a subreddit to be used with !meme</li>
                        <li>!delreddit => Deletes a subreddit from the database</li>
                        <li>!edcg => Returns latest community goal details</li>
                        <li>!edcmdr => Gets CMDR stats from INARA</li>
                        <li>!edsystem => Displays information about a system</li>
                        <li>!love => Calculates the love affinity you have for another person</li>
                        <li>!meme => Sends an epic meme</li>
                        <li>!reddits => Shows available subreddits</li>
                        <li>!rps => Rock Paper Scissors game</li>
                        <li>!urban => Sends an urban dictonary entry</li>
                    </ul>
                </details>
                <div className="placeholder"></div>
                <details>
                    <summary>Setup</summary>
                    <ul>
                        <li>!setadmin => Set the admin role</li>
                        <li>!setapproved => Set the approved role</li>
                        <li>!setautoapproved => Set wether new members get role automatically</li>
                        <li>!setchannel => Set the greeting channel. If no channel is set I'll use the default one</li>
                        <li>!setgreeting => Set the server greeting</li>
                        <li>!setmod => Set the moderator role</li>
                        <li>!setreports => Set the reports channel</li>
                        <li>!setserver => Set up the entire server</li>
                        <li>!setservergreeting => Sets the message that is to be displayed to the rest of the server</li>
                        <li>!setstartcmd => Set the approving command</li>
                        <li>!showserver => Shows the server setup result</li>
                    </ul>
                </details>
            </div>
      </div>  
    );
}

export default Commands;