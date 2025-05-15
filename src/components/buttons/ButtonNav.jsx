import React from 'react';
import styles from './styles/ButtonNav.module.css';

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
