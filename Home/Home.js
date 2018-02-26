// import React, { Component } from 'react';
// import { API_URL } from './../constants';
// import axios from 'axios';
//
// class Home extends Component {
//     constructor() {
//         super();
//
//         this.goTo = this.goTo.bind(this);
//
//
//     }
//
//
//     getExpiryDate() {
//     const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
//         this.goTo('Register');
//     return JSON.stringify(new Date(expiresAt));
//
//   }
//
//
//     goTo(route) {
//         console.log( 'route');
//         this.props.history.replace(`/${route}`);
//     }
//
//   render() {
//     const { isAuthenticated, login } = this.props.auth;
//     return (
//       <div className="container">
//         {/*{isAuthenticated() &&*/}
//           {/*<div>*/}
//             {/*<h4>You are logged in!</h4>*/}
//             {/*<h3>About Your Access Token</h3>*/}
//             {/*<p>*/}
//               {/*Your <code>access_token</code> has an expiry date of:{' '}*/}
//               {/*{this.getExpiryDate()}*/}
//
//             {/*</p>*/}
//             {/*<p>*/}
//               {/*The token has been scheduled for renewal, but you can also renew it manually from the navbar*/}
//               {/*if you don't want to wait. This manual renewal button is really*/}
//               {/*just for demonstration and you probably won't want such a control*/}
//               {/*in your actual application.*/}
//             {/*</p>*/}
//           {/*</div>}*/}
//         {!isAuthenticated() &&
//           <h4>
//             You are not logged in! Please{' '}
//             <a style={{ cursor: 'pointer' }} onClick={login.bind(this)}>
//               Log In
//             </a>{' '}
//             to continue.
//           </h4>}
//       </div>
//     );
//   }
// }
//
// export default Home;
