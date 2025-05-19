import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from '../../pages/pricing';
import Footer from './Footer';
import styles from './Layout.module.css';
import Features from '../../pages/features';

const Layout = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Main />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
