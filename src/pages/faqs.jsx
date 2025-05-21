import React from 'react';
import FAQ from '../components/faq/FAQ';
import styles from './faqs.module.css';

const faqs = [
  {
    question: "What is IndiaBills?",
    answer: "IndiaBills is a comprehensive inventory and billing software designed to simplify the management of sales, purchases, and inventory for businesses of all sizes. It helps businesses streamline processes, manage stock levels, and generate invoices with user-friendly tools."
  },
  {
    question: "How do I install IndiaBills?",
    answer: "You can download IndiaBills from your play store or any browser on your device."
  },
  {
    question: "What are the minimum system requirements for IndiaBills?",
    answer: "To run IndiaBills smoothly, you just need our application or a web browser on your smartphone or PC with a stable internet connection."
  },
  {
    question: "How can I create an account on IndiaBills?",
    answer: "Visit the registration page on our website, enter your details, and verify your email to get started."
  },
  {
    question: "Is IndiaBills suitable for small businesses?",
    answer: "Yes, IndiaBills is perfect for SMEs. It provides easy-to-use features that help manage inventory and billing without technical expertise."
  },
  {
    question: "What is inventory management software?",
    answer: "Inventory management software like IndiaBills helps businesses track stock levels, manage orders, and organize data, reducing errors and saving time."
  },
  {
    question: "How do I reset my password in IndiaBills?",
    answer: "Click on the 'Forgot Password' link on the login page and follow the instructions to reset it via email."
  },
  {
    question: "Can I access IndiaBills on my mobile phone?",
    answer: "Yes, IndiaBills is accessible on mobile devices through our responsive web interface."
  },
  {
    question: "What types of businesses can use IndiaBills?",
    answer: "IndiaBills is suitable for retail stores, wholesalers, manufacturers, service providers, and more."
  },
  {
    question: "Is my data safe with IndiaBills?",
    answer: "Yes, your data is protected with SSL encryption and regular backups, ensuring only authorized access."
  },
  {
    question: "How much does a billing software cost?",
    answer: "IndiaBills offers affordable pricing plans starting from basic packages with premium features."
  },
  {
    question: "Can I generate an invoice on credit, card, UPI, or other payment types?",
    answer: "Yes, IndiaBills supports multiple payment types including credit, card, UPI, and other customizable options."
  },
  {
    question: "Can IndiaBills handle multiple currencies?",
    answer: "Yes, it supports multi-currency transactions for international clients."
  },
  {
    question: "How can IndiaBills help with tax compliance?",
    answer: "It automatically calculates GST and other taxes, ensuring accurate and compliant invoicing."
  },
  {
    question: "Does IndiaBills support barcode scanning?",
    answer: "Yes, IndiaBills integrates with barcode scanners for easy stock entry and product tracking."
  },
  {
    question: "Can IndiaBills be used offline?",
    answer: "No, IndiaBills requires an internet connection for functionality."
  },
  {
    question: "Is there customer support for IndiaBills?",
    answer: "Yes, 24/7 support is available via chat, email, and phone."
  },
  {
    question: "Can IndiaBills be customized for my business needs?",
    answer: "Yes, it offers customizable invoice templates, reports, and user roles."
  },
  {
    question: "How does IndiaBills handle returns and refunds?",
    answer: "You can issue credit notes and update inventory automatically through the software."
  },
  {
    question: "Does IndiaBills support recurring billing?",
    answer: "Yes, automated recurring invoices can be set up for subscription billing."
  },
  {
    question: "Can I import my existing data into IndiaBills?",
    answer: "Yes, customer, product, and invoice data can be imported easily."
  },
  {
    question: "How do I track unpaid invoices with IndiaBills?",
    answer: "You can generate reports to track and manage unpaid invoices."
  },
  {
    question: "Does IndiaBills support multiple users?",
    answer: "Yes, with roles and permissions for team-based access control."
  },
  {
    question: "Can I use IndiaBills for retail business billing?",
    answer: "Yes, it supports POS integration and real-time inventory tracking."
  },
  {
    question: "Is IndiaBills compatible with POS systems?",
    answer: "Yes, it integrates with various POS systems."
  },
  {
    question: "Can I generate e-invoices with IndiaBills?",
    answer: "Yes, compliant e-invoices can be generated and shared digitally."
  },
  {
    question: "How do I update product prices in IndiaBills?",
    answer: "Go to the inventory section and adjust prices individually or in bulk."
  },
  {
    question: "What payment methods does IndiaBills support?",
    answer: "Bank transfers, cards, UPI, and cash payments are supported."
  },
  {
    question: "Can I manage multiple warehouses with IndiaBills?",
    answer: "Yes, inventory can be managed across multiple locations."
  },
  {
    question: "How do I create custom invoices in IndiaBills?",
    answer: "Use the invoice editor to design invoices with your logo, colors, and format."
  },
  {
    question: "Does IndiaBills support mobile access?",
    answer: "Yes, it is accessible from smartphones and tablets."
  },
  {
    question: "Can IndiaBills generate purchase orders?",
    answer: "Yes, purchase orders can be created, tracked, and managed."
  },
  {
    question: "What types of reports can IndiaBills generate?",
    answer: "Sales, purchases, inventory, GST summaries, and customizable reports."
  },
  {
    question: "Is training available for using IndiaBills?",
    answer: "Yes, through tutorials, live sessions, and customer support."
  },
  {
    question: "Can IndiaBills handle discounts and promotions?",
    answer: "Yes, discounts can be applied on invoices and customized per product or client."
  },
  {
    question: "How does IndiaBills help in reducing billing errors?",
    answer: "Automated calculations and template-based invoicing reduce human errors."
  },
  {
    question: "What is the difference between free and paid versions of IndiaBills?",
    answer: "Free offers basic features, while paid versions include premium reports, multi-user support, and customization."
  },
  {
    question: "Does IndiaBills support credit sales tracking?",
    answer: "Yes, you can manage credit terms and track dues efficiently."
  },
  {
    question: "Can I export data from IndiaBills for accounting?",
    answer: "IndiaBills allows you to export data in formats like Excel, CSV, or PDF, making it easy to share with accountants or import into other software."
  }
];

const FAQsPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about IndiaBills</p>
      </section>
      <FAQ faqs={faqs} />
    </div>
  );
};

export default FAQsPage;
