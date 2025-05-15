import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
