import React from 'react';
import styles from './styles/FeatureTileWithIcon.module.css';

/**
 * FeatureTileWithIcon Component
 *
 * A feature tile component that displays an icon, title, and description.
 * Used for showcasing features with visual icons.
 *
 * @component
 * @param {Object} props - Props passed to the component.
 * @param {React.ReactNode} props.icon - The icon component or JSX element to display.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.description - The description of the feature.
 * @param {function} props.onClick - Optional click handler for the tile.
 * @param {string} props.color - Color theme for the tile (optional).
 * @returns {JSX.Element} The rendered FeatureTileWithIcon component.
 */
function FeatureTileWithIcon({ icon, title, description, onClick, color = 'primary' }) {
  return (
    <div 
      className={`${styles.tile} ${styles[color]} ${onClick ? styles.clickable : ''}`}
      onClick={onClick}
    >
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.decorativeElement}></div>
    </div>
  );
}

export default FeatureTileWithIcon;