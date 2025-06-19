import React, { useState, useEffect } from 'react';
import styles from './CustomNotification.module.css';
import { CheckCircle, X, AlertCircle, Info } from 'lucide-react';

const CustomNotification = ({ 
  message, 
  type = 'success', 
  isVisible, 
  onClose, 
  duration = 4000 
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={24} />;
      case 'error':
        return <AlertCircle size={24} />;
      case 'info':
        return <Info size={24} />;
      default:
        return <CheckCircle size={24} />;
    }
  };

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          {getIcon()}
        </div>
        <div className={styles.message}>
          {message}
        </div>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={20} />
        </button>
      </div>
      <div className={styles.progressBar}></div>
    </div>
  );
};

export default CustomNotification;