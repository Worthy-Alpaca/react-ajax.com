import React, { Component } from 'react';
//import Authentification modules
import AuthHelperMethods from '../../components/AuthHelperMethods';

class Commands extends Component {

    Auth = new AuthHelperMethods();
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
                'auth-token': this.Auth.getToken()
            }
        }).then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        moderation: result.moderation,
                        info: result.info,
                        fun: result.fun,
                        setup: result.setup
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, moderation, info, fun, setup } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
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
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </details>
                        <div className="placeholder"></div>
                        <details>
                            <summary>Information</summary>
                            <ul>
                                {info.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </details>
                        <div className="placeholder"></div>
                        <details>
                            <summary>Fun Stuff</summary>
                            <ul>
                                {fun.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </details>
                        <div className="placeholder"></div>
                        <details>
                            <summary>Setup</summary>
                            <ul>
                                {setup.map(item => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </details>


                    </div>
                </div>
            );
        }
    }

}

export default Commands;