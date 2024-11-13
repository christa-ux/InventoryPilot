import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './authentication.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/login/', { username, password });
      localStorage.setItem('token', response.data.access);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-header">
          <img src="csf-logo-footer.png" alt="Company Logo" className="logo" />
          <h1>Sign In</h1>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <label className="form-label">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter email address"
              className="form-input"
            />
          </label>
          <label className="form-label">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
              className="form-input"
            />
          </label>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">I forgot my password</a>
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
      </div>
      <div className="login-right">
        <img src="sign-in-img1.png" alt="Worker with laptop" className="login-image" />
      </div>
    </div>
  );
}

export default Login;
