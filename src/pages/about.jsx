import React from 'react';
import styles from './about.module.css';
import { Users, Target, Clock, Award } from 'lucide-react';
import TilesContainer from '../components/containerTestimonials/TilesContainer';

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>About IndiaBills</h1>
        <p>Empowering businesses with innovative billing solutions since 2020</p>
      </section>

      {/* <section className={styles.mission}> */}
        <TilesContainer
  background={1} 
  tittle="Our Mission"
  description="To provide cutting-edge billing and inventory management solutions that help businesses grow and succeed in the digital age. We strive to make complex business operations simple and efficient through our innovative software solutions."
>
</TilesContainer>
      {/* </section> */}

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <Users size={32} />
          <h3>1000+</h3>
          <p>Happy Clients</p>
        </div>
        <div className={styles.statCard}>
          <Target size={32} />
          <h3>15+</h3>
          <p>States Covered</p>
        </div>
        <div className={styles.statCard}>
          <Clock size={32} />
          <h3>24/7</h3>
          <p>Support</p>
        </div>
        <div className={styles.statCard}>
          <Award size={32} />
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>
      </section>

      <section className={styles.values}>
        <h2>Our Core Values</h2>
        <div className={styles.valueGrid}>
          <div className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>Constantly evolving our solutions to meet modern business needs</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Reliability</h3>
            <p>Providing stable and dependable services you can count on</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Customer Focus</h3>
            <p>Putting our customers' success at the heart of everything we do</p>
          </div>
          <div className={styles.valueCard}>
            <h3>Excellence</h3>
            <p>Striving for the highest quality in all our solutions</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;