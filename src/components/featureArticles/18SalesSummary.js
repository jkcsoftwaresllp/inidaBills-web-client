const SalesSummary = () => ({
  title: 'Sales Summary',
  shortDescription: 'Get a sales summary for better business insights',
  category: 'Analytics & Reporting',
  image: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills’ Sales Summary gives you a clear picture of daily, weekly, and monthly sales to track growth and plan better.',

  whatMakesItDifferent: [
    'Live updates',
    'Custom date filters',
    'Category view',
    'TLocation summary',
    'Profit snapshot',
    'Downloadable'
  ],

  idealFor: [
    {
      businessType: ' Retail Shops',
      description: 'See what’s selling.',
      benefits: ['Daily report', 'Spot trends', 'Track top items', 'Plan stock']
    },
    {
      businessType: 'Wholesalers',
      description: 'Big-picture view.',
      benefits: ['Bulk sales logs', 'Supplier stats', 'Profit check', 'Plan better']
    },
    {
      businessType: 'Supermarkets',
      description: 'Track categories easily.',
      benefits: ['Fast reports', 'Category view', 'Plan orders', 'Spot slow movers']
    },
    {
      businessType: 'Service Firms',
      description: 'See service + sales.',
      benefits: ['Combine data', 'Quick reports', 'Track work', 'Plan growth']
    }
  ],

  keyFeatures: [
  {
    feature: 'Live Sales Tracking',
    description: 'View real-time sales data including revenue, order counts, and units sold as transactions happen.'
  },
  {
    feature: 'Custom Date Range Filters',
    description: 'Generate sales reports for any time frame—daily, weekly, monthly, or for a custom date range.'
  },
  {
    feature: 'Category-Wise Sales Breakdown',
    description: 'Analyze sales performance by product categories to identify top-selling and underperforming segments.'
  },
  {
    feature: 'Branch-Wise Sales View',
    description: 'Track and compare sales across multiple branches or store locations for better decision-making.'
  },
  {
    feature: 'Quick Profitability Snapshot',
    description: 'Instantly view gross profit margins and sales-to-cost ratios without needing complex reports.'
  },
  {
    feature: 'Downloadable Sales Reports',
    description: 'Export detailed sales data in Excel or PDF formats for sharing with teams, auditors, or stakeholders.'
  }
],

  screenshots: [
    {
      title: 'Sales Overview Dashboard',
      image: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=800',
      description: 'Visual summary of daily sales, top products, and total revenue across timeframes'
    },
    {
      title: 'Product Performance Report',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800',
      description: 'Detailed view of sales per product or category with sorting by revenue or quantity'
    },
    {
      title: 'Comparison Charts',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec71?auto=format&fit=crop&w=800',
      description: 'Graphical trend analysis comparing different sales periods or channels'
    }
  ],

  useCases: [
  {
    scenario: 'Retailer Plans Smart Restocking',
    description: 'A retail shop uses daily sales summaries and stock reports to decide which items need immediate restocking.',
    result: 'Ensures shelves stay full with fast-moving products and avoids lost sales'
  },
  {
    scenario: 'Wholesaler Targets Top Customers',
    description: 'A wholesaler analyzes customer-wise sales data to identify high-value clients for exclusive deals and offers.',
    result: 'Boosts repeat business and improves customer loyalty by focusing on top buyers'
  },
  {
    scenario: 'Supermarket Adjusts Order Volumes',
    description: 'A supermarket monitors product-wise sales and adjusts supplier orders to reduce overstock and minimize waste.',
    result: 'Cuts inventory holding costs and improves stock turnover rates'
  }
],

  implementation: {
    setupTime: 'Instant (auto-enabled)',
    trainingRequired: 'Minimal (15–30 minutes)',
    integrationComplexity: 'None (native)',
    steps: [
      'Navigate to the Sales Summary dashboard',
      'Select desired date range or filters',
      'Review charts, product data, and summaries',
      'Download reports if required',
      'Use trends to adjust pricing, stocking, and promotions'
    ]
  },

  pricing: {
    included: 'Included in all IndiaBills plans',
    additionalCosts: 'None',
    roi: 'Enhances decision-making and strategic planning—boosting revenue and reducing waste'
  }
});

export default SalesSummary;
