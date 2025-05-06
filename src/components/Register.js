import React, { useState } from 'react';
import axios from 'axios';
import styles from './Register.css'; // Changed import

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/register', { email, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className={styles.registerContainer}> {/* Added className */}
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} className={styles.registerForm}> {/* Added className */}
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
          <div style={{ backgroundColor: 'yellow', padding: '20px' }}></div>
        </div>
        <button type="submit" className={styles.registerButton}>Register</button> {/* Added className */}
      </form>
    </div>
  );
}

export default Register;