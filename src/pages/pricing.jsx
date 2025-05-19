import React from 'react';
import styles from '../components/layout/Main.module.css';
import PricingCard from '../components/pricingCardTemplate/pricingCard';

const plans = [
  {
    isPopular: false,
    title: 'Standard',
    price: '1,999',
    description: 'Perfect for small businesses just getting started',
    features: [
      {label: 'Setup Assistance', included: true},
      {label: 'Live Testing', included: true},
      {label: 'Product Listing', included: false},
      {label: 'Inventory Update', included: false},
      {label: 'Prior Data Import', included: false},
      {label: 'Priority Support', included: false},
    ],
  },
  {
    isPopular: true,
    title: 'Business',
    price: '5,999',
    description: 'For growing businesses with more requirements',
    features: [
      {label: 'Setup Assistance', included: true},
      {label: 'Live Testing', included: true},
      {label: 'Product Listing', included: true},
      {label: 'Inventory Update', included: true},
      {label: 'Prior Data Import', included: false},
      {label: 'Priority Support', included: true},
    ],
  },
  {
    isPopular: false,
    title: 'Business Plus',
    price: '9,999',
    description: 'For larger businesses with advanced needs',
    features: [
      {label: 'Setup Assistance', included: true},
      {label: 'Live Testing', included: true},
      {label: 'Product Listing', included: true},
      {label: 'Inventory Update', included: true},
      {label: 'Prior Data Import', included: true},
      {label: 'Priority Support', included: true},
    ],
  },
];

const Main = () => {
  return (
    <main className={styles.main}>
      <h1>Our Pricing Plans</h1>
      <div className={styles.pricingGrid}>
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </main>
  );
};

export default Main;