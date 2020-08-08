import React, { Component } from 'react';
//Import Authentification Modules
import AuthHelperMethods from './AuthHelperMethods';

export default function withAuth(AuthComponent) {
    
    const Auth = new AuthHelperMethods();

    return class AuthWrapped extends Component {
        state = {
            confirm: null,
            loaded: false
        }

        componentWillMount() {
            //check if user is already logged in
            if (!Auth.loggedIn()) {
                this.props.history.replace('/login')
            }
            else {
                //getting confirmation
                try {
                    const confirm = Auth.getConfirm()
                    //console.log("confirmation is:", confirm);
                    this.setState({
                        confirm: confirm,
                        loaded: true
                    })
                }
                //Error handling
                catch (err) {
                    //console.log(err);
                    Auth.logout()
                    this.props.history.replace('/login');
                }
            }
        }

        render() {
            if (this.state.loaded === true) {
                if (this.state.confirm) {
                    //console.log("confirmed!")
                    return (
                        /* component that is currently being wrapped(App.js) */
                        <AuthComponent
                            history={this.props.history}
                            confirm={this.state.confirm}
                        />
                    )
                }
                else {
                    //console.log("not confirmed!")
                    return null
                }
            }
            else {
                return null
            }

        }
    }
}