import React, { useState } from 'react';
import styles from './contact.module.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import TilesContainer from '../components/containerTestimonials/TilesContainer';
import Tile from '../components/containerTestimonials/Tile';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Subject: '',
    Message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz1EnDra5Y-JQx0AOyKzN2agONLm0S9dt-qbGSWShZ6x8SzvM6k05Q7LEpcE-8XNvFPpA/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.text();
      alert(result);
      setFormData({
        Name: '',
        Email: '',
        Phone: '',
        Subject: '',
        Message: ''
      });
    } catch (error) {
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>We're here to help and answer any questions you might have</p>
      </section>

      <div className={styles.content}>
        <TilesContainer
          background={1}
          tittle="Get in Touch"
          description="Reach out to us through any of the following methods"
        >
          <Tile
            tittle="Visit Us"
            para={[
              "Kumar Commercial Complex, Opp. Gate No. 10",
              "Gandhi Maidan, Exhibition Road",
              "Patna, India 800001"
            ]}
          />
          <Tile
            tittle="Call Us"
            para="+91 7322005500"
          />
          <Tile
            tittle="Email Us"
            para={[
              "team@jkcsoftwares.com",
              "support@indiabills.com"
            ]}
          />
          <Tile
            tittle="Business Hours"
            para={[
              "Monday - Saturday",
              "9:00 AM - 6:00 PM"
            ]}
          />
        </TilesContainer>

        <section className={styles.contactForm}>
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                value={formData.Email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                name="Phone"
                placeholder="Your Phone"
                value={formData.Phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <select
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
                required
              >
                <option value="">Select Subject</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales Inquiry</option>
                <option value="billing">Billing Question</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="Message"
                placeholder="Your Message"
                rows="5"
                value={formData.Message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
