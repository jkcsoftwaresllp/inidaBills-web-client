import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/ButtonWithBG.module.css';

/**
 * ButtonWithBG is a reusable button component with optional background styling and rounded corners.
 *
 * @param {string} label - The text to display inside the button.
 * @param {number} background - 1 for filled red background, 0 for white outlined button.
 * @param {string} rounded - Tailwind border radius type (e.g., 'full', 'lg').
 * @param {number} border - Pass 1 for border white otherwise don't pass border
 * @param {function} onclick - Callback function triggered when the button is clicked.
 * @param {string} redirectTo - Optional route to redirect to when clicked.
 */
function ButtonWithBG({ label, background, rounded, onclick, border, redirectTo }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (redirectTo) {
      navigate(redirectTo);
    } else if (onclick) {
      onclick();
    }
  };

  return (
    <div>
      <button
        className={`
          ${styles.button} 
          ${background === 1 ? styles.filled : styles.outlined}
          ${border && styles.border}
          ${styles[`rounded${rounded}`]}
        `}
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
}

export default ButtonWithBG;