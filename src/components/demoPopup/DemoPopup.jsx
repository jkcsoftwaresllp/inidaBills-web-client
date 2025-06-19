import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './DemoPopup.module.css';
import { X, Calendar, Zap, Shield } from 'lucide-react';
import ButtonWithBG from '../buttons/ButtonWithBG';

const DemoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBookDemo = () => {
    console.log('Demo booked!');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={handleClose}>
          <X size={24} />
        </button>

        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.iconContainer}>
              <Calendar className={styles.mainIcon} size={48} />
            </div>
            <h2 className={styles.title}>Ready to Transform Your Business?</h2>
            <p className={styles.subtitle}>
              See IndiaBills in action with a personalized demo tailored to your business needs
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <Zap className={styles.featureIcon} size={20} />
              <span>15-minute quick demo</span>
            </div>
            <div className={styles.feature}>
              <Shield className={styles.featureIcon} size={20} />
              <span>No commitment required</span>
            </div>
            <div className={styles.feature}>
              <Calendar className={styles.featureIcon} size={20} />
              <span>Schedule at your convenience</span>
            </div>
          </div>

          <div className={styles.actions}>
            <ButtonWithBG
              label="Book Free Demo"
              background={1}
              rounded="lg"
              onclick={handleBookDemo}
            />
            <button className={styles.laterButton} onClick={handleClose}>
              Maybe Later
            </button>
          </div>
        </div>

        <div className={styles.decorativeElements}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </div>
    </div>
  );
};

export default DemoPopup;
