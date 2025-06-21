// src/pages/Features.jsx
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import { Link } from 'react-router-dom';
import TilesContainer from '../components/containerTestimonials/TilesContainer';
import Tile from '../components/containerTestimonials/Tile';
// import FeatureDetails from '../components/featureDetails/FeatureDetails';
import Testimonials from '../components/containerTestimonials/Testimonials'
import UserDetails from '../components/home/UserDetails';
import styles from './features.module.css';

const featuresData = [
  {
    id: 1,
    title: "Real Time Stock Tracking",
    slug: 'real-time-stock-tracking',
    shortDescription: "Monitor real-time stock trends for smarter decisions",
    detailedDescription: "Keep track of your inventory in real-time with our advanced stock tracking system. Monitor stock levels, get low stock alerts, and make data-driven decisions to optimize your inventory management.",
    businessTypes: [
      "Retail stores",
      "Wholesale businesses",
      "E-commerce platforms",
      "Manufacturing units"
    ],
    screenshot: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800"
  },
  {
    id: 2,
    title: "GST Billing",
    slug: 'gst-billing',
    shortDescription: "Effortless GST billing and inventory management",
    detailedDescription: "Generate GST-compliant invoices instantly with our automated billing system. Handle multiple tax rates, manage GSTIN details, and generate tax reports effortlessly.",
    businessTypes: [
      "Small businesses",
      "Service providers",
      "Retailers",
      "B2B companies"
    ],
    screenshot: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800"
  },
  {
    id: 3,
    title: "Reports",
    slug: 'advanced-reports',
    shortDescription: "Generate detailed reports for orders, sales, and more",
    detailedDescription: "Analyze your business performance with customizable reports for sales, orders, inventory and more.",
    businessTypes: ["All business types"],
    screenshot: "https://www.rib-software.com/app/uploads/2024/06/sales-analytical-report.webp"
  },
  {
    id: 4,
    title: "Dedicated Customer Support",
    slug: 'dedicated-customer-support',
    shortDescription: "Reliable customer support whenever you need it",
    detailedDescription: "Our dedicated support team is available to assist you with any queries or issues you face, ensuring smooth business operations.",
    businessTypes: ["All"],
    screenshot: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800"
  },
  {
    id: 5,
    title: "Unlimited Warehouse",
    slug: 'unlimited-warehouse',
    shortDescription: "Manage multiple warehouses with unlimited capacity",
    detailedDescription: "Track stock and movements across all your warehouses without limits.",
    businessTypes: ["Retail", "Wholesale", "Logistics"],
    screenshot: "https://5.imimg.com/data5/UF/TH/KH/SELLER-12494872/warehouse-management-system-500x500.jpg"
  },
  {
    id: 6,
    title: "Expiry Alert",
    slug: 'expiry-alert',
    shortDescription: "Get timely expiry alerts to avoid stock wastage",
    detailedDescription: "Prevent losses by receiving expiry alerts on perishable or time-sensitive inventory.",
    businessTypes: ["Pharmacies", "FMCG", "Grocery stores"],
    screenshot: "https://c8.alamy.com/comp/EPWPDW/illustration-of-expired-label-design-red-icon-EPWPDW.jpg"
  },
  {
    id: 7,
    title: "Discount & Offers",
    slug: 'discount-offers',
    shortDescription: "Easily apply discounts and manage special offers",
    detailedDescription: "Run promotional campaigns effortlessly by configuring discounts and limited-time offers.",
    businessTypes: ["Retail", "Online businesses"],
    screenshot: "https://images.unsplash.com/photo-1549921296-3a6b6363f4f1?auto=format&fit=crop&w=800"
  },
  {
    id: 8,
    title: "Centralized Dashboard",
    slug: 'centralized-dashboard',
    shortDescription: "Access all your business data through a single dashboard",
    detailedDescription: "Monitor and manage your entire business from a unified dashboard. View key metrics, performance summaries, and actionable insights in one place.",
    businessTypes: ["All business types"],
    screenshot: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800"
  },
  {
    id: 9,
    title: "User Access Management",
    slug: 'user-access-management',
    shortDescription: "Control access with customizable roles and permissions",
    detailedDescription: "Define roles and assign specific permissions to team members to ensure data security and operational control.",
    businessTypes: ["Organizations with multiple users", "Retail chains", "Franchises"],
    screenshot: "https://images.unsplash.com/photo-1614849963646-a54ce1d63bfb?auto=format&fit=crop&w=800"
  },
  {
    id: 10,
    title: "Expenses Tracking",
    slug: 'expenses-tracking',
    shortDescription: "Track and manage business expenses",
    detailedDescription: "Record, categorize, and analyze your business expenses for better financial control and decision-making.",
    businessTypes: ["All businesses", "Finance teams"],
    screenshot: "https://images.unsplash.com/photo-1611974789856-9f9536d4f63c?auto=format&fit=crop&w=800"
  },
  {
    id: 11,
    title: "Order/Delivery Tracking",
    slug: 'order-delivery-tracking',
    shortDescription: "Seamlessly track orders and deliveries in real-time",
    detailedDescription: "Stay on top of every order and its delivery status. Provide better customer service with accurate and timely tracking updates.",
    businessTypes: ["E-commerce", "Logistics", "Retail"],
    screenshot: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b1?auto=format&fit=crop&w=800"
  },
  {
    id: 12,
    title: "Sharable Invoice",
    slug: 'sharable-invoice',
    shortDescription: "Create invoices & share instantly with customers",
    detailedDescription: "Generate professional invoices and share them instantly via email, WhatsApp, or download links. Streamline your billing process and get paid faster.",
    businessTypes: ["Freelancers", "Service providers", "Retailers"],
    screenshot: "https://images.unsplash.com/photo-1581092588429-8b6b9c03a0ba?auto=format&fit=crop&w=800"
  },
  {
    id: 13,
    title: "Unlimited Teams",
    slug: 'unlimited-teams',
    shortDescription: "Manage teams with flexible access controls",
    detailedDescription: "Create and manage multiple teams under one business account. Assign roles and monitor performance with ease.",
    businessTypes: ["Medium to large businesses", "Franchises", "Sales teams"],
    screenshot: "https://images.unsplash.com/photo-1581090700227-1c72ba1cfb0f?auto=format&fit=crop&w=800"
  },
  {
    id: 14,
    title: "Custom Business URL",
    slug: 'custom-business-url',
    shortDescription: "Get a custom business URL for a personalized online presence",
    detailedDescription: "Enhance your brand with a custom business URL. Share your branded link with clients for invoices, catalogs, and communication.",
    businessTypes: ["All businesses", "Freelancers", "Agencies"],
    screenshot: "https://images.unsplash.com/photo-1581091870621-3b5dd89f4d30?auto=format&fit=crop&w=800"
  },
  {
    id: 15,
    title: "Suppliers",
    slug: 'suppliers',
    shortDescription: "Manage and track all your suppliers in one place",
    detailedDescription: "Keep a centralized record of all your suppliers. Track transactions, payments, and product flow from multiple vendors effortlessly.",
    businessTypes: ["Retailers", "Wholesalers", "Manufacturers"],
    screenshot: "https://images.unsplash.com/photo-1566202166293-7f78a062aa7e?auto=format&fit=crop&w=800"
  },
  {
    id: 16,
    title: "Credit Management",
    slug: 'credit-management',
    shortDescription: "Efficiently manage customer credits and payment terms",
    detailedDescription: "Offer and track credit terms with customers, set credit limits, and receive timely alerts for pending payments. Improve cash flow and reduce defaults.",
    businessTypes: ["Retail stores", "Distributors", "B2B services"],
    screenshot: "https://images.unsplash.com/photo-1605902711665-6f8fdf05f7b3?auto=format&fit=crop&w=800"
  },
  {
    id: 17,
    title: "Security of Data",
    slug: 'security-of-data',
    shortDescription: "Ensure the highest level of data security and privacy",
    detailedDescription: "Your business data is protected with enterprise-grade security protocols. We use encryption, secure access controls, and regular backups to keep your data safe.",
    businessTypes: ["All businesses", "Finance & Legal", "Healthcare"],
    screenshot: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800"
  },
  {
    id: 18,
    title: "Sales Summary",
    slug: 'sales-summary',
    shortDescription: "Get a sales summary for better business insights",
    detailedDescription: "Access detailed sales summaries with performance trends, top-selling products, and revenue breakdowns to make informed business decisions.",
    businessTypes: ["Retail", "Wholesale", "E-commerce"],
    screenshot: "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=800"
  },
  {
    id: 19,
    title: "Custom Orders with App",
    slug: 'custom-orders-with-app',
    shortDescription: "Create and manage custom orders easily through the app",
    detailedDescription: "Allow your customers or staff to create and manage custom product orders directly from the mobile app, ensuring flexibility and quick processing.",
    businessTypes: ["Custom manufacturers", "Retailers", "On-demand services"],
    screenshot: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800"
  },
  {
    id: 20,
    title: "Individual Performance",
    slug: 'individual-performance',
    shortDescription: "Effortlessly create and manage custom orders through the app",
    detailedDescription: "Track employee productivity and sales contributions with individual performance analytics to recognize top performers and optimize your workforce.",
    businessTypes: ["Sales teams", "Retail stores", "Service providers"],
    screenshot: "https://images.unsplash.com/photo-1557425493-04a9d3bcdc80?auto=format&fit=crop&w=800"
  },
];

