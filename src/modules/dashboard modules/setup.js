import React, { Component } from 'react';
//import CSS
import './setup.css';
//import authentification modules
import AuthHelperMethods from '../../components/AuthHelperMethods';
//Import component to protect the page
import withAuth from '../../components/withAuth';

class Setup_Page extends Component {

    //new Auth instance
    Auth = new AuthHelperMethods();

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            error: null,
            isLoaded: false,
            server: []
        };
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_ADDRESS + `/website/getserver?guildID=${this.props.confirm._id}`, {
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
                        server: result                        
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

        const { error, isLoaded, server } = this.state;
        
        if (error) {
            return <div className="center" id="white">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="center" id="white">Loading...</div>;
        } else {
            return (
                <div className="center" id="white">
                    <div className="placeholder1"></div>
                    <div className="text_box">
                        <h3>Server Name</h3>
                        <p>{server.data.name}</p>                        
                    </div>
                    <div className="placeholder1"></div>
                    <div className="text_box">
                        <h3>Greeting</h3>
                        <p>{server.data.greeting}</p>
                    </div>
                    <div className="placeholder1"></div>
                    <div className="text_box">
                        <h3>Server Greeting</h3>
                        <p>(New Member) {server.data.server_greeting}</p>
                    </div>
                    <div className="placeholder1"></div>
                    <div className="text_box">
                        <h3>Custom Prefix</h3>
                        <p>{server.data.prefix}</p>
                    </div>
                    <div className="placeholder1"></div>
                    <h2>Roles</h2>
                    <div className="text_box">
                        <h3>Admin Role</h3>
                        <p>{server.plaintext.admin}</p>
                    </div>
                    <div className="placeholder1"></div>
                    <div className="text_box">
                        <h3>Moderator Role</h3>
                        <p>{server.plaintext.moderator}</p>
                    </div>
                    <div className="placeholder1"></div>
                    <div className="text_box">
                        <h3>Role for approved members</h3>
                        <p>{server.plaintext.approved}</p>
                    </div>
                    <div className="placeholder1"></div>
                    <h2>Channels</h2>
                    <div className="text_box">
                        <h3>Reports Channel</h3>
                        <p>{server.plaintext.reports}</p>
                    </div>
                    <div className="placeholder1"></div>
                    <div className="text_box">
                        <h3>Welcome Channel</h3>
                        <p>{server.plaintext.channel}</p>
                    </div>
                    <div className="placeholder1"></div>
                </div>
            );
        }
        
    }

}

export default withAuth(Setup_Page);