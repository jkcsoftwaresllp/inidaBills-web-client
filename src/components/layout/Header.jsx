// src/component/layout/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className={styles.header}>
      <div className={styles.logo}>IndiaBills</div>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <div className={styles.navItem}>Home</div>
          <div className={styles.navItem}>Features</div>
          <div className={styles.navItem}>Contact</div>
      </nav>
      <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </header>
    {/* Overlay for closing sidebar  */}
    {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Header;