const Features = () => {
  return (
    <div className={styles.container}>
      {/* SEO Meta Tags for Features Page */}
      <div style={{ display: 'none' }}>
        <h1>IndiaBills Features - Complete Billing & Inventory Management Software</h1>
        <p>Discover powerful features of IndiaBills billing software: GST compliance, real-time stock tracking, automated invoicing, advanced reports, and 24/7 support for Indian businesses.</p>
      </div>
      
      <section className={styles.hero}>
        <h1>Powerful Features for Modern Businesses</h1>
        <p>
          Discover comprehensive tools designed to streamline your operations, 
          boost productivity, and drive growth. Every feature is crafted with 
          Indian businesses in mind.
        </p>
      </section>

      <TilesContainer
        background={1}
        tittle="Complete Business Solution"
        description="From inventory management to customer support, we've got everything your business needs to succeed in today's competitive market. Click on any feature to learn more about how it can transform your business operations."
      >
        {featuresData.map((feature) => (
          <Link
            key={feature.id}
            to={`/feature/${feature.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ cursor: 'pointer' }}>
              <Tile tittle={feature.title} para={feature.shortDescription} />
            </div>
          </Link>
        ))}
      </TilesContainer>

      <TilesContainer
        tittle={'Success Stories'}
        description={
          "See how businesses across India are transforming their operations with IndiaBills."
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
