import React from 'react';
import styles from './styles/FeatureTile.module.css';

/**
 * FeatureTile Component
 *
 * A visually-rich tile that displays an infographic and text content side-by-side.
 *
 * @component
 * @param {Object} props
 * @param {string} props.title - Heading text.
 * @param {string | string[]} props.para - Paragraph text or array of lines.
 * @param {React.ReactNode} props.graphic - JSX infographic or image.
 * @param {'left' | 'right'} props.graphicPosition - Position of graphic ('left' or 'right').
 * @returns {JSX.Element}
 */

function FeatureTile({ title, para, graphic, graphicPosition = 'left' }) {
  const isRight = graphicPosition === 'right';

  return (
    <div className={`${styles.tile} ${isRight ? styles.right : ''}`}>
      <div className={styles.graphic}>{graphic}</div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.para}>
          {Array.isArray(para)
            ? para.map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            : para}
        </p>
      </div>
    </div>
  );
}

export default FeatureTile;
