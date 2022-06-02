import React from 'react';

// input: obj ({onLogin: callback})
// output: jsx
const Login = ({ onLogin }) => {
  return (
    <button className="btn login" onClick={onLogin}>
      Login
    </button>
  );
};

export default Login;
