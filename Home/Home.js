import React, { Component } from 'react';
import { API_URL } from './../constants';
import axios from 'axios';

class Home extends Component {
    constructor() {
        super();

        this.goTo = this.goTo.bind(this);


    }


    getExpiryDate() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        this.goTo('Register');
    return JSON.stringify(new Date(expiresAt));

  }


    goTo(route) {
        console.log( 'route');
        this.props.history.replace(`/${route}`);
    }

  render() {
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div>

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
