import React from 'react';
import styles from './FeatureDetails.module.css';
import { X } from 'lucide-react';

const FeatureDetails = ({ feature, onClose }) => {
  if (!feature) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className={styles.content}>
          <h2 className={styles.title}>{feature.title}</h2>
          
          <div className={styles.section}>
            <h3>Detailed Description</h3>
            <p>{feature.detailedDescription}</p>
          </div>

          <div className={styles.section}>
            <h3>Ideal For</h3>
            <ul className={styles.businessList}>
              {feature.businessTypes.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Feature Screenshot</h3>
            <div className={styles.imageContainer}>
              <img src={feature.screenshot} alt={feature.title} className={styles.screenshot} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;