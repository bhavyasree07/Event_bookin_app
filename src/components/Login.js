import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Login.css'; // Changed import

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });
      setMessage(response.data.message);
      console.log('Logged in user ID:', response.data.userId);
      localStorage.setItem('userId', response.data.userId);
      navigate('/events');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className={styles.loginContainer}> {/* Added className */}
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className={styles.loginForm}> {/* Added className */}
        <div className={styles.formGroup}> {/* Added className */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField} // Added className
            required
          />
        </div>
        <div className={styles.formGroup}> {/* Added className */}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField} // Added className
            required
          />
        </div>
        <button type="submit" className={styles.loginButton}>Login</button> {/* Added className */}
      </form>
    </div>
  );
}

export default Login;