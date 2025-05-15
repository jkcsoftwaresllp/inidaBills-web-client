import React from 'react';
import styles from './styles/ButtonNav.module.css';

/**
 * ButtonNav is a navigation button with optional underline animation on hover.
 *
 * @param {string} label - The text label of the button.
 * @param {number} underline - If not 0, shows an animated red underline.
 * @param {function} onclick - Callback function triggered on click.
 */

function ButtonNav({ label, underline, onclick }) { //Pass underline as 1 or 0
  return (
    <div>
      <button className={styles.button} onClick={onclick}>
        <span className={styles.label}>
          {label}
          <span
            className={`${styles.underline} ${underline === 0 ? styles.hidden : ''}`}
          ></span>
        </span>
      </button>
    </div>
  );
}

export default ButtonNav;
