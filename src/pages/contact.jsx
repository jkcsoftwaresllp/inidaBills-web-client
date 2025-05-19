import React from 'react';
import styles from './contact.module.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import TilesContainer from '../components/containerTestimonials/TilesContainer';
import Tile from '../components/containerTestimonials/Tile';

const Contact = () => {
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
            para={["Kumar Commercial Complex, Opp. Gate No. 10", "Gandhi Maidan, Exhibition Road", "Patna, India 800001"]}
          />
          <Tile
            tittle="Call Us"
            para="+91 7322005500"
          />
          <Tile
            tittle="Email Us"
            para={["team@jkcsoftwares.com", "support@indiabills.com"]}
          />
          <Tile
            tittle="Business Hours"
            para={["Monday - Saturday", "9:00 AM - 6:00 PM"]}
          />
        </TilesContainer>

        <section className={styles.contactForm}>
          <h2>Send us a Message</h2>
          <form>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <input type="tel" placeholder="Your Phone" required />
            </div>
            <div className={styles.formGroup}>
              <select required>
                <option value="">Select Subject</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales Inquiry</option>
                <option value="billing">Billing Question</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Your Message" rows="5" required></textarea>
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