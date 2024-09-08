import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import collegeImage from './assets/college.jpg';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username === "admin" && password === "password") {
      alert("Login Successful");
      navigate('/home'); // Redirect to the home page
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    alert("Sign up successful");
    // Handle sign-up logic here
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${collegeImage})` }}>
      
      {isLogin ? (
        <div className="login-content">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label>Username:</label>
            <input type="text" name="username" required />
            <label>Password:</label>
            <input type="password" name="password" required />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <a href="#!" onClick={() => setIsLogin(false)}>
              Sign up
            </a>
          </p>
        </div>
      ) : (
        <div className="login-content">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <label>Username:</label>
            <input type="text" name="username" required />
            <label>Email:</label>
            <input type="email" name="email" required />
            <label>Password:</label>
            <input type="password" name="password" required />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{" "}
            <a href="#!" onClick={() => setIsLogin(true)}>
              Login
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
