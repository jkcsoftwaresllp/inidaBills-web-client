import centralizedDashboard from '../../featuresScreenshot/dashboard.png';

const CentralizedDashboard = () => ({
  title: 'Centralized Dashboard',
  shortDescription: 'Access all your business data through a single dashboard',
  category: 'Business Intelligence',
  image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills’ Centralised Dashboard brings all your data — sales, stock, expenses, and reports — into one easy view for smarter decisions.',

  whatMakesItDifferent: [
    'One-screen control',
    'Live updates',
    'Customisable panels',
    'Alerts built-in',
    'Visual charts',
    'Multi-location data'
  ],

  idealFor: [
    {
      businessType: 'Retail Chains',
      description: 'Manage all outlets from HQ.',
      benefits: ['See full business view', 'Spot top stores', 'Act fast', 'Plan better']
    },
    {
      businessType: 'Wholesalers',
      description: 'Keep an eye on big numbers.',
      benefits: ['Stock flow view', 'Order status', 'Financial health', 'Supplier stats']
    },
    {
      businessType: 'Supermarkets',
      description: 'Balance stock, sales, and cost.',
      benefits: ['Quick view of key metrics', 'Spot issues', 'Faster decisions', 'Easy comparison']
    },
    {
      businessType: 'Service Providers',
      description: 'Track jobs + products sold.',
      benefits: ['One place for all data', 'See service status', 'Combine reports', 'Plan resources']
    }
  ],

  keyFeatures: [
  {
    feature: 'All-in-One Data Dashboard',
    description: 'Get a comprehensive, consolidated view of sales, stock, finances, and more from a single screen.'
  },
  {
    feature: 'Live Data Sync',
    description: 'View real-time data updates across all modules for accurate, up-to-the-minute decision making.'
  },
  {
    feature: 'Customizable Widgets',
    description: 'Personalize your dashboard with drag-and-drop widgets to display the metrics most relevant to you.'
  },
  {
    feature: 'Actionable Alerts',
    description: 'Receive instant, actionable alerts for low stock, pending orders, due payments, and more.'
  },
  {
    feature: 'Visual Charts and Graphs',
    description: 'Understand business trends quickly with interactive charts and graphical summaries of key data.'
  },
  {
    feature: 'Multi-Branch Monitoring',
    description: 'Track performance and inventory across multiple branches or locations with centralized visibility.'
  }
],

  screenshots: [
    {
      title: 'All-in-One Dashboard',
      image: centralizedDashboard,
      description: 'Comprehensive overview of all key business areas on one screen'
    },
    // {
    //   title: 'Custom Widget Setup',
    //   image: 'https://images.unsplash.com/photo-1612837017391-30d4f9e1e2c9?auto=format&fit=crop&w=800',
    //   description: 'Choose and arrange widgets like sales graphs, expense summaries, and alerts to match your needs'
    // },
    // {
    //   title: 'Mobile Dashboard View',
    //   image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800',
    //   description: 'Access real-time business stats from your smartphone on the go'
    // }
  ],

  useCases: [
  {
    scenario: 'Real-Time Stock Monitoring for Retail Chains',
    description: 'A retail chain manager uses live dashboard alerts to quickly identify low-stock items across multiple stores.',
    result: 'Reduced stockouts and improved product availability on shelves'
  },
  {
    scenario: 'Live Order Tracking for Wholesalers',
    description: 'A wholesaler monitors real-time order status from placement to dispatch, ensuring faster processing and delivery scheduling.',
    result: 'Accelerated dispatch times and improved customer satisfaction'
  },
  {
    scenario: 'Sales Trend Analysis for Supermarkets',
    description: 'A supermarket analyzes daily and weekly sales trends using dashboard reports to plan targeted promotional offers.',
    result: 'Better offer planning and increased sales during promotional periods'
  }
],

  implementation: {
    setupTime: '1-2 hours',
    trainingRequired: 'Minimal (30–60 mins)',
    integrationComplexity: 'Low',
    steps: [
      'Enable the dashboard module from system settings',
      'Choose default widgets or create custom layouts',
      'Assign permissions for role-based dashboards',
      'Connect modules for data flow (Sales, Inventory, CRM)',
      'Customize alerts and thresholds for key indicators',
      'Train users to navigate and interpret dashboard data'
    ]
  },

  pricing: {
    included: 'Included in all IndiaBills plans',
    additionalCosts: 'None',
    roi: 'Significant ROI through faster decisions, improved team performance, and real-time visibility across operations'
  }
});

export default CentralizedDashboard;
