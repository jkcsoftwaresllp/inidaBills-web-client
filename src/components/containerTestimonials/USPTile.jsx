import React from 'react';
import styles from './styles/USPTile.module.css';

/**
 * USPTile Component
 *
 * A detailed tile component for showcasing Unique Selling Propositions (USPs).
 * Features an icon, title, description, and key benefits list.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Icon component or JSX element
 * @param {string} props.title - Main title of the USP
 * @param {string} props.description - Detailed description of the USP
 * @param {string[]} props.benefits - Array of key benefits
 * @param {string} props.color - Color theme for the tile (optional)
 * @returns {JSX.Element}
 */

function USPTile({ icon, title, description, benefits, color = 'primary' }) {
  return (
    <div className={`${styles.tile} ${styles[color]}`}>
      <div className={styles.iconContainer}>
        {icon}
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {benefits && benefits.length > 0 && (
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index} className={styles.benefit}>
                <span className={styles.checkmark}>✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className={styles.decorativeElement}></div>
    </div>
  );
}

export default USPTile;