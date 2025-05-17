import React from 'react';
import styles from './Main.module.css';
import PricingCard from '../pricingCardTemplate/pricingCard';
import TilesContainer from '../../components/containerTestimonials/TilesContainer';
import Tile from '../../components/containerTestimonials/tile';

const plans = [
  {
    isPopular: false,
    title: 'Basic',
    price: '499',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Up to 100 invoices/month',
      'Basic inventory management',
      'GST compliant invoices',
      'Email support',
    ],
  },
  {
    isPopular: true,
    title: 'Professional',
    price: '999',
    description: 'For growing businesses with more requirements',
    features: [
      'Unlimited invoices',
      'Advanced inventory management',
      'Multiple business locations',
      'Priority phone & email support',
      'Advanced reporting',
    ],
  },
];

const Main = () => {
  return (
    <main className={styles.main}>
      <h1>Our Pricing Plans</h1>
      <p>This is defined here just for the demo purpose, later will be shifted to the Pricing page</p>
      <div className={styles.pricingGrid}>
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </main>
  );
};

export default Main;
