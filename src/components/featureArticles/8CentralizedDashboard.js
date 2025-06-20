const CentralizedDashboard = () => ({
  title: 'Centralized Dashboard',
  shortDescription: 'Access all your business data through a single dashboard',
  category: 'Business Intelligence',
  image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200',
  detailedDescription: 'Monitor and manage your entire business from a unified dashboard. View key metrics, performance summaries, and actionable insights in one place to make faster, data-driven decisions and improve overall operational efficiency.',

  whatMakesItDifferent: [
    'Unified access to sales, inventory, finance, and customer data',
    'Customizable widgets and layouts tailored to business needs',
    'Real-time KPIs and visual insights for instant decision-making',
    'Role-based data visibility and dashboard personalization',
    'Drill-down analytics from high-level trends to granular details',
    'Seamless integration with all IndiaBills modules and tools'
  ],

  idealFor: [
    {
      businessType: 'All business types',
      description: 'Whether you are a startup, retailer, manufacturer, or service provider, a centralized dashboard offers real-time visibility into your entire business from one place.',
      benefits: ['Boost efficiency through unified visibility', 'Quickly identify and respond to issues', 'Streamline cross-departmental communication', 'Enhance decision-making with actionable insights']
    }
  ],

  keyFeatures: [
    {
      feature: 'Real-Time Metrics',
      description: 'Track live KPIs such as revenue, expenses, inventory status, customer activity, and more.'
    },
    {
      feature: 'Customizable Layouts',
      description: 'Design your dashboard using drag-and-drop widgets that reflect what matters most to your role or business.'
    },
    {
      feature: 'Cross-Module Integration',
      description: 'Pull data from various modules—Sales, Inventory, Accounting, CRM—for complete visibility.'
    },
    {
      feature: 'Role-Based Access',
      description: 'Show personalized dashboards to managers, team leads, or staff based on access permissions.'
    },
    {
      feature: 'Drill-Down Reports',
      description: 'Click into summary widgets to view detailed reports and transactional data beneath each KPI.'
    },
    {
      feature: 'Mobile-Friendly View',
      description: 'Access your dashboard on any device with a responsive, mobile-optimized layout.'
    }
  ],

  screenshots: [
    {
      title: 'All-in-One Dashboard',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800',
      description: 'Comprehensive overview of all key business areas on one screen'
    },
    {
      title: 'Custom Widget Setup',
      image: 'https://images.unsplash.com/photo-1612837017391-30d4f9e1e2c9?auto=format&fit=crop&w=800',
      description: 'Choose and arrange widgets like sales graphs, expense summaries, and alerts to match your needs'
    },
    {
      title: 'Mobile Dashboard View',
      image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800',
      description: 'Access real-time business stats from your smartphone on the go'
    }
  ],

  useCases: [
    {
      scenario: 'Daily Operations Monitoring',
      description: 'A retail manager uses the centralized dashboard to track daily sales, low-stock alerts, and employee performance.',
      result: '25% faster issue resolution and improved team coordination'
    },
    {
      scenario: 'Executive Business Overview',
      description: 'A CEO uses the dashboard for real-time financial and operational summaries during strategic planning.',
      result: 'Sharper insights and 40% less time spent on compiling reports'
    },
    {
      scenario: 'Franchise Oversight',
      description: 'A franchise owner monitors performance metrics of all branches from one place.',
      result: 'Consistent performance tracking and quicker interventions across outlets'
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
