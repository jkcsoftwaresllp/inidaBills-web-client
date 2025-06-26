import React, { useState } from 'react';
import styles from './pricing.module.css';
import PricingCard from '../components/pricingCardTemplate/pricingCard';

const setupPlans = [
  {
    isPopular: false,
    title: 'Standard',
    price: '1,999',
    description: 'Perfect for small businesses just getting started',
    features: [
      { label: 'Setup Assistance', included: true },
      { label: 'Live Testing', included: true },
      { label: 'Product Listing', included: false },
      { label: 'Inventory Update', included: false },
      { label: 'Prior Data Import', included: false },
      { label: 'Priority Support', included: false },
    ],
  },
  {
    isPopular: true,
    title: 'Business',
    price: '5,999',
    description: 'For growing businesses with more requirements',
    features: [
      { label: 'Setup Assistance', included: true },
      { label: 'Live Testing', included: true },
      { label: 'Product Listing', included: true },
      { label: 'Inventory Update', included: true },
      { label: 'Prior Data Import', included: false },
      { label: 'Priority Support', included: true },
    ],
  },
  {
    isPopular: false,
    title: 'Business Plus',
    price: '9,999',
    description: 'For larger businesses with advanced needs',
    features: [
      { label: 'Setup Assistance', included: true },
      { label: 'Live Testing', included: true },
      { label: 'Product Listing', included: true },
      { label: 'Inventory Update', included: true },
      { label: 'Prior Data Import', included: true },
      { label: 'Priority Support', included: true },
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
      { label: 'Unlimited Warehouse', included: true },
      { label: 'Unlimited Invoices', included: true },
      { label: 'Unlimited Digital Warehouse', included: true },
      { label: 'Unlimited Teams', included: true },
      { label: 'Unlimited Customers', included: true },
      { label: 'Unlimited Products', included: true },
      { label: 'Unlimited Users', included: true },
    ],
    validity: '1 Year',
  },
  {
    isPopular: false,
    title: '3 Year Plan',
    price: '11,999',
    description: '3 years subscription with 2 + 1 year free',
    features: [
      { label: 'Unlimited Warehouse', included: true },
      { label: 'Unlimited Invoices', included: true },
      { label: 'Unlimited Digital Warehouse', included: true },
      { label: 'Unlimited Teams', included: true },
      { label: 'Unlimited Customers', included: true },
      { label: 'Unlimited Products', included: true },
      { label: 'Unlimited Users', included: true },
    ],
    validity: '3 Years (2 + 1 Year Free)',
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('annual');

  return (
    <div className={styles.container}>
      {/* SEO Content for IndiaBills and India Bills */}
      <div style={{ display: 'none' }}>
        <h1>IndiaBills Pricing - Affordable Billing Software Plans</h1>
        <h2>India Bills Pricing Plans</h2>
        <h3>IndiaBills Annual Subscription</h3>
        <h4>India Bills Setup Assistance</h4>
        <p>IndiaBills offers the most competitive pricing for billing software in India. India Bills pricing is designed for businesses of all sizes.</p>
      </div>

      <section className={styles.hero}>
        <h1>Simple, Transparent Pricing</h1>
        <p>
          Choose the perfect IndiaBills plan for your business. No hidden fees, no
          surprises. Start with our free trial and upgrade when you're ready to
          scale. India Bills offers affordable pricing for all business types.
        </p>
      </section>

      <div className={styles.main}>
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tabButton} ${
              activeTab === 'annual' ? styles.activeTab : ''
            }`}
            onClick={() => setActiveTab('annual')}
          >
            Annual Plans
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === 'setup' ? styles.activeTab : ''
            }`}
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
              ))}
        </div>

        {/* <div className={styles.guarantee}>
          <h3>30-Day Money Back Guarantee</h3>
          <p>
            Try IndiaBills risk-free. If you're not completely satisfied within 30 days, 
            we'll refund your money, no questions asked.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;