const RealTimeStockTracking = () => ({
  title: 'Real Time Stock Tracking',
  shortDescription: 'Monitor real-time stock trends for smarter decisions',
  category: 'Inventory Management',
  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200',
  detailedDescription: 'Real-Time Stock Tracking in IndiaBills helps businesses monitor their inventory instantly as sales and purchases happen. This feature ensures you always know the exact status of your stock, avoiding shortages and overstock.',
  
  whatMakesItDifferent: [
    'Instant updates on stock changes',
    'Multi-location tracking',
    'Low-stock and expiry alerts',
    'Offline mode with auto-sync',
    'Live stock valuation',
    'Error reduction'
  ],

  idealFor: [
    {
      businessType: 'Retail Stores',
      description: 'Keeps products always in stock, so customers find what they want.',
      benefits: ['Prevents stockouts', 'Highlights fast-moving items', 'Helps plan purchases smartly', 'Makes inventory reporting easy']
    },
    {
      businessType: 'Wholesale Distributors',
      description: 'Handles large volumes and multiple locations efficiently.',
      benefits: ['Manages stock in different warehouses', 'Faster order processing', 'Reduces risk of overstock', 'Improves supplier coordination']
    },
    {
      businessType: 'Pharmacies',
      description: 'Tracks sensitive stock like medicines with expiry dates.',
      benefits: ['Expiry warnings', 'Better compliance', 'Reduces waste', 'Tracks demand trends']
    },
    {
      businessType: 'Supermarkets',
      description: 'Maintains a balanced stock on shelves at all times.',
      benefits: ['Optimizes stock levels', 'Avoids over-purchasing', 'Easy category tracking', 'Simplifies reordering']
    }
  ],

  keyFeatures: [
    {
      feature: 'Auto stock updates',
      description: 'No manual effort required to adjust inventory.'
    },
    {
      feature: 'Multi-location visibility',
      description: 'See stock across all sites at once.'
    },
    {
      feature: 'Low-stock warnings',
      description: 'Alerts you to reorder before running out.'
    },
    {
      feature: 'Expiry tracking',
      description: 'Keeps tabs on expiry dates for sensitive items.'
    },
    {
      feature: 'Stock movement reports',
      description: 'See what comes in and goes out clearly.'
    },
    {
      feature: 'Live valuation',
      description: 'Always know what your stock is worth in real-time.'
    }
  ],

  screenshots: [
    {
      title: 'Real-Time Dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
      description: 'Live inventory dashboard showing current stock levels, movements, and alerts'
    },
    {
      title: 'Stock Movement Tracking',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800',
      description: 'Detailed view of stock movements with timestamps and transaction details'
    },
    {
      title: 'Multi-Location View',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800',
      description: 'Centralized view of inventory across multiple locations and warehouses'
    }
  ],

  useCases: [
  {
    scenario: 'Bestseller Stock Replenishment',
    description: 'A gadget store uses automated reorder alerts to keep hot-selling items always in stock, ensuring availability during peak demand.',
    result: 'Significant reduction in lost sales due to stockouts on bestsellers'
  },
  {
    scenario: 'Expiry-Based Inventory Clearance',
    description: 'A pharmacy tracks expiry dates in real-time and runs timely discount campaigns to clear near-expiry products before waste occurs.',
    result: 'Minimized inventory losses from expired stock while boosting short-term sales'
  },
  {
    scenario: 'High-Volume Order Fulfillment',
    description: 'A wholesaler leverages accurate, real-time stock data to speed up packing and streamline the fulfillment of large bulk orders.',
    result: 'Faster order processing with improved accuracy for high-volume shipments'
  }
],

  implementation: {
    setupTime: '2-4 hours',
    trainingRequired: 'Basic (1-2 hours)',
    integrationComplexity: 'Low to Medium',
    steps: [
      'Initial inventory data import and verification',
      'Barcode scanner setup and configuration',
      'User role assignment and permissions setup',
      'Alert threshold configuration',
      'Multi-location setup (if applicable)',
      'Staff training and system testing'
    ]
  },

  pricing: {
    included: 'All IndiaBills plans',
    additionalCosts: 'Barcode scanners (optional)',
    roi: 'Typically 300-500% ROI within first year through reduced stockouts and optimized inventory levels'
  }
});

export default RealTimeStockTracking;