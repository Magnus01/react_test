import React, { Component } from 'react';
import { API_URL } from './../constants';
import axios from 'axios';

class Home extends Component {
  getExpiryDate() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return JSON.stringify(new Date(expiresAt));
  }
    registrationtodb() {

        const { getAccessToken } = this.props.auth;
        console.log(this.props.auth, "this.props.auth LOGIN");
        const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
        axios.get(`${API_URL}/userId`, { headers })
            .then(response => this.setState({ message: response.data.message }))
            .catch(error => this.setState({ message: error.message }));

    }
  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div className="container">
        {isAuthenticated() &&
          <div>
            <h4>You are logged in!</h4>
            <h3>About Your Access Token</h3>
            <p>
              Your <code>access_token</code> has an expiry date of:{' '}
              {this.getExpiryDate()}

            </p>
            <p>
              The token has been scheduled for renewal, but you can also renew it manually from the navbar
              if you don't want to wait. This manual renewal button is really
              just for demonstration and you probably won't want such a control
              in your actual application.
            </p>
          </div>}
        {!isAuthenticated() &&
          <h4>
            You are not logged in! Please{' '}
            <a style={{ cursor: 'pointer' }} onClick={login.bind(this)}>
              Log In
            </a>{' '}
            to continue.
          </h4>}
      </div>
    );
  }
}

export default Home;
