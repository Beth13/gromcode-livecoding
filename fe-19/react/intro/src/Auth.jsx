import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// state
// isLoggedIn: bool
// isProcessing: bool

// algo
// 1. show login by default +++
// 2. after login click - show spinner for 2 seconds +++
// 3. hide spinner and show logout +++
// 4. after click on logout show login +++

class Auth extends Component {
  // state хранятся данные которые могут менятся со временем
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  loginHandler = () => {
    // input: state(obj)
    // output: undefined
    // async
    this.setState({
      isProcessing: true,
    });

    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isProcessing, isLoggedIn } = this.state;

    if (isProcessing) {
      return <Spinner size={'25px'} />;
    }

    if (isLoggedIn) {
      return <Logout onLogout={this.logoutHandler} />;
    }

    return <Login onLogin={this.loginHandler} />;
  }
}

export default Auth;
