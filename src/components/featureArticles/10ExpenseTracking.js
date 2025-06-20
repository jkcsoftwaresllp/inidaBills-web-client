const ExpensesTracking = () => ({
  title: 'Expenses Tracking',
  shortDescription: 'Track and manage business expenses',
  category: 'Finance & Accounting',
  image: 'https://images.unsplash.com/photo-1611974789856-9f9536d4f63c?auto=format&fit=crop&w=1200',
  detailedDescription: 'Record, categorize, and analyze your business expenses for better financial control and decision-making. Stay on top of your cash flow, identify cost-saving opportunities, and streamline expense approvals and reporting with ease.',

  whatMakesItDifferent: [
    'Real-time expense logging across departments or branches',
    'Custom expense categories and payment methods',
    'Mobile-friendly expense entry for field staff',
    'Automatic tax and GST breakdowns on entries',
    'Built-in approval workflows for team-based spending',
    'Visual dashboards and exportable reports for analysis'
  ],

  idealFor: [
    {
      businessType: 'All businesses',
      description: 'Every business needs clear oversight on where money is being spent and how it affects profit margins.',
      benefits: ['Control unnecessary spending', 'Track expenses by category, project, or team', 'Stay tax-compliant with easy audit trails', 'Enable transparency in financial operations']
    },
    {
      businessType: 'Finance Teams',
      description: 'Designed for accountants and financial controllers to manage organizational spending efficiently.',
      benefits: ['Consolidate receipts and payments', 'Reconcile expenses with accounts', 'Generate monthly and quarterly reports', 'Monitor budget adherence in real time']
    },
    {
      businessType: 'Startups',
      description: 'Helps small teams stay lean and informed about every penny spent in early-stage operations.',
      benefits: ['Track recurring vs. one-time expenses', 'Generate investor-friendly reports', 'Prevent budget overruns', 'Enable early financial discipline']
    },
    {
      businessType: 'Field Service Businesses',
      description: 'Great for teams with travel, logistics, or site-based operations requiring frequent expense logging.',
      benefits: ['Mobile entry of fuel, food, or lodging bills', 'GPS tagging for location-based expense logging', 'Reduce reimbursement disputes', 'Faster approvals and settlements']
    },
    {
      businessType: 'Retail & Hospitality',
      description: 'Track daily operational costs like utilities, supplies, repairs, and marketing easily.',
      benefits: ['Monitor overheads at store-level', 'Track vendor payments', 'Prevent misuse of petty cash', 'Simplify financial reporting for auditors']
    }
  ],

  keyFeatures: [
    {
      feature: 'Real-Time Expense Logging',
      description: 'Enter expenses from desktop or mobile, categorize instantly, and track in real time.'
    },
    {
      feature: 'Category-Based Reporting',
      description: 'Group expenses by purpose—travel, utilities, marketing, etc.—for granular control.'
    },
    {
      feature: 'Approval Workflows',
      description: 'Set multi-level approval flows to ensure every expense is authorized properly.'
    },
    {
      feature: 'GST & Tax Breakdown',
      description: 'Automatically split tax components on expenses for audit-ready accounting.'
    },
    {
      feature: 'Attachment Support',
      description: 'Upload bills, receipts, or proofs along with expense entries for verification.'
    },
    {
      feature: 'Export & Sync',
      description: 'Export reports in Excel, PDF, or sync with accounting tools for seamless reconciliation.'
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
      scenario: 'Team Travel Expenses',
      description: 'A sales team uses mobile entry to log food and travel expenses while on the road.',
      result: 'Reimbursement time reduced by 50% with cleaner records and faster approvals'
    },
    {
      scenario: 'Startup Financial Discipline',
      description: 'A small tech startup monitors burn rate by logging all operational expenses.',
      result: 'Improved investor confidence and optimized monthly spending'
    },
    {
      scenario: 'Retail Expense Management',
      description: 'A retail chain tracks daily store-level expenses centrally.',
      result: '25% cut in unnecessary spending and better budget compliance'
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
