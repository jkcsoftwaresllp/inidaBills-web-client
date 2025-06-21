const SalesSummary = () => ({
  title: 'Sales Summary',
  shortDescription: 'Get a sales summary for better business insights',
  category: 'Analytics & Reporting',
  image: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=1200',
  detailedDescription: 'Access detailed sales summaries with performance trends, top-selling products, and revenue breakdowns. Identify growth opportunities, monitor sales KPIs, and make informed business decisions with a clear view of your sales performance.',

  whatMakesItDifferent: [
    'Daily, weekly, and monthly sales summaries at a glance',
    'Breakdowns by product, category, location, or salesperson',
    'Top-selling products and low-performing SKUs analysis',
    'Trend graphs and comparisons over custom periods',
    'Integrated with billing and inventory modules',
    'Exportable reports in Excel or PDF format'
  ],

  idealFor: [
    {
      businessType: 'Retail',
      description: 'Helps retail businesses understand peak sales periods, bestsellers, and performance by store.',
      benefits: ['Optimize inventory restocking', 'Run targeted promotions', 'Track cashier or POS performance', 'Avoid stockouts of fast-moving items']
    },
    {
      businessType: 'Wholesale',
      description: 'Ideal for bulk sellers to track order volumes by client, region, or product line.',
      benefits: ['Identify high-value customers', 'Improve credit and delivery management', 'Detect product demand shifts', 'Reduce slow-moving stock']
    },
    {
      businessType: 'E-commerce',
      description: 'Gives online stores clarity on daily orders, returns, channel-wise sales, and revenue.',
      benefits: ['Optimize ad spending by product', 'Track platform-specific performance (e.g., website, marketplace)', 'Forecast order volume spikes', 'Improve fulfillment strategy']
    },
    {
      businessType: 'Franchises or Multi-Store Chains',
      description: 'Compare performance between outlets to guide operations and marketing strategy.',
      benefits: ['Identify top-performing stores', 'Standardize training and strategy', 'Set store-wise goals', 'Balance stock between locations']
    }
  ],

  keyFeatures: [
    {
      feature: 'Sales Overview Dashboard',
      description: 'Real-time dashboard displaying revenue, units sold, and order count over time.'
    },
    {
      feature: 'Top Products & Categories',
      description: 'Highlights your best-performing products and product lines by revenue and quantity.'
    },
    {
      feature: 'Custom Date Filters',
      description: 'Analyze sales performance over any custom period—daily, weekly, monthly, or annually.'
    },
    {
      feature: 'Sales by Location & User',
      description: 'Breakdown of sales by branches, sales reps, or regions for deeper business analysis.'
    },
    {
      feature: 'Exportable Reports',
      description: 'Download sales summaries as Excel or PDF reports for external sharing or audit use.'
    },
    {
      feature: 'Trend Comparison Charts',
      description: 'Compare growth trends with past periods to assess business health and progress.'
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
      scenario: 'Retail Owner Analyzes Festive Sales',
      description: 'A retail owner uses the sales summary dashboard to compare Diwali season sales with the previous year.',
      result: 'Improves inventory planning and marketing spend for the next festive cycle'
    },
    {
      scenario: 'E-commerce Business Tracks Top Products',
      description: 'An online store filters sales by product category to optimize their digital ad campaigns.',
      result: 'Increases return on ad spend (ROAS) by 35% through targeted promotion of top sellers'
    },
    {
      scenario: 'Wholesale Manager Reviews Monthly Orders',
      description: 'A distributor downloads monthly summaries to report on high-volume clients and product movement.',
      result: 'Streamlines client servicing and boosts revenue through targeted engagement'
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
