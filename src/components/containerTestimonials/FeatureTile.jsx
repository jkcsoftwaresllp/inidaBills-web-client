import React, { useState } from 'react';
import styles from './styles/FeatureTile.module.css';

function FeatureTile({ title, para, graphic, graphicPosition = 'left', readMoreText = 'Read more', readMoreLink }) {
  const isRight = graphicPosition === 'right';
  const [expanded, setExpanded] = useState(false);

  const shouldClamp = typeof para === 'string' && para.length > 300;

  return (
    <div className={`${styles.tile} ${isRight ? styles.right : ''}`}>
      <div className={styles.graphic}>{graphic}</div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={`${styles.para} ${expanded ? styles.expanded : ''}`}>
          {typeof para === 'string'
            ? para
            : para.map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
        </p>

        {shouldClamp && (
          <button className={styles.readMore} onClick={() => setExpanded((prev) => !prev)}>
            {expanded ? 'Read less' : readMoreText}
          </button>
        )}

        {!shouldClamp && readMoreText && readMoreLink && (
          <a href={readMoreLink} className={styles.readMore}>
            {readMoreText}
          </a>
        )}
      </div>
    </div>
  );
}

export default FeatureTile;
