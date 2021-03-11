import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import Cookies from 'universal-cookie';

import './edit.css';
import 'react-dropdown/style.css';

import AuthHelperMethods from '../../components/AuthHelperMethods';
import withAuth from '../../components/withAuth';

const cookies = new Cookies();
class Edit extends Component {
    Auth = new AuthHelperMethods();
    
    constructor(props) {
        super (props);
        this.state = {
            error: null,
            isLoaded: false,
            server: [],
            payload: null,
            field: {
                field1: null
            }
        };
        //this.showOverlaySelect = this.showOverlaySelect.bind(this.props.field);
    }

    

    showOverlaySelect = async (e) => {
        const text = document.getElementById('id01');
        const channel = document.getElementById('id02');
        const role = document.getElementById('id03');
        const f1 = this.props.field;
        //console.log(this.props, "PROPS showoverlay")
        
        cookies.set('field', this.props.field, { path: '/dashboard' });
        
        //this.gather()
        if (this.props.type === "text") {
            text.style.display = 'block';
        } else if (this.props.type === "channel") {
            
            channel.style.display = 'block';
        } else if (this.props.type === "role") {
            
            role.style.display = 'block';
        }
        //console.log(this.state, "STATE showoverlay")
    }

    cancel = (e) => {
        //e.preventDefault();
        console.log(this.state)
        const text = document.getElementById('id01');
        const channel = document.getElementById('id02');
        const role = document.getElementById('id03');
        text.style.display = 'none';
        channel.style.display = 'none';
        role.style.display = 'none';
    }

    gather = (e) => {
        console.log("gather")
        fetch(process.env.REACT_APP_API_ADDRESS + `/website/getcomponents?guildID=${this.props.id}`, {
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

    nameToId = () => {
        const channels = this.state.server.channels;
        const roles = this.state.server.roles;
        const payload = this.state.payload;
        let id = channels.find(x => x.channel_name === payload) || roles.find(x => x.role_name === payload);
        if (id === undefined) return this.state.payload;
        if (id.channel_id) {
            return id.channel_id;
        } else if (id.role_id) {
            return id.role_id;
        }
        
    }

    _send = (e) => {
        
        e.preventDefault()
        this.nameToId()
        const guild = {
            id: this.props.id
        }
        const payload = JSON.stringify({
            guild: guild,
            field: cookies.get('field'),
            value: this.nameToId()
        })
        

        fetch(process.env.REACT_APP_API_ADDRESS + `/discord/setup/?guildID=${this.props.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'auth-token': this.Auth.getToken()
            },
            body: payload
        }).then(res => {
            if (res.status === 200) {
                window.location.reload();
            }
        })
    }

    componentDidMount() {
        this.gather();
        
    }

    _handleChange = (e) => {
        //console.log(e)
        
        if (e.target === undefined) {
            this.setState(
                {
                    payload: e.value
                }
            )
        } else {
            this.setState(
                {
                    payload: e.target.value
                }
            )
        }
    }

    render() {
        const { error, isLoaded, server, name } = this.state;
        const channels = [];
        const roles = [];
        if (error) {
            return <div className="center" id="white">Error: {error.message}</div>;
        }
        
        if (isLoaded) {
            server.channels.forEach(channel => {
                channels.push(channel.channel_name);
            })
            server.roles.forEach(role => {
                roles.push(role.role_name);
            })
        }

        

        return (
            <div>
                <div>
                    <button className="editButton" onClick={this.showOverlaySelect}>EDIT</button>
                </div>
                <div id="id01" className="modal">
                    <form className="modal-content animate">
                        <div className="container">
                            <h1 id="white">{name}</h1>
                            <label for="value"><b>Please enter a text</b></label>
                            <input id="input1" type="text" name="value" onChange={this._handleChange} required />
                            <button className="confbtn" onClick={this._send}>Update</button>
                            <button className="cancelbtn" onClick={this.cancel}>Cancel</button>
                        </div>
                        
                    </form>
                </div>
                <div id="id02" className="modal">
                    <form className="modal-content animate">
                        <div className="container">
                            <h1 id="white">{name}</h1>
                            <label for="value"><b>Please select a channel</b></label>
                            <Dropdown options={channels} onChange={this._handleChange} value={channels[0]}></Dropdown>
                            <button className="confbtn" onClick={this._send}>Update</button>
                            <button className="cancelbtn" onClick={this.cancel}>Cancel</button>
                        </div>
                    </form>
                </div>
                <div id="id03" className="modal">
                    <form className="modal-content animate">
                        <div className="container">
                            <h1 id="white">{name}</h1>
                            <label for="value"><b>Please select a role</b></label>
                            <Dropdown options={roles} onChange={this._handleChange} value={roles[0]}></Dropdown>
                            <button className="confbtn" onClick={this._send}>Update</button>
                            <button className="cancelbtn" onClick={this.cancel}>Cancel</button>
                        </div>
                    </form>
                </div>
                {this.props.children}
            </div>
            
        )
    }
}

export default Edit;