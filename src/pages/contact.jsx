import React, { useState } from 'react';
import styles from './contact.module.css';
import Tile from '../components/containerTestimonials/Tile';
import CustomNotification from '../components/notification/CustomNotification';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Subject: '',
    Message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const showNotification = (message, type = 'success') => {
    setNotification({
      isVisible: true,
      message,
      type
    });
  };

  const hideNotification = () => {
    setNotification(prev => ({
      ...prev,
      isVisible: false
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbz1EnDra5Y-JQx0AOyKzN2agONLm0S9dt-qbGSWShZ6x8SzvM6k05Q7LEpcE-8XNvFPpA/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.text();
      
      // Show custom success notification
      showNotification(
        'Message sent successfully! We\'ll get back to you within 24 hours.',
        'success'
      );
      
      // Reset form
      setFormData({
        Name: '',
        Email: '',
        Phone: '',
        Subject: '',
        Message: '',
      });
    } catch (error) {
      // Show custom error notification
      showNotification(
        'There was an error submitting the form. Please try again or contact us directly.',
        'error'
      );
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

      <section className={styles.hero}>
        <h1>Get in Touch</h1>
        <p>
          Have questions about IndiaBills? Need help getting started? 
          Our team is here to help you succeed. Reach out to us anytime.
        </p>
      </section>

      <div className={styles.content}>
        {/* Left Side - Get in Touch */}
        <div className={styles.contactInfo}>
          <div className={styles.contactHeader}>
            <h2>Get in Touch</h2>
            <p>Multiple ways to reach us. Choose what works best for you.</p>
          </div>
          
          <div className={styles.contactTiles}>
            {/* Top Row */}
            <div className={styles.tileRow}>
              <Tile
                tittle="Visit Us"
                para={[
                  'Kumar Commercial Complex, Opp. Gate No. 10',
                  'Gandhi Maidan, Exhibition Road',
                  'Patna, India 800001',
                ]}
              />
              <Tile 
                tittle="Call Us" 
                para={[
                  '+91 7322005500',
                  'Monday - Saturday',
                  '9:00 AM - 6:00 PM IST'
                ]} 
              />
            </div>
            
            {/* Bottom Row */}
            <div className={styles.tileRow}>
              <Tile
                tittle="Email Us"
                para={[
                  'team@jkcsoftwares.com',
                  'support@indiabills.com',
                  'Quick response within 24 hours'
                ]}
              />
              <Tile
                tittle="Business Hours"
                para={[
                  'Monday - Saturday: 9:00 AM - 6:00 PM',
                  'Sunday: Closed',
                  'Emergency support available'
                ]}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Send us a Message Form */}
        <section className={styles.contactForm}>
          <div className={styles.formHeader}>
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="Name">Full Name *</label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  placeholder="Enter your full name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="Email">Email Address *</label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  placeholder="Enter your email address"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="Phone">Phone Number *</label>
                <input
                  type="tel"
                  id="Phone"
                  name="Phone"
                  placeholder="Enter your phone number"
                  value={formData.Phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="Subject">Subject *</label>
                <select
                  id="Subject"
                  name="Subject"
                  value={formData.Subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="billing">Billing Question</option>
                  <option value="demo">Request Demo</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="Message">Message *</label>
              <textarea
                id="Message"
                name="Message"
                placeholder="Tell us how we can help you..."
                rows="6"
                value={formData.Message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;