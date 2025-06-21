const IndividualPerformance = () => ({
  title: 'Individual Performance',
  shortDescription: 'Effortlessly track employee productivity and contributions',
  category: 'Team & Productivity',
  image: 'https://images.unsplash.com/photo-1557425493-04a9d3bcdc80?auto=format&fit=crop&w=1200',
  detailedDescription: 'Track employee productivity and sales contributions with individual performance analytics. Recognize top performers, identify training needs, and optimize your workforce for better business outcomes. Stay on top of who’s driving growth and who needs support—all from one place.',

  whatMakesItDifferent: [
    'Real-time tracking of sales and task completion per employee',
    'Performance summaries with custom timeframes and KPIs',
    'Leaderboards to motivate and reward top performers',
    'Supports roles across sales, billing, service, and delivery teams',
    'Daily/weekly/monthly productivity trends',
    'Exportable reports for payroll and performance reviews'
  ],

  idealFor: [
    {
      businessType: 'Sales Teams',
      description: 'Track targets, conversions, and activities of each salesperson across territories.',
      benefits: ['Boost motivation with live rankings', 'Reward high performers', 'Spot training needs early', 'Improve team accountability']
    },
    {
      businessType: 'Retail Stores',
      description: 'Monitor POS activity and individual cashier sales or customer handling quality.',
      benefits: ['Track cashier-wise revenue', 'Identify peak vs underperforming shifts', 'Improve shift scheduling', 'Reward customer service excellence']
    },
    {
      businessType: 'Service Providers',
      description: 'Track individual technician or staff productivity based on tasks completed or hours logged.',
      benefits: ['Measure work quality and speed', 'Balance workloads', 'Enable fair incentive calculations', 'Spot service bottlenecks']
    },
    {
      businessType: 'Franchises or Multi-Branch Chains',
      description: 'Compare team performance across branches for training and operational consistency.',
      benefits: ['Ensure standard KPIs are met', 'Replicate success models', 'Address branch-level performance issues']
    }
  ],

  keyFeatures: [
    {
      feature: 'Live Performance Dashboard',
      description: 'Monitor real-time KPIs for each staff member including sales, tasks, and hours.'
    },
    {
      feature: 'Custom KPI Setup',
      description: 'Define what matters—sales targets, customer handling, completed jobs, etc.'
    },
    {
      feature: 'Leaderboards & Recognition',
      description: 'Create healthy competition through leaderboards and incentives.'
    },
    {
      feature: 'Exportable Reports',
      description: 'Export individual or team performance reports for HR and payroll teams.'
    },
    {
      feature: 'Performance History',
      description: 'Track trends for individuals over time to evaluate growth or stagnation.'
    },
    {
      feature: 'Role-Based Metrics',
      description: 'Track performance by role type—sales, cashier, delivery, technician, etc.'
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
      scenario: 'Retail Owner Evaluates Cashier Productivity',
      description: 'A multi-counter grocery store tracks each cashier’s daily billing and customer handling efficiency.',
      result: 'Improved shift allocation and reduced customer complaints by 25%'
    },
    {
      scenario: 'Sales Manager Rewards Top Performer',
      description: 'Weekly leaderboard helps a regional sales manager identify top performers for incentive payouts.',
      result: 'Sales conversion rate increased by 18% due to gamified competition'
    },
    {
      scenario: 'Service Business Monitors Staff Efficiency',
      description: 'A repair service tracks technician work quality and speed over the month.',
      result: 'Reduced turnaround time and better customer satisfaction ratings'
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
