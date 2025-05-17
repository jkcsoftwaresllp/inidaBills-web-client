// src/pages/Features.jsx
import React from 'react';
import Header from '../components/layout/Header';
import TilesContainer from '../components/containerTestimonials/TilesContainer';
import Tile from '../components/containerTestimonials/Tile';

const Features = () => {
  return (
    <>
      <TilesContainer
        background={1}
        tittle="Product Features"
        description="Discover the powerful modules that make IndiaBills the perfect solution for your business needs."
      >
        <Tile
          tittle="Real Time Stock Tracking"
          para="Monitor real-time stock trends for smarter decisions"
        />
        <Tile
          tittle="GST Billing"
          para="Effortless GST billing and inventory management"
        />
        <Tile
          tittle="Reports"
          para="Generate detailed reports for orders, sales, and more"
        />
        <Tile
          tittle="Dedicated Customer Support"
          para="Reliable customer support whenever you need it"
        />
        <Tile
          tittle="Unlimited Warehouse"
          para="Manage multiple warehouses with unlimited capacity"
        />
        <Tile
          tittle="Expiry Alert"
          para="Get timely expiry alerts to avoid stock wastage"
        />
        <Tile
          tittle="Discount & Offers"
          para="Easily apply discounts and manage special offers"
        />
        <Tile
          tittle="Centralized Dashboard"
          para="Access all your business data through a single dashboard"
        />
        <Tile
          tittle="User Access Management"
          para="Control access with customizable roles and permissions"
        />
        <Tile
          tittle="Expenses Tracking"
          para="Track and manage business expenses"
        />
        <Tile
          tittle="Order/Delivery Tracking"
          para="Seamlessly track orders and deliveries in real-time"
        />
        <Tile
          tittle="Sharable Invoice"
          para="Create invoices & share instantly with customers"
        />
        <Tile
          tittle="Unlimited Teams"
          para="Manage teams with flexible access controls"
        />
        <Tile
          tittle="Custom Business URL"
          para="Get a custom business URL for a personalized online presence"
        />
        <Tile
          tittle="Suppliers"
          para="Manage and track all your suppliers in one place"
        />
        <Tile
          tittle="Credit Management"
          para="Efficiently manage customer credits and payment terms"
        />
        <Tile
          tittle="Security of Data"
          para="Ensure the highest level of data security and privacy"
        />
        <Tile
          tittle="Sales Summary"
          para="Get a sales summary for better business insights"
        />
        <Tile
          tittle="Custom Orders with App"
          para="Create and manage custom orders easily through the app"
        />
        <Tile
          tittle="Individual Performance"
          para="Effortlessly create and manage custom orders through the app"
        />
      </TilesContainer>
    </>
  );
};

export default Features;
