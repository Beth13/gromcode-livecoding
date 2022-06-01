import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// state
// isLoggedIn: bool
// isProcessing: bool

class Auth extends Component {
  render() {
    return (
      <>
        <Login />
        <Logout />
        <Spinner />
      </>
    );
  }
}

export default Auth;

// state хранятся данные которые могут менятся со временем
