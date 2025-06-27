// src/pages/Features.jsx
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { Link } from 'react-router-dom';
import TilesContainer from '../components/containerTestimonials/TilesContainer';
import FeatureTileWithIcon from '../components/containerTestimonials/FeatureTileWithIcon';
import Testimonials from '../components/containerTestimonials/Testimonials';
import UserDetails from '../components/home/UserDetails';
import styles from './features.module.css';
import RealTimeStockTracking from '../Icons/RealTimeStockTracking.png';
import GSTBilling from '../Icons/GSTBilling.png';
import Reports from '../Icons/Reports.png';
import DedicatedCustomerSupport from '../Icons/DedicatedCustomerSupport.png';
import UnlimitedWarehouse from '../Icons/UnlimitedWarehouse.png';
import ExpiryAlert from '../Icons/ExpiryAlert.png';
import DiscountAndOffers from '../Icons/DiscountAndOffers.png';
import CentralizedDashboard from '../Icons/CentralizedDashboard.png';
import UserAccessManagement from '../Icons/UserAccessManagement.png';
import ExpensesTracking from '../Icons/ExpensesTracking.png';
import OrderDeliveryTracking from '../Icons/OrderDeliveryTracking.png';
import SharableInvoice from '../Icons/SharableInvoice.png';
import UnlimitedTeams from '../Icons/UnlimitedTeams.png';
import CustomBusinessURL from '../Icons/CustomBusinessURL.png';
import Suppliers from '../Icons/Suppliers.png';
import CreditManagement from '../Icons/CreditManagement.png';
import SecurityOfData from '../Icons/SecurityOfData.png';
import SalesSummary from '../Icons/SalesSummary.png';
import CustomOrdersWithApp from '../Icons/CustomOrdersWithApp.png';
import IndividualPerformance from '../Icons/IndividualPerformance.png';

const featuresData = [
  {
    id: 1,
    title: 'Real Time Stock Tracking',
    slug: 'real-time-stock-tracking',
    shortDescription: 'Monitor real-time stock trends for smarter decisions',
    icon: <img src={RealTimeStockTracking} alt="Real Time Stock Tracking" width={40} height={40} />,
  },
  {
    id: 2,
    title: 'GST Billing',
    slug: 'gst-billing',
    shortDescription: 'Effortless GST billing and inventory management',
    icon: <img src={GSTBilling} alt="GST Billing" width={40} height={40} />,
  },
  {
    id: 3,
    title: 'Reports',
    slug: 'advanced-reports',
    shortDescription: 'Generate detailed reports for orders, sales, and more',
    icon: <img src={Reports} alt="Reports" width={40} height={40} />,
  },
  {
    id: 4,
    title: 'Dedicated Customer Support',
    slug: 'dedicated-customer-support',
    shortDescription: 'Reliable customer support whenever you need it',
    icon: <img src={DedicatedCustomerSupport} alt="Dedicated Customer Support" width={40} height={40} />,
  },
  {
    id: 5,
    title: 'Unlimited Warehouse',
    slug: 'unlimited-warehouse',
    shortDescription: 'Manage multiple warehouses with unlimited capacity',
    icon: <img src={UnlimitedWarehouse} alt="Unlimited Warehouse" width={40} height={40} />,
  },
  {
    id: 6,
    title: 'Expiry Alert',
    slug: 'expiry-alert',
    shortDescription: 'Get timely expiry alerts to avoid stock wastage',
    icon: <img src={ExpiryAlert} alt="Expiry Alert" width={40} height={40} />,
  },
  {
    id: 7,
    title: 'Discount & Offers',
    slug: 'discount-offers',
    shortDescription: 'Easily apply discounts and manage special offers',
    icon: <img src={DiscountAndOffers} alt="Discount & Offers" width={40} height={40} />,
  },
  {
    id: 8,
    title: 'Centralized Dashboard',
    slug: 'centralized-dashboard',
    shortDescription: 'Access all your business data through a single dashboard',
    icon: <img src={CentralizedDashboard} alt="Centralized Dashboard" width={40} height={40} />,
  },
  {
    id: 9,
    title: 'User Access Management',
    slug: 'user-access-management',
    shortDescription: 'Control access with customizable roles and permissions',
    icon: <img src={UserAccessManagement} alt="User Access Management" width={40} height={40} />,
  },
  {
    id: 10,
    title: 'Expenses Tracking',
    slug: 'expenses-tracking',
    shortDescription: 'Track and manage business expenses',
    icon: <img src={ExpensesTracking} alt="Expenses Tracking" width={40} height={40} />,
  },
  {
    id: 11,
    title: 'Order/Delivery Tracking',
    slug: 'order-delivery-tracking',
    shortDescription: 'Seamlessly track orders and deliveries in real-time',
    icon: <img src={OrderDeliveryTracking} alt="Order/Delivery Tracking" width={40} height={40} />,
  },
  {
    id: 12,
    title: 'Sharable Invoice',
    slug: 'sharable-invoice',
    shortDescription: 'Create invoices & share instantly with customers',
    icon: <img src={SharableInvoice} alt="Sharable Invoice" width={40} height={40} />,
  },
  {
    id: 13,
    title: 'Unlimited Teams',
    slug: 'unlimited-teams',
    shortDescription: 'Manage teams with flexible access controls',
    icon: <img src={UnlimitedTeams} alt="Unlimited Teams" width={40} height={40} />,
  },
  {
    id: 14,
    title: 'Custom Business URL',
    slug: 'custom-business-url',
    shortDescription: 'Get a custom business URL for a personalized online presence',
    icon: <img src={CustomBusinessURL} alt="Custom Business URL" width={40} height={40} />,
  },
  {
    id: 15,
    title: 'Suppliers',
    slug: 'suppliers',
    shortDescription: 'Manage and track all your suppliers in one place',
    icon: <img src={Suppliers} alt="Suppliers" width={40} height={40} />,
  },
  {
    id: 16,
    title: 'Credit Management',
    slug: 'credit-management',
    shortDescription: 'Efficiently manage customer credits and payment terms',
    icon: <img src={CreditManagement} alt="Credit Management" width={40} height={40} />,
  },
  {
    id: 17,
    title: 'Security of Data',
    slug: 'security-of-data',
    shortDescription: 'Ensure the highest level of data security and privacy',
    icon: <img src={SecurityOfData} alt="Security of Data" width={40} height={40} />,
  },
  {
    id: 18,
    title: 'Sales Summary',
    slug: 'sales-summary',
    shortDescription: 'Get a sales summary for better business insights',
    icon: <img src={SalesSummary} alt="Sales Summary" width={40} height={40} />,
  },
  {
    id: 19,
    title: 'Custom Orders with App',
    slug: 'custom-orders-with-app',
    shortDescription: 'Create and manage custom orders easily through the app',
    icon: <img src={CustomOrdersWithApp} alt="Custom Orders with App" width={40} height={40} />,
  },
  {
    id: 20,
    title: 'Individual Performance',
    slug: 'individual-performance',
    shortDescription: 'Track employee productivity and sales contributions',
    icon: <img src={IndividualPerformance} alt="Individual Performance" width={40} height={40} />,
  },
];

