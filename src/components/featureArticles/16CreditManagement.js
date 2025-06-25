const CreditManagement = () => ({
  title: 'Credit Management',
  shortDescription: 'Efficiently manage customer credits and payment terms',
  category: 'Payments & Finance',
  image: 'https://images.unsplash.com/photo-1605902711665-6f8fdf05f7b3?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills’ Credit Management helps you track customer credit, outstanding amounts, and payment deadlines to ensure smooth cash flow.',

  whatMakesItDifferent: [
    'Customer credit records',
    'Auto reminders',
    'Credit limits',
    'Aging reports',
    'Payment status tracking',
    'Linked to invoices'
  ],

  idealFor: [
    {
      businessType: 'Wholesalers',
      description: 'Manage large customer credits.',
      benefits: ['Credit limits', 'Track dues', 'Safer deals', 'Payment follow-up']
    },
    {
      businessType: 'Retail Stores',
      description: 'Handle local customer credit easily.',
      benefits: ['Small dues tracked', 'Easy reminders', 'Faster recovery', 'Build loyalty']
    },
    {
      businessType: 'Pharmacies',
      description: 'Manage credit for clinics.',
      benefits: ['Safer credit', 'Tracks all dues', 'Clear reminders', 'Easier audits']
    },
    {
      businessType: 'Supermarkets',
      description: 'Track B2B and B2C credits.',
      benefits: ['Large credit log', 'Auto reminders', 'Track payments', 'Safe limit setting']
    }
  ],

  keyFeatures: [
  {
    feature: 'Customer Credit Limits',
    description: 'Set credit limits for each customer to prevent over-credit and manage financial risk effectively.'
  },
  {
    feature: 'Automated Payment Reminders',
    description: 'Send auto-reminders to customers before and after due dates to ensure timely collections.'
  },
  {
    feature: 'Accounts Receivable Aging Report',
    description: 'Easily track overdue payments with aging breakdowns like 0-30, 31-60, 61-90, and 90+ days.'
  },
  {
    feature: 'Linked Invoice View',
    description: 'Access all pending and paid invoices for any customer with a single click.'
  },
  {
    feature: 'Payment Status Logs',
    description: 'Maintain a complete log of each customer’s payment history, outstanding balance, and credit usage.'
  },
  {
    feature: 'Downloadable Receivables Reports',
    description: 'Export detailed customer-wise receivables reports for sharing or external analysis.'
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
    scenario: 'Wholesale Recovery Acceleration',
    description: 'A wholesaler implements credit limits and automated reminders to improve payment collections from bulk buyers.',
    result: 'Achieved faster payments and reduced overdue receivables by 60%'
  },
  {
    scenario: 'Retailer Reduces Overdue Amounts',
    description: 'A retail business activates automated customer reminders for all pending dues.',
    result: 'Significantly lowered overdue amounts and improved cash flow stability'
  },
  {
    scenario: 'Pharmacy Conducts Credit Risk Audits',
    description: 'A pharmacy reviews aging reports and payment logs to identify risky credit accounts.',
    result: 'Quickly flagged high-risk customers and minimized future bad debts'
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
