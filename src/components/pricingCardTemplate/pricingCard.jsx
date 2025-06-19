import React, { useState } from 'react';
import styles from "./pricingCard.module.css";
import { CheckCircle, XCircle, Info } from "lucide-react";

const PricingCard = ({
  isPopular,
  title,
  price,
  description,
  features,
  validity,
}) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const featureDescriptions = {
    'Setup Assistance': 'Our team will help you set up your account and configure the software according to your business needs.',
    'Live Testing': 'Test all features with real data in a safe environment before going live with your business.',
    'Product Listing': 'We will help you add your products to the system with proper categorization and pricing.',
    'Inventory Update': 'Import and update your existing inventory data into the system with proper stock levels.',
    'Prior Data Import': 'Import all your historical data including customers, suppliers, and transaction history.',
    'Priority Support': 'Get faster response times and dedicated support for any issues or questions.',
    'Unlimited Warehouse': 'Manage multiple warehouses and locations without any restrictions on quantity.',
    'Unlimited Invoices': 'Generate unlimited invoices without any monthly or yearly limits.',
    'Unlimited Digital Warehouse': 'Create virtual warehouses for better inventory organization and management.',
    'Unlimited Teams': 'Add unlimited team members with customizable roles and permissions.',
    'Unlimited Customers': 'Manage unlimited customer records with complete contact and transaction history.',
    'Unlimited Products': 'Add unlimited products with detailed specifications, pricing, and inventory tracking.',
    'Unlimited Users': 'No restrictions on the number of users who can access the system simultaneously.'
  };

  return (
    <div className={`${styles.card} ${isPopular ? styles.popular : ''}`}>
      {isPopular && <div className={styles.popularTag}>MOST POPULAR</div>}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>
        ₹{price}
        <span className={styles.month}>/plan</span>
      </p>
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
            <div 
              className={styles.infoButton}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <Info size={14} />
              {hoveredFeature === index && (
                <div className={styles.tooltip}>
                  {featureDescriptions[feature.label] || 'Feature description not available.'}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button className={styles.button}>Get Started</button>
    </div>
  );
};

export default PricingCard;