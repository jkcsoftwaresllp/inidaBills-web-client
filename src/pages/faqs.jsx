import React from 'react';
import FAQ from '../components/faq/FAQ';
import styles from './faqs.module.css';

const faqs = [
  {
    question: "What is IndiaBills?",
    answer: "IndiaBills is a comprehensive billing and inventory management solution designed specifically for Indian businesses. It helps you manage invoices, inventory, and GST compliance all in one place."
  },
  {
    question: "How do I get started with IndiaBills?",
    answer: "Getting started is easy! Simply sign up for an account, choose your subscription plan, and our team will help you set up your business profile. We also provide initial training to help you make the most of our features."
  },
  {
    question: "Is my data secure with IndiaBills?",
    answer: "Yes, absolutely! We use industry-standard encryption and security measures to protect your data. Our servers are hosted in secure facilities, and we regularly backup your data to prevent any loss."
  },
  {
    question: "Can I use IndiaBills on multiple devices?",
    answer: "Yes, IndiaBills is cloud-based and can be accessed from any device with an internet connection. We have web, desktop, and mobile applications available for your convenience."
  },
  {
    question: "Do you provide customer support?",
    answer: "Yes, we provide 24/7 customer support through multiple channels including phone, email, and chat. Our support team is well-trained to help you with any questions or issues you may have."
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