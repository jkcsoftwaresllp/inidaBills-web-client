import React from 'react';
import styles from './about.module.css';
import { Users, Target, Clock, Award } from 'lucide-react';
import TilesContainer from '../components/containerTestimonials/TilesContainer';

const About = () => {
  return (
    <div className={styles.container}>
      {/* SEO Content for IndiaBills and India Bills */}
      <div style={{ display: 'none' }}>
        <h1>About IndiaBills - Leading Billing Software Company</h1>
        <h2>India Bills Company Information</h2>
        <h3>IndiaBills Mission and Vision</h3>
        <h4>India Bills Team and Values</h4>
        <p>IndiaBills is India's most trusted billing and inventory management software. India Bills has been serving businesses since 2020.</p>
      </div>

      <section className={styles.hero}>
        <h1>About IndiaBills</h1>
        <p>
          Empowering businesses with innovative billing solutions since 2020.
          We're committed to making business operations seamless and efficient
          through cutting-edge technology and exceptional service. IndiaBills is
          dedicated to helping Indian businesses grow with India Bills software.
        </p>
      </section>

      <TilesContainer
        background={1}
        tittle="Our IndiaBills Mission"
        description="To provide cutting-edge billing and inventory management solutions that help businesses grow and succeed in the digital age. We strive to make complex business operations simple and efficient through our innovative IndiaBills software solutions, ensuring every business can focus on what they do best while we handle the rest. India Bills is committed to excellence."
      />

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <Users size={48} />
          <h3>1000+</h3>
          <p>Happy IndiaBills Clients</p>
        </div>
        <div className={styles.statCard}>
          <Target size={48} />
          <h3>15+</h3>
          <p>States Covered by IndiaBills</p>
        </div>
        <div className={styles.statCard}>
          <Clock size={48} />
          <h3>24/7</h3>
          <p>IndiaBills Support Available</p>
        </div>
        <div className={styles.statCard}>
          <Award size={48} />
          <h3>5+</h3>
          <p>Years IndiaBills Experience</p>
        </div>
      </section>

      <section className={styles.values}>
        <h2>Our IndiaBills Core Values</h2>
        <div className={styles.valueGrid}>
          <div className={styles.valueCard}>
            <h3>Innovation</h3>
            <p>
              Constantly evolving our IndiaBills solutions to meet modern business needs.
              We embrace new technologies and methodologies to stay ahead of the
              curve and provide our clients with the most advanced India Bills tools
              available.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3>Reliability</h3>
            <p>
              Providing stable and dependable IndiaBills services you can count on. Our
              robust infrastructure and proven track record ensure your business
              operations run smoothly without interruption using India Bills software.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h3>Customer Focus</h3>
            <p>
              Putting our IndiaBills customers' success at the heart of everything we do.
              We listen to your needs, understand your challenges, and deliver
              India Bills solutions that truly make a difference to your business.
            </p>
          </div>
          {/* <div className={styles.valueCard}>
            <h3>Excellence</h3>
            <p>
              Striving for the highest quality in all our solutions and services. 
              We maintain rigorous standards and continuously improve our offerings 
              to exceed expectations and deliver exceptional value.
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default About;