const Features = () => {
  const handleFeatureClick = (slug) => {
    // Navigate to feature detail page
    window.location.href = `/feature/${slug}`;
  };

  return (
    <div className={styles.container}>
      {/* SEO Meta Tags for Features Page */}
      <div style={{ display: 'none' }}>
        <h1>
          IndiaBills Features - Complete Billing & Inventory Management Software
        </h1>
        <p>
          Discover powerful features of IndiaBills billing software: GST
          compliance, real-time stock tracking, automated invoicing, advanced
          reports, and 24/7 support for Indian businesses.
        </p>
        <h2>India Bills Software Features</h2>
        <h3>IndiaBills Inventory Management</h3>
        <h4>India Bills GST Billing</h4>
        <h5>IndiaBills Real-time Stock Tracking</h5>
        <h6>India Bills Advanced Reports</h6>
      </div>

      <section className={styles.hero}>
        <h1>Powerful Features for Modern Businesses</h1>
        <p>
          Discover comprehensive tools designed to streamline your operations,
          boost productivity, and drive growth. Every IndiaBills feature is crafted with
          Indian businesses in mind. India Bills provides complete business solutions.
        </p>
      </section>

      <TilesContainer
        background={1}
        tittle="Complete IndiaBills Business Solution"
        description="From inventory management to customer support, IndiaBills has everything your business needs to succeed in today's competitive market. India Bills features are designed for Indian businesses. Click on any IndiaBills feature to learn more about how it can transform your business operations."
      >
        {featuresData.map((feature) => (
          <FeatureTileWithIcon
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.shortDescription}
            onClick={() => handleFeatureClick(feature.slug)}
            color="primary"
          />
        ))}
      </TilesContainer>

      <TilesContainer
        tittle={'IndiaBills Success Stories'}
        description={
          'See how businesses across India are transforming their operations with IndiaBills. India Bills has helped thousands of businesses grow.'
        }
        background={0}
      >
        <Testimonials
          username={'Priya Mehta'}
          bio={'Boutique Owner, Jaipur'}
          review={
            'IndiaBills made billing so effortless. I can now focus more on customers than on paperwork. The UI is intuitive and saves me so much time.'
          }
          iconText={'PM'}
          stars={'★★★★★'}
        />

        <Testimonials
          username={'Vikram Singh'}
          bio={'Electronics Dealer, Hyderabad'}
          review={
            'The automated tax calculations and real-time reports are incredibly helpful. I no longer need to hire someone just to manage GST filings.'
          }
          iconText={'VS'}
          stars={'★★★★★'}
        />

        <Testimonials
          username={'Farah Ali'}
          bio={'Cafe Owner, Lucknow'}
          review={
            'Excellent platform! Easy to use and very efficient. The support team walked me through the onboarding and solved all my doubts.'
          }
          iconText={'FA'}
          stars={'★★★★★'}
        />
      </TilesContainer>

      <UserDetails />
    </div>
  );
};

export default Features;
