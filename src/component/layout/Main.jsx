// src/component/layout/Main.jsx
import React from 'react';
import styles from './Main.module.css';
import TilesContainer from '../../components/containerTestimonials/TilesContainer';
import Tile from '../../components/containerTestimonials/tile';

const Main = () => {
  return (
    <main className={styles.main}>
      <h1>Dummy Main Content</h1>
      <p>This will be replaced by page components later.</p>
    </main>
  );
};

export default Main;
