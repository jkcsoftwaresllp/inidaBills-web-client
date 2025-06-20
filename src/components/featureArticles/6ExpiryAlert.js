const ExpiryAlert = () => ({
  title: 'Expiry Alert',
  shortDescription: 'Get timely expiry alerts to avoid stock wastage',
  category: 'Inventory Management',
  image: 'https://images.unsplash.com/photo-1588776814546-ec7d3c02f71f?auto=format&fit=crop&w=1200',
  detailedDescription: 'Prevent losses by receiving expiry alerts on perishable or time-sensitive inventory. Our system helps businesses manage shelf life effectively by identifying at-risk items before they go bad, reducing wastage and improving profitability.',

  whatMakesItDifferent: [
    'Automated tracking of expiry dates for all relevant stock',
    'Custom alert thresholds based on product category or shelf life',
    'Daily and weekly digest reports on expiring items',
    'Visual alerts on dashboards and mobile apps',
    'Batch-level tracking for enhanced precision',
    'Integration with POS and inventory systems for seamless updates'
  ],

  idealFor: [
    {
      businessType: 'Pharmacies',
      description: 'Essential for managing medicine stock with strict expiry controls and compliance needs.',
      benefits: ['Avoid regulatory issues', 'Minimize expired drug wastage', 'Ensure patient safety', 'Simplify stock rotation']
    },
    {
      businessType: 'FMCG',
      description: 'Perfect for businesses dealing in fast-moving consumer goods with limited shelf life.',
      benefits: ['Track short-life inventory in real time', 'Clear near-expiry stock via promotions', 'Reduce stock losses', 'Optimize procurement planning']
    },
    {
      businessType: 'Grocery Stores',
      description: 'Ideal for tracking perishable items like dairy, bakery, or fresh produce.',
      benefits: ['Improve freshness levels', 'Reduce spoilage', 'Enhance customer trust', 'Boost stock visibility by batch']
    }
  ],

  keyFeatures: [
    {
      feature: 'Expiry Date Monitoring',
      description: 'Track expiry dates at product or batch level with real-time alerts.'
    },
    {
      feature: 'Smart Alerts',
      description: 'Get notifications before items near expiry, configurable by days or stock type.'
    },
    {
      feature: 'Batch & Lot Management',
      description: 'Traceability and expiry tracking down to batch or lot level.'
    },
    {
      feature: 'Dashboard Indicators',
      description: 'Color-coded alerts on the dashboard for quick identification of urgent items.'
    },
    {
      feature: 'Expiry Reports',
      description: 'Generate reports of upcoming and past expiry items to take immediate action.'
    },
    {
      feature: 'POS Integration',
      description: 'Seamlessly update stock expiry data through sales and returns at the point of sale.'
    }
  ],

  screenshots: [
    {
      title: 'Expiry Alerts Dashboard',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0f69?auto=format&fit=crop&w=800',
      description: 'Dashboard with visual expiry status and real-time alert indicators'
    },
    {
      title: 'Batch-Level Tracking',
      image: 'https://images.unsplash.com/photo-1588776814546-ec7d3c02f71f?auto=format&fit=crop&w=800',
      description: 'Detailed view of batches and their respective expiry timelines'
    },
    {
      title: 'Smart Notifications',
      image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=800',
      description: 'In-app and email alerts notifying teams about items nearing expiry'
    }
  ],

  useCases: [
    {
      scenario: 'Medicine Rotation',
      description: 'A pharmacy automates expiry tracking to rotate older stock first and avoid loss.',
      result: '90% reduction in expired medicine write-offs'
    },
    {
      scenario: 'Dairy Product Monitoring',
      description: 'A grocery store uses expiry alerts to clear near-expiry dairy products via discounts.',
      result: '40% drop in spoilage losses while maintaining product freshness'
    },
    {
      scenario: 'FMCG Shelf Optimization',
      description: 'An FMCG distributor improves stock allocation using expiry data analytics.',
      result: '25% more efficient stock movement and shelf usage'
    }
  ],

  implementation: {
    setupTime: '1-2 hours',
    trainingRequired: 'Minimal (under 1 hour)',
    integrationComplexity: 'Low',
    steps: [
      'Upload or sync product and batch expiry data',
      'Set alert thresholds by category or product type',
      'Enable user-specific alert channels (email, SMS, in-app)',
      'Assign responsible roles for expiry-based actions',
      'Generate initial expiry report to verify data',
      'Activate real-time alert system and train key users'
    ]
  },

  pricing: {
    included: 'Included in all plans',
    additionalCosts: 'None',
    roi: 'Up to 500% ROI from reduced expiry losses and improved inventory turnover'
  }
});

export default ExpiryAlert;
