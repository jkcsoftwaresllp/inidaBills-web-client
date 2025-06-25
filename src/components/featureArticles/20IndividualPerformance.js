const IndividualPerformance = () => ({
  title: 'Individual Performance',
  shortDescription: 'Effortlessly track employee productivity and contributions',
  category: 'Team & Productivity',
  image: 'https://images.unsplash.com/photo-1557425493-04a9d3bcdc80?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills lets you see how each team member contributes to sales and operations, helping boost productivity.',

  whatMakesItDifferent: [
    'Track sales per user',
    'Activity logs',
    'Custom targets',
    'User reports',
    'Multi-branch tracking',
    'Boosts accountability'
  ],

  idealFor: [
    {
      businessType: 'Retail Stores',
      description: 'See staff sales.',
      benefits: ['Spot top sellers', 'Motivate staff', 'Improve service', 'Track work']
    },
    {
      businessType: 'Wholesalers',
      description: 'Track large teams.',
      benefits: ['Staff targets', 'Clear logs', 'Safer deals', 'Better planning']
    },
    {
      businessType: 'Supermarkets',
      description: 'Large team reports.',
      benefits: ['Spot issues', 'Track staff', 'Plan shifts', 'Motivate']
    },
    {
      businessType: 'Service Firms',
      description: 'Track performance.',
      benefits: ['User logs', 'Track work', 'Spot gaps', 'Reward top work']
    }
  ],

  keyFeatures: [
  {
    feature: 'Individual Sales Tracking',
    description: 'Monitor sales performance for each staff member with detailed transaction data.'
  },
  {
    feature: 'Activity Logging',
    description: 'Track all user activities including logins, edits, and key actions for accountability.'
  },
  {
    feature: 'Target Setting & Tracking',
    description: 'Set performance targets for users and track their achievement status in real time.'
  },
  {
    feature: 'User-Specific Reports',
    description: 'Generate performance reports for individual employees for easy review and feedback.'
  },
  {
    feature: 'Multi-Location Insights',
    description: 'View consolidated or branch-wise user performance across multiple locations.'
  },
  {
    feature: 'Exportable Performance Data',
    description: 'Download user performance reports in Excel or PDF formats for team reviews and sharing.'
  }
],

  screenshots: [
    {
      title: 'Performance Dashboard',
      image: 'https://images.unsplash.com/photo-1557425493-04a9d3bcdc80?auto=format&fit=crop&w=800',
      description: 'Real-time overview of team and individual performance across various KPIs'
    },
    {
      title: 'Leaderboard View',
      image: 'https://images.unsplash.com/photo-1629904853893-74a5da9b2c96?auto=format&fit=crop&w=800',
      description: 'Visual rankings to highlight top performers and create performance-driven culture'
    },
    {
      title: 'Individual Performance Report',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800',
      description: 'Detailed report of employee contribution, targets achieved, and performance trend'
    }
  ],

  useCases: [
  {
    scenario: 'Retailer Rewards High-Performing Staff',
    description: 'A retail store tracks individual sales and recognizes top performers with incentives.',
    result: 'Boosts overall sales by 20% and improves team motivation'
  },
  {
    scenario: 'Wholesaler Identifies Training Needs',
    description: 'A wholesale business uses user activity reports to spot underperforming team members and schedule targeted training.',
    result: 'Reduces processing errors by 30% and improves team efficiency'
  },
  {
    scenario: 'Supermarket Optimizes Shift Planning',
    description: 'A supermarket manager uses performance data to allocate staff shifts based on peak hours and productivity patterns.',
    result: 'Improves checkout speed and reduces customer wait time by 25%'
  }
],

  implementation: {
    setupTime: '1–2 hours',
    trainingRequired: 'Minimal (30 mins)',
    integrationComplexity: 'Low',
    steps: [
      'Assign user roles and teams in system settings',
      'Define KPIs based on job responsibilities',
      'Enable live tracking or daily logging as applicable',
      'Monitor performance via dashboards and reports',
      'Set goals and recognition rules for staff motivation'
    ]
  },

  pricing: {
    included: 'Available in IndiaBills Growth and Enterprise plans',
    additionalCosts: 'None',
    roi: 'Drives employee engagement, reduces inefficiencies, and boosts team productivity by up to 30%'
  }
});

export default IndividualPerformance;
