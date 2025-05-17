import React, { useState } from 'react';
import styles from './Header.module.css';
import ButtonNav from "../buttons/ButtonNav"
import ButtonWithBG from "../buttons/ButtonWithBG"

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
        <div className={styles.logo}>IndiaBills</div>
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          {navItems.map((label, idx) => (
            <ButtonNav
              key={label}
              label={label}
              underline={1}
              onclick={() => handleNavClick(label)}
            />
          ))}
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
