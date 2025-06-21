const CreditManagement = () => ({
  title: 'Credit Management',
  shortDescription: 'Efficiently manage customer credits and payment terms',
  category: 'Payments & Finance',
  image: 'https://images.unsplash.com/photo-1605902711665-6f8fdf05f7b3?auto=format&fit=crop&w=1200',
  detailedDescription: 'Offer and track credit terms with customers, set credit limits, and receive timely alerts for pending payments. Improve cash flow, reduce defaults, and maintain better financial discipline across your business network.',

  whatMakesItDifferent: [
    'Set customer-specific credit limits and durations',
    'Track outstanding balances and overdue invoices in real-time',
    'Automated alerts for due and overdue payments',
    'Detailed credit reports with payment history and risk indicators',
    'Integrated with billing, ledger, and accounts modules',
    'Supports partial payments and credit rollovers'
  ],

  idealFor: [
    {
      businessType: 'Retail Stores',
      description: 'Perfect for retail businesses offering deferred payments to repeat customers.',
      benefits: ['Track credit customers accurately', 'Avoid confusion on pending dues', 'Set credit periods based on trust', 'Improve cash flow transparency']
    },
    {
      businessType: 'Distributors',
      description: 'Essential for managing large B2B client accounts with variable credit terms.',
      benefits: ['Set and enforce credit limits', 'Monitor total exposure per client', 'Avoid over-crediting and defaults', 'Automate follow-ups and reminders']
    },
    {
      businessType: 'B2B Services',
      description: 'Helps service providers maintain proper credit records and receivables.',
      benefits: ['Track contract-based billing', 'Send automated due alerts', 'Allow controlled flexibility in payment cycles', 'Improve financial forecasting']
    },
    {
      businessType: 'Wholesalers',
      description: 'Useful for bulk sellers offering net-30/60 payment terms.',
      benefits: ['Prevent missed collections', 'Get alerted on high-risk clients', 'Enable partial settlements', 'Boost long-term client trust']
    }
  ],

  keyFeatures: [
    {
      feature: 'Customer Credit Limits',
      description: 'Define how much credit a customer can utilize and track usage live.'
    },
    {
      feature: 'Due & Overdue Alerts',
      description: 'Receive reminders when customer payments are nearing or crossing their due dates.'
    },
    {
      feature: 'Outstanding Balance Tracking',
      description: 'Know exactly how much is owed by each credit customer at any point in time.'
    },
    {
      feature: 'Credit History Logs',
      description: 'Full log of credit usage, payments made, and overdue instances per customer.'
    },
    {
      feature: 'Partial Payment Handling',
      description: 'Accept and record partial payments against open invoices.'
    },
    {
      feature: 'Aging Reports',
      description: 'Breakdown of receivables by 0-30, 31-60, 61-90, and 90+ days for analysis.'
    }
  ],

  screenshots: [
    {
      title: 'Customer Credit Summary',
      image: 'https://images.unsplash.com/photo-1605902711665-6f8fdf05f7b3?auto=format&fit=crop&w=800',
      description: 'Live overview of each customer’s credit usage, limits, and due amounts'
    },
    {
      title: 'Credit Limit Setup',
      image: 'https://images.unsplash.com/photo-1591696331119-f69a6e32fe98?auto=format&fit=crop&w=800',
      description: 'Set custom limits, durations, and terms for each customer'
    },
    {
      title: 'Aging Report View',
      image: 'https://images.unsplash.com/photo-1611974789856-9f9536d4f63c?auto=format&fit=crop&w=800',
      description: 'Analyze how long payments have been pending to prioritize follow-ups'
    }
  ],

  useCases: [
    {
      scenario: 'Retailer Manages Regular Credit Customers',
      description: 'A hardware shop provides 30-day credit to loyal contractors and uses this feature to track dues.',
      result: 'Reduces overdue collections by 70% and strengthens long-term business relationships'
    },
    {
      scenario: 'Distributor Manages High-Volume Clients',
      description: 'A food distributor sets credit caps and automates alerts for their B2B clients.',
      result: 'Avoids overexposure and improves payment discipline without manual follow-ups'
    },
    {
      scenario: 'Service Provider Tracks Project Payments',
      description: 'A consultancy firm tracks phased project payments against credit timelines.',
      result: 'Ensures payment consistency while preserving client goodwill'
    }
  ],

  implementation: {
    setupTime: '1–2 hours',
    trainingRequired: 'Basic (30–45 mins)',
    integrationComplexity: 'Low to Medium',
    steps: [
      'Enable Credit Management from the finance module',
      'Add or link credit customers from your billing list',
      'Set individual credit limits and terms',
      'Configure alert intervals for due and overdue reminders',
      'Record and monitor partial or full payments',
      'Use aging reports to plan recovery actions'
    ]
  },

  pricing: {
    included: 'Available in IndiaBills Premium & Enterprise plans',
    additionalCosts: 'None',
    roi: 'Improves cash flow visibility and reduces payment delays—saving up to 30% in recovery costs'
  }
});

export default CreditManagement;
