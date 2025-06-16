import React from 'react';
import styles from './Footer.module.css';
import { Phone, Mail, MapPin, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2>IndiaBills</h2>
          <p>Simplifying billing for Indian businesses since 2024.</p>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></a>
            <a href="https://www.facebook.com/jkcsoftwares/" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            <a href="https://in.linkedin.com/company/jkcsoftwares" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/jkcsoftwares/" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <nav>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/aboutus">About</Link>
            <Link to="/contactus">Contact</Link>
          </nav>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact Info</h3>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Phone size={20} />
              <span>+91 7322005500</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={20} />
              <span>team@jkcsoftwares.com</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={20} />
              <span>Kumar Commercial Complex, Opp. Gate No. 10<br />Gandhi Maidan, Exhibition Road<br />Patna, India 800001</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2025 IndiaBills. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;