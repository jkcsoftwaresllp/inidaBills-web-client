import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from '../../pages/pricing';
import Footer from './Footer';
import styles from './Layout.module.css';
import Features from '../../pages/features';
import About from '../../pages/about';
import Contact from '../../pages/contact';
import FAQsPage from '../../pages/faqs';
import Home from '../../pages/home';
import ScrollToTop from '../scrollToTop';


const Layout = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className={styles.container}>
        <Header />
        {/* <Home /> */}
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Main />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/faqs" element={<FAQsPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
