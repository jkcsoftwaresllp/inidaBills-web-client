import React from 'react';
import styles from "./pricingCard.module.css";
import { CheckCircle, XCircle } from "lucide-react";

const PricingCard = ({ isPopular, title, price, description, features, validity }) => {
  return (
    <div className={`${styles.card} ${isPopular ? styles.popular : ''}`}>
      {isPopular && <div className={styles.popularTag}>MOST POPULAR</div>}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>₹{price}<span className={styles.month}>/plan</span></p>
      {validity && <p className={styles.validity}>Valid for {validity}</p>}
      <p className={styles.description}>{description}</p>
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            {feature.included ? (
              <CheckCircle size={16} color="green" />
            ) : (
              <XCircle size={16} color="red" />
            )}
            <span className={styles.featureText}>{feature.label}</span>
          </li>
        ))}
      </ul>
      <button className={styles.button}>Get Started</button>
    </div>
  );
};

export default PricingCard;