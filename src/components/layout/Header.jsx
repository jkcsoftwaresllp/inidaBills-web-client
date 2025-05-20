import React, { useState } from 'react';
import styles from './Header.module.css';
import ButtonNav from "../buttons/ButtonNav"
import ButtonWithBG from "../buttons/ButtonWithBG"
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    'Home',
    'Features',
    'Pricing',
    'About Us',
    'Contact Us',
    'FAQs',
  ];

  const handleNavClick = (label) => {
    // Add scroll/route logic here if needed
    console.log(`Navigated to ${label}`);
    setIsOpen(false); // close mobile nav on click
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/favicon.png" alt="IndiaBills Logo" className={styles.logoImage} />
          </Link>
        </div>
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          {navItems.map((label) => {
            const route = '/' + label.toLowerCase().replace(/\s+/g, '');
            return (
              <Link to={route} key={label} onClick={() => handleNavClick(label)}>
                <ButtonNav label={label} underline={1} />
              </Link>
            );
          })}
        </nav>

        <div className={styles.demoButtonWrapper}>
    <ButtonWithBG 
      label="Start Demo"
      background={1}
      rounded="full"
      onclick={() => console.log('Start Demo Clicked')}
    />
  </div>
        <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </header>

      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Header;
