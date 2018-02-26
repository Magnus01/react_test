// import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
// import { API_URL } from './../constants';
// import axios from 'axios';
//
// class Ping extends Component {
//
//     componentWillMount() {
//         this.setState({ message: '' });
//         this.setState({ profile: {} });
//         const { userProfile, getProfile } = this.props.auth;
//         console.log(this.props.auth,'this.propsAUTH');
//         if (!userProfile) {
//             getProfile((err, profile) => {
//                 this.setState({ profile });
//             });
//         } else {
//             this.setState({ profile: userProfile });
//         }
//     }
//   ping() {
//     axios.get(`${API_URL}/public`)
//       .then(response => this.setState({ message: response.data.message }))
//       .catch(error => this.setState({ message: error.message }));
//   }
//   securedPing() {
//     const { getAccessToken } = this.props.auth;
//     const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
//     axios.get(`${API_URL}/private`, { headers })
//       .then(response => this.setState({ message: response.data.message }))
//       .catch(error => this.setState({ message: error.message }));
//   }
//     // getuserId() {
//     //     const { getAccessToken } = this.props.auth;
//     //     console.log(this.props.auth, "this.props.auth");
//     //     const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
//     //     axios.get(`${API_URL}/userId`, { headers })
//     //         .then(response => this.setState({ message: response.data.message }))
//     //         .catch(error => this.setState({ message: error.message }));
//     // }
//
//     getuserId() {
//         const { getAccessToken } = this.props.auth;
//
//         console.log(this.props.auth,this.state.profile, "this.props.auth");
//
//         const headers = { 'Authorization': `Bearer ${getAccessToken()}`};
//
//         // let data= data: { 'user' : 'name' };
//         let json = {
//
//             "Name": this.state.profile.given_name + " " + this.state.profile.family_name,
//             "Description": this.state.profile.email,
//             "Id" : this.state.profile.sub,
//             "EducatorDetails": {
//                 "Name" : "education",
//                 "Description" : "description"
//             }
//         };
//
//         axios.post(`${API_URL}`,json,  headers )
//             .then(response => this.setState({ message: response.data.message }))
//             .catch(error => this.setState({ message: error.message }));
//     }
//
//
// //     export function postUser(Id) {
// //
// //     // let json = JSON.stringify({"id_Auth":Id, "section_list": "{\"section_list\":[{\"title\":\"\",\"chapter_completion\":0}]}", "exercice-list":"{\"exercice-list\": [{\"id_exercice\":0, \"completion\"0, \"title\":\"\", \"id_section\":0}] }"});
// //
// //     let json = JSON.stringify({
// //         "id_Auth": Id,
// //         "book_list": "{\"book_list\":[{\"title\":\"\",\"book_completion\":0,\"id_book\":0}]}",
// //         "section_list": "{\"section_list\":[{\"title\":\"\",\"chapter_completion\":0,\"id_book\":0}]}",
// //         "exercice-list": "{\"exercice-list\": [{\"id_exercice\":0, \"completion\"0, \"title\":\"\", \"id_section\":0}] }"
// //     });
// //
// //
// //     return (dispatch) => {
// //         dispatch({type: "POST_USER_START"});
// //         return axios.post("http://sci-code.com/PresentationHack/demo/api.php/User", json)
// //             .then((response) => {
// //                 // console.log(response);
// //                 dispatch({type: "POST_USER_SUCCESS", payload: response.data});
// //
// //                 axios.get("http://sci-code.com/PresentationHack/demo/api.php/Chapter?transform=1/")
// //                     .then((response) => {
// //                         dispatch({type: "FETCH_USERSCOURSE_SUCCESS", payload: response.data});
// //                     });
// //             })
// //     }
// // }
// //
//
//
//
//
//   render() {
//     const { isAuthenticated } = this.props.auth;
//     const { message } = this.state;
//     return (
//       <div className="container">
//         <h1>Make a Call to the Server</h1>
//         {
//           !isAuthenticated() &&
//             <p>Log in to call a private (secured) server endpoint.</p>
//         }
//         <Button bsStyle="primary" onClick={this.ping.bind(this)}>Ping</Button>
//         {' '}
//         {
//           isAuthenticated() && (
//               <Button bsStyle="primary" onClick={this.securedPing.bind(this)}>
//                 Call Private
//               </Button>
//             )
//         }
//           {' '}
//           {
//               isAuthenticated() && (
//                   <Button bsStyle="primary" onClick={this.getuserId.bind(this)}>
//                     Get user
//                   </Button>
//               )
//           }
//         <h2>{message}</h2>
//       </div>
//     );
//   }
// }
//
// export default Ping;
