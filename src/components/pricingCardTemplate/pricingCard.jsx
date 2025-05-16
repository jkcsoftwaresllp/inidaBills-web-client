import React from 'react';
import styles from "./pricingCard.module.css";
import { CheckCircle} from "lucide-react";

const PricingCard = ({ isPopular, title, price, description, features }) => {
  return (
    <div className={`${styles.card} ${isPopular ? styles.popular : ''}`}>
      {isPopular && <div className={styles.popularTag}>MOST POPULAR</div>}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>₹{price}<span className={styles.month}>/month</span></p>
      <p className={styles.description}>{description}</p>
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <CheckCircle size={16} color="green" /> {feature}
          </li>
        ))}
      </ul>
      <button className={styles.button}>Get Started</button>
    </div>
  );
};

export default PricingCard;