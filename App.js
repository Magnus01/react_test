import React, { Component } from 'react';
// import { Navbar, Button } from 'react-bootstrap';

// import './App.css';



class App extends Component {

    constructor() {
        super();

        this.goTo = this.goTo.bind(this);


    }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }
    componentDidMount() {
   this.goTo('Register');
    }

  login() {
      this.props.auth.login();


  }

  logout() {
    this.props.auth.logout();
  }

  renewToken() {
    this.props.auth.renewToken();
  }


  render() {

    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <div>
          <div>

            {/*<div>*/}
              {/*<a onClick={this.goTo.bind(this, 'home')}>Auth0 - React</a>*/}
            {/*</div>*/}

            {/*<button*/}
              {/*bsStyle="primary"*/}
              {/*className="btn-margin"*/}
              {/*onClick={this.goTo.bind(this, 'home')}*/}
            {/*>*/}
              {/*Home*/}
            {/*</button>*/}


            {/*{!isAuthenticated() &&*/}
              {/*<button*/}
                {/*bsStyle="primary"*/}
                {/*className="btn-margin"*/}
                {/*onClick={this.login.bind(this)}*/}
              {/*>*/}
                {/*Log In*/}
              {/*</button>}*/}

              {/**/}
            {/*{isAuthenticated() &&*/}
              {/*<button*/}
                {/*bsStyle="primary"*/}
                {/*className="btn-margin"*/}
                {/*onClick={this.goTo.bind(this, 'profile')}*/}
              {/*>*/}
                {/*Profile*/}
              {/*</button>}*/}

              {/**/}
            {/*{isAuthenticated() &&*/}
              {/*<button*/}
                {/*bsStyle="primary"*/}
                {/*className="btn-margin"*/}
                {/*onClick={this.renewToken.bind(this)}*/}
              {/*>*/}
                {/*Renew Token*/}
              {/*</button>}*/}
              {/**/}
              {/**/}

              {/*{*/}
              {/*isAuthenticated() && (*/}
                  {/*<button*/}
                    {/*bsStyle="primary"*/}
                    {/*className="btn-margin"*/}
                    {/*onClick={this.goTo.bind(this, 'ping')}*/}
                  {/*>*/}
                    {/*Ping*/}
                  {/*</button>*/}
                {/*)*/}
            {/*}*/}


              {/*{isAuthenticated() &&*/}
              {/*<button*/}
                  {/*bsStyle="primary"*/}
                  {/*className="btn-margin"*/}
                  {/*onClick={this.goTo.bind(this, 'User')}*/}
              {/*>*/}
               {/*get user*/}
              {/*</button>}*/}


            {/*{isAuthenticated() &&*/}
              {/*<button*/}
                {/*bsStyle="primary"*/}
                {/*className="btn-margin"*/}
                {/*onClick={this.logout.bind(this)}*/}
              {/*>*/}
                {/*Log Out*/}
              {/*</button>}*/}


          </div>
        </div>
      </div>
    );
  }
}

export default App;
