const CustomOrdersWithApp = () => ({
  title: 'Custom Orders with App',
  shortDescription: 'Create and manage custom orders easily through the app',
  category: 'Sales & Order Management',
  image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills lets customers place custom orders via app, so you can handle special requests with ease.',

  whatMakesItDifferent: [
    'Mobile-friendly',
    'Easy custom notes',
    'Track custom orders',
    'Link to stock',
    'Alerts for custom items',
    'Report on custom sales'
  ],

  idealFor: [
    {
      businessType: 'Retailers',
      description: 'Take unique requests.',
      benefits: ['Custom notes', 'Smart tracking', 'Better service', 'Builds loyalty']
    },
    {
      businessType: 'Wholesalers',
      description: 'Handle custom bulk.',
      benefits: ['Big custom orders', 'Smart processing', 'Track status', 'Clear logs']
    },
    {
      businessType: 'Supermarkets',
      description: 'Serve big clients.',
      benefits: ['Smart custom orders', 'Better service', 'Prevent errors', 'Track requests']
    },
    {
      businessType: 'Service Firms',
      description: 'Tailor services easily.',
      benefits: ['Note requests', 'Track work', 'Better delivery', 'Build trust']
    }
  ],

  keyFeatures: [
  {
    feature: 'App-Based Custom Order Management',
    description: 'Allow users to place and track custom orders easily through a mobile-friendly app interface.'
  },
  {
    feature: 'Custom Notes & Instructions',
    description: 'Add detailed notes, customer preferences, or special instructions for each order.'
  },
  {
    feature: 'Live Order Status Tracking',
    description: 'Monitor the progress of every custom job from creation to delivery with real-time updates.'
  },
  {
    feature: 'Automated Alerts & Reminders',
    description: 'Get notified of pending actions, approvals, or delivery deadlines to avoid delays.'
  },
  {
    feature: 'Linked Inventory Management',
    description: 'Ensure the right stock levels are maintained for items used in custom jobs by auto-linking to inventory.'
  },
  {
    feature: 'Custom Order Reporting',
    description: 'Generate reports on custom orders to analyze trends, popular request types, and fulfillment times.'
  }
],

  screenshots: [
    {
      title: 'Custom Order Entry',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800',
      description: 'App interface for entering custom orders with detailed requirements and attachments'
    },
    {
      title: 'Order Status & Updates',
      image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b1?auto=format&fit=crop&w=800',
      description: 'Real-time tracking of order status from submission to fulfillment'
    },
    {
      title: 'Staff Notification Panel',
      image: 'https://images.unsplash.com/photo-1580910051070-313b0e445484?auto=format&fit=crop&w=800',
      description: 'Staff gets notified when a new custom order is placed or needs review'
    }
  ],

  useCases: [
  {
    scenario: 'Retailer Handles Special Customer Orders',
    description: 'A retail store takes custom product requests from walk-in customers and processes them quickly through the app.',
    result: 'Delivers faster service and improves customer satisfaction with timely fulfillment'
  },
  {
    scenario: 'Wholesaler Manages Bulk Custom Orders',
    description: 'A wholesaler uses the custom order system to track large-volume, client-specific requests without errors.',
    result: 'Reduces manual mistakes and speeds up processing for bulk clients'
  },
  {
    scenario: 'Supermarket Fulfills Large Client Requests',
    description: 'A supermarket processes bulk custom orders for corporate and institutional buyers using detailed order notes and linked stock tracking.',
    result: 'Builds long-term loyalty and increases repeat business from big customers'
  }
],

  implementation: {
    setupTime: '1–2 hours',
    trainingRequired: 'Minimal (30–45 mins)',
    integrationComplexity: 'Low',
    steps: [
      'Enable Custom Orders module in app settings',
      'Define order fields, notes, and optional attachments',
      'Train staff or field agents on input process',
      'Test order flow and notification triggers',
      'Monitor and fulfill incoming orders as per workflow'
    ]
  },

  pricing: {
    included: 'Available in all IndiaBills mobile-enabled plans',
    additionalCosts: 'None (mobile app included)',
    roi: 'Improves order accuracy, boosts customer satisfaction, and saves time—yielding 25–40% efficiency gains'
  }
});

export default CustomOrdersWithApp;
