import React from 'react';
import styles from './styles/ButtonWithBG.module.css';

/**
 * ButtonWithBG is a reusable button component with optional background styling and rounded corners.
 *
 * @param {string} label - The text to display inside the button.
 * @param {number} background - 1 for filled red background, 0 for white outlined button.
 * @param {string} rounded - Tailwind border radius type (e.g., 'full', 'lg').
 * @param {function} onclick - Callback function triggered when the button is clicked.
 */

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
