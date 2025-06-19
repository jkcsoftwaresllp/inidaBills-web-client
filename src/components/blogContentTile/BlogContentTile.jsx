// components/BlogContentTile.jsx
import React from 'react';
import styles from './BlogContentTile.module.css';

const BlogContentTile = ({ sections }) => {
  return (
    <div className={styles.blogContentTile}>
      {sections.map((section, idx) => {
        const { type, content, listType } = section;

        if (type === 'heading') return <h2 key={idx}>{content}</h2>;
        if (type === 'subheading') return <h3 key={idx}>{content}</h3>;
        if (type === 'paragraph') return <p key={idx}>{content}</p>;
        if (type === 'list' && Array.isArray(content)) {
          return listType === 'ol' ? (
            <ol key={idx}>
              {content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          ) : (
            <ul key={idx}>
              {content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
};

export default BlogContentTile;
