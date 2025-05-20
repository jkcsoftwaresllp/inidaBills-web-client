import React, { useState } from 'react';
import styles from '../components/layout/Main.module.css';
import PricingCard from '../components/pricingCardTemplate/pricingCard';

const setupPlans = [
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

const annualPlans = [
  {
    isPopular: true,
    title: '1 Year Plan',
    price: '5,999',
    description: 'Annual subscription with all features included',
    features: [
      {label: 'Unlimited Warehouse', included: true},
      {label: 'Unlimited Invoices', included: true},
      {label: 'Unlimited Digital Warehouse', included: true},
      {label: 'Unlimited Teams', included: true},
      {label: 'Unlimited Customers', included: true},
      {label: 'Unlimited Products', included: true},
      {label: 'Unlimited Users', included: true},
    ],
    validity: '1 Year'
  },
  {
    isPopular: false,
    title: '3 Year Plan',
    price: '11,999',
    description: '3 years subscription with 2 + 1 year free',
    features: [
      {label: 'Unlimited Warehouse', included: true},
      {label: 'Unlimited Invoices', included: true},
      {label: 'Unlimited Digital Warehouse', included: true},
      {label: 'Unlimited Teams', included: true},
      {label: 'Unlimited Customers', included: true},
      {label: 'Unlimited Products', included: true},
      {label: 'Unlimited Users', included: true},
    ],
    validity: '3 Years (2 + 1 Year Free)'
  },
];

const Main = () => {
  const [activeTab, setActiveTab] = useState('annual');

  return (
    <main className={styles.main}>
      <h1>Our Pricing Plans</h1>
      
      <div className={styles.tabContainer}>
        <button 
          className={`${styles.tabButton} ${activeTab === 'annual' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('annual')}
        >
          Annual Plans
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'setup' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('setup')}
        >
          Setup Assistance
        </button>
      </div>

      <div className={styles.pricingGrid}>
        {activeTab === 'annual' 
          ? annualPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))
          : setupPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))
        }
      </div>
    </main>
  );
};

export default Main;