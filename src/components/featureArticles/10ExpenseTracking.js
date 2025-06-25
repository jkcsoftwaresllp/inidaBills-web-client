const ExpensesTracking = () => ({
  title: 'Expenses Tracking',
  shortDescription: 'Track and manage business expenses',
  category: 'Finance & Accounting',
  image: 'https://images.unsplash.com/photo-1611974789856-9f9536d4f63c?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills’ Expense Tracking helps you monitor, record, and control all your business spending in one place, making cost management easy and effective.',

  whatMakesItDifferent: [
    'All expense types supported',
    'Link to invoices',
    'Category-wise tracking',
    'Live reports',
    'Alerts for overspending',
    'Export-ready'
  ],

  idealFor: [
    {
      businessType: 'Retail Stores',
      description: 'Keeps track of shop expenses daily.',
      benefits: ['Records small and large costs', 'Links bills to spend', 'Controls overspending', 'Ready reports']
    },
    {
      businessType: 'Wholesalers',
      description: 'Manages bulk costs.',
      benefits: ['Bulk purchase tracking', 'Easy supplier payment logs', 'Budget help', 'Clear records']
    },
    {
      businessType: 'Pharmacies',
      description: 'Monitors medical supply costs.',
      benefits: ['Tracks supplier payments', 'Links to stock', 'Prevents waste', 'Aids in audits']
    },
    {
      businessType: 'Supermarkets',
      description: 'Controls high-volume spending.',
      benefits: ['Monitors daily outflow', 'Breaks down costs', 'Prevents leaks', 'Aids planning']
    },
  ],

  keyFeatures: [
  {
    feature: 'Comprehensive Expense Logging',
    description: 'Log all types of business expenses—big or small—ensuring nothing gets missed in financial tracking.'
  },
  {
    feature: 'Invoice Linking for Traceability',
    description: 'Easily link expenses to related invoices or purchase orders for full transaction traceability.'
  },
  {
    feature: 'Budget Overspend Alerts',
    description: 'Receive real-time alerts when expenses approach or exceed predefined budget limits.'
  },
  {
    feature: 'Live Expense Reports',
    description: 'Access up-to-the-minute reports for real-time visibility into business spending patterns.'
  },
  {
    feature: 'Downloadable and Shareable Reports',
    description: 'Export expense reports in Excel, CSV, or PDF formats for easy sharing with finance teams or auditors.'
  },
  {
    feature: 'Category-Wise Expense Tracking',
    description: 'Organize expenses by category—like travel, utilities, or marketing—for smarter cost control and budgeting.'
  }
],

  screenshots: [
    {
      title: 'Expense Entry Interface',
      image: 'https://images.unsplash.com/photo-1611974789856-9f9536d4f63c?auto=format&fit=crop&w=800',
      description: 'Simple interface to log expenses with categories, taxes, and receipt uploads'
    },
    {
      title: 'Approval Dashboard',
      image: 'https://images.unsplash.com/photo-1601233742567-638ddf3f1d96?auto=format&fit=crop&w=800',
      description: 'View and approve expenses based on assigned roles and workflows'
    },
    {
      title: 'Expense Reports',
      image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800',
      description: 'Detailed visual breakdown of expenses by team, category, or timeframe'
    }
  ],

  useCases: [
  {
    scenario: 'Reducing Unnecessary Costs in Retail',
    description: 'A retailer uses detailed expense tracking to quickly identify and eliminate avoidable operational costs.',
    result: 'Faster cost control and significant reduction in wasteful spending'
  },
  {
    scenario: 'Improving Supplier Payment Accuracy for Wholesalers',
    description: 'A wholesaler tracks supplier invoices and payments through an integrated system to minimize manual errors and missed payments.',
    result: 'Fewer payment mistakes and stronger supplier relationships'
  },
  {
    scenario: 'Budget Planning for Supermarkets',
    description: 'A supermarket uses historical expense reports and live data to forecast budgets for upcoming months.',
    result: 'More accurate budget forecasts and better financial planning'
  }
],

  implementation: {
    setupTime: '1–2 hours',
    trainingRequired: 'Minimal (30–60 mins)',
    integrationComplexity: 'Low',
    steps: [
      'Enable expense tracking module from settings',
      'Create or import expense categories and tax rules',
      'Define user roles and approval workflows',
      'Train staff on mobile and desktop entry',
      'Review and approve sample entries',
      'Begin live expense tracking and reporting'
    ]
  },

  pricing: {
    included: 'Included in all IndiaBills plans',
    additionalCosts: 'None',
    roi: '300–600% ROI through improved financial transparency, faster reimbursement cycles, and cost savings'
  }
});

export default ExpensesTracking;
