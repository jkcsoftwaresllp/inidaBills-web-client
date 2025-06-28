import expiryAlert from '../../featuresScreenshot/Expiry_alert.png';

const ExpiryAlert = () => ({
  title: 'Expiry Alert',
  shortDescription: 'Get timely expiry alerts to avoid stock wastage',
  category: 'Inventory Management',
  image: 'https://images.unsplash.com/photo-1588776814546-ec7d3c02f71f?auto=format&fit=crop&w=1200',
  detailedDescription: 'Expiry Alert in IndiaBills warns you when stock is close to expiry so you can act before loss happens.',

  whatMakesItDifferent: [
    'Automated alerts',
    'Item-level tracking',
    'Custom alert timing',
    'Clear reports',
    'Batch management',
    'Helps with discounts'
  ],

  idealFor: [
    {
      businessType: 'Pharmacies',
      description: 'Prevents selling expired medicines.',
      benefits: ['Safer sales', 'Reduces loss', 'Maintains compliance', 'Easier audits']
    },
    {
      businessType: 'Supermarkets',
      description: 'Handles perishable goods smartly.',
      benefits: ['Fresh stock', 'Faster clearance', 'Reduces waste', 'Customer safety']
    },
    {
      businessType: 'Wholesalers',
      description: 'Alerts for bulk expiry.',
      benefits: ['Clears stock early', 'Helps with bulk discounts', 'Protects profit', 'Avoids write-offs']
    },
    {
      businessType: 'Food Retailers',
      description: 'Keeps food fresh and safe.',
      benefits: ['Safer sales', 'Helps plan clearance', 'Reduces spoilage', 'Boosts trust']
    }
  ],

  keyFeatures: [
  {
    feature: 'Customizable Expiry Alerts',
    description: 'Set personalized alert timings to get notified well in advance before products reach their expiry date.'
  },
  {
    feature: 'Batch-Wise Expiry Tracking',
    description: 'Monitor and manage expiry dates at the batch level for accurate stock control and traceability.'
  },
  {
    feature: 'Comprehensive Expiry Reports',
    description: 'Access detailed reports showing all products approaching expiry for proactive decision-making.'
  },
  {
    feature: 'Low Stock and Expiry Combined View',
    description: 'View low-stock and near-expiry items together for smarter and more efficient reordering decisions.'
  },
  {
    feature: 'Discount Planning for Expiring Stock',
    description: 'Identify expiring items in advance and plan targeted discount strategies to clear stock before expiry.'
  },
  {
    feature: 'Expiry-Safe Sales Control',
    description: 'Automatically block or flag sales of expired products at the point of sale to ensure customer safety and compliance.'
  }
],

  screenshots: [
    {
      title: 'Expiry Alerts Dashboard',
      image: expiryAlert,
      description: 'Dashboard with visual expiry status and real-time alert indicators'
    },
    // {
    //   title: 'Batch-Level Tracking',
    //   image: 'https://images.unsplash.com/photo-1588776814546-ec7d3c02f71f?auto=format&fit=crop&w=800',
    //   description: 'Detailed view of batches and their respective expiry timelines'
    // },
    // {
    //   title: 'Smart Notifications',
    //   image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=800',
    //   description: 'In-app and email alerts notifying teams about items nearing expiry'
    // }
  ],

  useCases: [
  {
    scenario: 'Clearing Near-Expiry Medicines',
    description: 'A pharmacy runs timely discount campaigns on near-expiry medicines based on automated expiry reports.',
    result: 'Significant cost savings by reducing expired stock write-offs'
  },
  {
    scenario: 'Reducing Waste in Supermarkets',
    description: 'A supermarket uses real-time expiry tracking and targeted discounts to quickly move perishable items before spoilage.',
    result: 'Lowered waste levels and improved inventory turnover for short-shelf-life products'
  },
  {
    scenario: 'Planned Bulk Discounting for Wholesalers',
    description: 'A wholesaler monitors batch expiry data to schedule bulk discount offers proactively and protect margins.',
    result: 'Minimized margin loss by selling near-expiry stock at planned discount intervals'
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
