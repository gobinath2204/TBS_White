import React, { useState } from 'react';
import { login, getDemoCredentials } from '../utils/auth';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const demoCredentials = getDemoCredentials();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    setTimeout(() => {
      const result = login(username, password);
      
      if (result.success) {
        window.location.reload();
      } else {
        setError(result.error);
      }
      
      setIsLoading(false);
    }, 500);
  };
  
  const handleDemoLogin = () => {
    setUsername(demoCredentials.username);
    setPassword(demoCredentials.password);
  };
  
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Admin Portal</h1>
          <p>Enter your credentials to access the job management system</p>
        </div>
  
        <form onSubmit={handleSubmit} className="login-form">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
  
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              disabled={isLoading}
            />
          </div>
            
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div> 

          <button 
            type="submit" 
            className="login-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>

          <div className="demo-credentials">
            <p>Demo Credentials:</p>
            <button 
              type="button" 
              className="demo-btn"
              onClick={handleDemoLogin}
              disabled={isLoading}
            >
              Fill Demo Credentials
            </button>
            <p className="credentials">
              Username: <strong>{demoCredentials.username}</strong><br />
              Password: <strong>{demoCredentials.password}</strong>
            </p>
          </div>
        </form>

        <div className="login-footer">
          <p>This is a protected admin area. Unauthorized access is prohibited.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;