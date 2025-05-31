// src/Login.jsx
import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <a href="http://localhost:5000/auth/google">
        <button>Sign in with Google</button>
      </a>
      <a href="http://localhost:5000/auth/facebook">
        <button>Sign in with Facebook</button>
      </a>
    </div>
  );
};

export default Login;
