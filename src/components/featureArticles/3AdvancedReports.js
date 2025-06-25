const AdvancedReports = () => ({
  title: 'Advanced Reports',
  shortDescription: 'Generate detailed reports for orders, sales, and more',
  category: 'Analytics & Reporting',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200',
  detailedDescription: 'The Reports feature in IndiaBills provides complete business insights, from sales to tax to stock, helping owners make smarter decisions faster.',
  
  whatMakesItDifferent: [
    'All-in-one reporting',
    'Auto-generated reports',
    'GST-ready reports',
    'Stock report integration',
    'Visual charts',
    'Instant exports'
  ],

  idealFor: [
    {
      businessType: 'Retail Shops',
      description: 'Stay on top of numbers daily.',
      benefits: ['Tracks sales trends', 'Shows profit clearly', 'Helps plan reorders', 'Eases tax filing']
    },
    {
      businessType: 'Wholesalers',
      description: 'Clear records for bulk operations.',
      benefits: ['Bulk sales data', 'GST summaries', 'Supplier stats', 'Stock movement logs']
    },
    {
      businessType: 'Pharmacies',
      description: 'Combine stock and sales insights.',
      benefits: ['Expiry data', 'Medicine trends', 'GST-ready', 'Audit-friendly']
    },
    {
      businessType: 'Supermarkets',
      description: 'Simplify large data sets.',
      benefits: ['Category reports', 'Tax summaries', 'Snapshot stock views', 'Business insights']
    }
  ],

  keyFeatures: [
  {
    feature: 'Customizable Sales Reports',
    description: 'Flexible sales reporting with filterable views for tracking performance by product, period, or customer segment.'
  },
  {
    feature: 'Tax-Ready Reports',
    description: 'Pre-formatted tax reports designed to simplify GST filing and ensure compliance with local tax regulations.'
  },
  {
    feature: 'Stock Flow Logs',
    description: 'Clear visibility of inventory inflow and outflow with detailed transaction logs for each stock movement.'
  },
  {
    feature: 'Instant Profit Reports',
    description: 'Real-time margin and profitability analysis to help track profits across products and sales channels.'
  },
  {
    feature: 'Exportable Report Files',
    description: 'Easily export reports in Excel, CSV, or PDF formats for sharing with teams, accountants, or auditors.'
  },
  {
    feature: 'Visual Data Insights',
    description: 'Interactive charts and graphs that provide at-a-glance summaries of key business metrics and trends.'
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
    scenario: 'Smart Restocking Decisions',
    description: 'A retailer leverages detailed sales reports to identify best-selling products and plan timely restocks, ensuring high-demand items are always available.',
    result: 'Improved sales by minimizing stockouts on popular items'
  },
  {
    scenario: 'Stress-Free GST Filing',
    description: 'A wholesaler automates GST report generation, making tax filing faster and error-free without manual calculations.',
    result: 'Saved several hours per month on tax preparation and reduced filing errors'
  },
  {
    scenario: 'Slow-Moving Stock Clearance',
    description: 'A pharmacy analyzes inventory reports to identify slow-moving products and runs targeted clearance promotions to free up shelf space.',
    result: 'Reduced dead stock and improved cash flow through better inventory turnover'
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