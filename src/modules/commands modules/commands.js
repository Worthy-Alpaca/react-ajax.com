import React, { Component } from 'react';

class Commands extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            moderation: [],
            info: [],
            fun: [],
            setup: []
        };
    }
    componentDidMount() {
        fetch(process.env.REACT_APP_API_ADDRESS + '/discord/commands/get', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            }
        }).then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        moderation: result.moderation,
                        info: result.info,
                        fun: result.fun,
                        setup: result.setup,
                        music: result.music,
                    });
                },                
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, moderation, info, fun, setup, music } = this.state;
        if (error) {
            return <div className="center" id="white">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="center" id="white">Loading...</div>;
        } else {
            return (
                <div>
                    <div className="placeholder"></div>
                    <div className="center" id="white">
                        <h1>My Commands</h1>
                        <details>
                            <summary>Moderation</summary>
                            <ul>
                                {moderation.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </details>
                        <div className="placeholder"></div>
                        <details>
                            <summary>Information</summary>
                            <ul>
                                {info.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </details>
                        <div className="placeholder"></div>
                        <details>
                            <summary>Fun Stuff</summary>
                            <ul>
                                {fun.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </details>
                        <div className="placeholder"></div>
                        <details>
                            <summary>Music</summary>
                            <p style={{color:"red"}}>This is still under construction</p>
                            <ul>
                                {music.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </details>
                        <div className="placeholder"></div>
                        <details>
                            <summary>Setup</summary>
                            <ul>
                                {setup.map(item => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </details>
                        <div className="placeholder"></div>
                    </div>
                </div>
            );
        }
    }

}

export default Commands;