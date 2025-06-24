import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './demoRequest.module.css';
import CustomNotification from '../components/notification/CustomNotification';

const DemoRequest = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success',
  });

  const [formData, setFormData] = useState({
    // Organization details
    organizationName: '',
    businessName: '',
    organizationEmail: '',
    organizationPhone: '',
    addressLine: '',
    city: '',
    state: '',
    pinCode: '',
    
    // User details
    userEmail: '',
    userFullName: '',
    userPhone: '',
    jobTitle: '',
    department: '',
  });

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
      return;
    }
  }, [navigate]);

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
      const token = localStorage.getItem('authToken');
      if (!token) {
        showNotification('Please login first to request a demo', 'error');
        setTimeout(() => navigate('/login'), 2000);
        return;
      }

      const requestBody = {
        organization: {
          name: formData.organizationName || undefined,
          business_name: formData.businessName || undefined,
          email: formData.organizationEmail || undefined,
          phone: formData.organizationPhone || undefined,
          address_line: formData.addressLine || undefined,
          city: formData.city || undefined,
          state: formData.state || undefined,
          pin_code: formData.pinCode || undefined,
          timezone: 'Asia/Kolkata'
        },
        user: {
          email: formData.userEmail || undefined,
          full_name: formData.userFullName || undefined,
          phone: formData.userPhone || undefined,
          job_title: formData.jobTitle || undefined,
          department: formData.department || undefined,
        }
      };

      const response = await fetch('http://localhost:3001/api/demo/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();

      if (response.ok) {
        showNotification('Demo request submitted successfully! Redirecting to dashboard...', 'success');
        setTimeout(() => navigate('/dashboard'), 3000);
      } else {
        showNotification(result.error || 'Failed to submit demo request', 'error');
      }
    } catch (error) {
      console.error('Demo request error:', error);
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
        duration={5000}
      />

      <div className={styles.header}>
        <h1>Request Your Free Demo</h1>
        <p>Fill out the form below to get your personalized IndiaBills demo credentials</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.section}>
          <h2>Organization Details</h2>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="organizationName">Organization Name</label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="Enter your organization name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="businessName">Business Name</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Enter your business name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="organizationEmail">Organization Email</label>
              <input
                type="email"
                id="organizationEmail"
                name="organizationEmail"
                value={formData.organizationEmail}
                onChange={handleChange}
                placeholder="organization@example.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="organizationPhone">Organization Phone</label>
              <input
                type="tel"
                id="organizationPhone"
                name="organizationPhone"
                value={formData.organizationPhone}
                onChange={handleChange}
                placeholder="+91 9876543210"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="addressLine">Address</label>
              <input
                type="text"
                id="addressLine"
                name="addressLine"
                value={formData.addressLine}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="pinCode">Pin Code</label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                placeholder="123456"
              />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>User Details</h2>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="userEmail">Your Email</label>
              <input
                type="email"
                id="userEmail"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="userFullName">Your Full Name</label>
              <input
                type="text"
                id="userFullName"
                name="userFullName"
                value={formData.userFullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="userPhone">Your Phone</label>
              <input
                type="tel"
                id="userPhone"
                name="userPhone"
                value={formData.userPhone}
                onChange={handleChange}
                placeholder="+91 9876543210"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="jobTitle">Job Title</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="e.g., Manager, Owner, Developer"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="e.g., Sales, IT, Operations"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : 'Request Demo'}
        </button>
      </form>
    </div>
  );
};

export default DemoRequest;