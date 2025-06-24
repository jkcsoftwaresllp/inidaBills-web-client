import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import ButtonNav from '../buttons/ButtonNav';
import ButtonWithBG from '../buttons/ButtonWithBG';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navItems = [
    'Home',
    'Features',
    'Pricing',
    'About Us',
    'Contact Us',
    'Blogs',
    'FAQs',
  ];

  const handleNavClick = (label) => {
    console.log(`Navigated to ${label}`);
    setIsOpen(false);
  };

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);

    // Listen for storage changes to update login status
    const handleStorageChange = () => {
      const token = localStorage.getItem('authToken');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('storage', handleStorageChange);

    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src="/favicon.png"
              alt="IndiaBills Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        {isOpen && (
          <div
            className={styles.overlay}
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          {navItems.map((label) => {
            const route = '/' + label.toLowerCase().replace(/\s+/g, '');
            return (
              <Link
                to={route}
                key={label}
                onClick={() => handleNavClick(label)}
              >
                <ButtonNav label={label} underline={1} />
              </Link>
            );
          })}
          
          {!isLoggedIn && (
            <>
              <Link to ="/login" onClick={() => handleNavClick('Login')}>
                 <ButtonNav label="Login" underline={1} />
              </Link>
            </>
          )}
        </nav>

        <div className={styles.demoButtonWrapper}>
          {isLoggedIn ? (
            <ButtonWithBG
              label="Dashboard"
              background={1}
              rounded="full"
              redirectTo="/dashboard"
            />
          ) : (
            <ButtonWithBG
              label="Start Demo"
              background={1}
              rounded="full"
              redirectTo="/login"
            />
          )}
        </div>

        <button className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </header>
    </>
  );
};

export default Header;