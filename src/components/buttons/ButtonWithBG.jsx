import React from 'react';
import styles from './styles/ButtonWithBG.module.css';

function ButtonWithBG({ label, background, rounded, onclick }) { //Pass background as 1 or 0 and rounded as "full" or "lg"
  return (
    <div>
      <button
        className={`
          ${styles.button} 
          ${background === 1 ? styles.filled : styles.outlined}
          ${styles[`rounded${rounded}`]}
        `}
        onClick={onclick}
      >
        {label}
      </button>
    </div>
  );
}

export default ButtonWithBG;
