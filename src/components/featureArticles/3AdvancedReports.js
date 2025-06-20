const AdvancedReports = () => ({
  title: 'Advanced Reports',
  shortDescription: 'Generate detailed reports for orders, sales, and more',
  category: 'Analytics & Reporting',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200',
  detailedDescription: 'Unlock powerful business insights with our comprehensive reporting system. Generate detailed analytics on sales, inventory, customer behavior, and financial performance to make data-driven decisions that drive growth.',
  
  whatMakesItDifferent: [
    'Real-time report generation with live data updates',
    'Customizable report templates for specific business needs',
    'Interactive dashboards with drill-down capabilities',
    'Automated report scheduling and email delivery',
    'Multi-format export options (PDF, Excel, CSV)',
    'Advanced filtering and data segmentation options'
  ],

  idealFor: [
    {
      businessType: 'All Business Types',
      description: 'Essential for any business looking to understand performance metrics, identify trends, and make informed decisions based on data.',
      benefits: ['Data-driven decision making', 'Performance tracking', 'Trend identification', 'Strategic planning support']
    },
    {
      businessType: 'Retail Chains',
      description: 'Perfect for multi-location retailers needing consolidated reporting across all stores and channels.',
      benefits: ['Multi-location performance comparison', 'Product performance analysis', 'Customer behavior insights', 'Inventory optimization']
    },
    {
      businessType: 'Wholesale Distributors',
      description: 'Ideal for distributors tracking supplier performance, customer trends, and territory-wise sales analysis.',
      benefits: ['Supplier performance tracking', 'Territory analysis', 'Customer profitability', 'Demand forecasting']
    },
    {
      businessType: 'Manufacturing Units',
      description: 'Critical for manufacturers monitoring production efficiency, material costs, and finished goods performance.',
      benefits: ['Production efficiency tracking', 'Cost analysis', 'Quality metrics', 'Supply chain optimization']
    }
  ],

  keyFeatures: [
    {
      feature: 'Sales Analytics',
      description: 'Comprehensive sales reports with trend analysis, product performance, and customer insights.'
    },
    {
      feature: 'Inventory Reports',
      description: 'Detailed inventory analysis including stock levels, movement patterns, and valuation reports.'
    },
    {
      feature: 'Financial Dashboards',
      description: 'Real-time financial overview with profit/loss analysis, cash flow tracking, and expense monitoring.'
    },
    {
      feature: 'Customer Analytics',
      description: 'Customer behavior analysis, purchase patterns, and loyalty metrics for better customer management.'
    },
    {
      feature: 'Custom Report Builder',
      description: 'Build custom reports with drag-and-drop interface and advanced filtering options.'
    },
    {
      feature: 'Automated Scheduling',
      description: 'Schedule reports to be automatically generated and emailed to stakeholders at specified intervals.'
    }
  ],

  screenshots: [
    {
      title: 'Sales Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
      description: 'Interactive sales dashboard showing revenue trends, top products, and performance metrics'
    },
    {
      title: 'Inventory Analytics',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
      description: 'Comprehensive inventory reports with stock levels, movement analysis, and valuation'
    },
    {
      title: 'Custom Report Builder',
      image: 'https://images.unsplash.com/photo-1607706189992-eae7c9bd7e3e?auto=format&fit=crop&w=800',
      description: 'Drag-and-drop report builder interface for creating customized business reports'
    }
  ],

  useCases: [
    {
      scenario: 'Seasonal Business Planning',
      description: 'A gift shop uses historical sales reports to identify seasonal trends and plan inventory for upcoming festivals and holidays.',
      result: '35% increase in seasonal sales through better inventory planning and targeted promotions'
    },
    {
      scenario: 'Multi-Location Performance Analysis',
      description: 'A restaurant chain analyzes performance across all outlets to identify best practices and optimize underperforming locations.',
      result: '25% improvement in overall profitability through location-specific optimization strategies'
    },
    {
      scenario: 'Customer Segmentation Strategy',
      description: 'An electronics retailer uses customer analytics to segment customers and create targeted marketing campaigns.',
      result: '40% increase in customer retention and 20% growth in average order value'
    }
  ],

  implementation: {
    setupTime: '1-2 hours',
    trainingRequired: 'Moderate (3-4 hours)',
    integrationComplexity: 'Low',
    steps: [
      'Report template selection and customization',
      'Data source configuration and validation',
      'User access and permission setup',
      'Automated report scheduling configuration',
      'Dashboard customization for different user roles',
      'Training on report interpretation and analysis'
    ]
  },

  pricing: {
    included: 'All IndiaBills plans',
    additionalCosts: 'Advanced analytics add-on available',
    roi: 'Businesses typically see 20-30% improvement in decision-making speed and 15-25% increase in operational efficiency'
  }
});

export default AdvancedReports;