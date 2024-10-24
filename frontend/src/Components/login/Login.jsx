import React, { useState } from 'react';
import './login.css';  // Scoped CSS for login page

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p>Don’t have an account? <a href="/register">Create one</a></p>
      </div>
    </div>
  );
};

export default Login;
