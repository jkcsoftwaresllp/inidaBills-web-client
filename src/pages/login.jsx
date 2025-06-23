import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import CustomNotification from '../components/notification/CustomNotification';

const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success',
  });

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const showNotification = (message, type = 'success') => {
    setNotification({
      isVisible: true,
      message,
      type,
    });
  };

  const hideNotification = () => {
    setNotification(prev => ({
      ...prev,
      isVisible: false,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        
        showNotification('Login successful! Redirecting...', 'success');
        setTimeout(() => navigate('/dashboard'), 2000);
      } else {
        showNotification(result.error || 'Login failed', 'error');
      }
    } catch (error) {
      console.error('Login error:', error);
      showNotification('Network error. Please check your connection and try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <CustomNotification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={hideNotification}
        duration={4000}
      />

      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h1>Welcome Back</h1>
          <p>Sign in to access your IndiaBills demo dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            Don't have an account?{' '}
            <Link to="/register" className={styles.link}>
              Create one here
            </Link>
          </p>
          <p>
            Want to request a demo?{' '}
            <Link to="/demo-request" className={styles.link}>
              Get started
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;