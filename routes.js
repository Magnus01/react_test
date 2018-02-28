import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';


import Home from './Home/Home';



// import Profile from './Profile/Profile';
// import Ping from './Ping/Ping';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

import Register from './Register/Register';
import Dashboard from './Register/Dashboard';
import Classroom from './Classroom/Classroom';
import First_CreateClassroom from './Classroom/First_CreateClassroom';
import Second_ChooseStudents from './Classroom/Second_ChooseStudents';
import Third_Instructions from './Classroom/Third_Instructions';

import Assignment from './Assignments/index';
import First_Assignment from './Assignments/CreateAssignment/First_ChooseBook';
import Second_Assignment from './Assignments/CreateAssignment/Second_ChooseChapter';
import Author_container from './Assignments/CreateAssignment/Book_choice/AuthorContainer';
import Third_Assignment from './Assignments/CreateAssignment/Third_ChooseTime';


import store from "./store";
import {Provider} from 'react-redux';


const auth = new Auth();

const handleAuthentication = ({location}) => {store.js
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

store.subscribe(() => {
    console.log(store.getState());
});


export const makeMainRoutes = () => {
  return (
      <Provider store = {store}>

      <Router history={history}>

      <div>
        <Route
            path="/Register"
            render={props => <Register auth={auth} {...props} />} />
          <Route
            path="/"
            render={props => <Home auth={auth} {...props} />} />

        <Route path="/makeclass1" render={props => <First_CreateClassroom auth={auth} {...props} />} />
        <Route path="/makeclass2" render={props => <Second_ChooseStudents auth={auth} {...props} />} />
        <Route path="/makeclass3" render={props => <Third_Instructions auth={auth} {...props} />} />

          <Route path="/classroom" render={props => <Classroom auth={auth} {...props} />} />
          <Route path="/dashboard" render={props => <Dashboard auth={auth} {...props} />} />




          <Route path="/assignment" render={props => <Assignment auth={auth} {...props} />} />
          <Route path="/createassignment1" render={props => <First_Assignment auth={auth} {...props} />} />
          <Route path="/createassignment2" render={props => <Second_Assignment auth={auth} {...props} />} />
          {/*<Route path="/authorcontainer" render={props => <Author_container auth={auth} {...props} />} />*/}
          <Route path="/createassignment3" render={props => <Third_Assignment auth={auth} {...props} />} />
          {/*<Route path="/register" render={props => <Register auth={auth} {...props} />} />*/}

        {/*<Route*/}
          {/*path="/profile"*/}
          {/*render={props =>*/}
            {/*!auth.isAuthenticated()*/}
              {/*? <Redirect to="/Home" />*/}
              {/*: <Profile auth={auth} {...props} />}*/}
        {/*/>*/}
        {/*<Route path="/ping" render={(props) => (*/}
            {/*!auth.isAuthenticated() ? (*/}
              {/*<Redirect to="/Register"/>*/}
            {/*) : (*/}
              {/*<Ping auth={auth} {...props} />*/}
            {/*)*/}
          {/*)} />*/}

          {/*<Route path="/User" render={(props) => (*/}
              {/*!auth.isAuthenticated() ? (*/}
                  {/*<Redirect to="/home"/>*/}
              {/*) : (*/}
                  {/*<Ping auth={auth} {...props} />*/}
              {/*)*/}
          {/*)} />*/}
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>

    </Router>
    </Provider>
  );
};
