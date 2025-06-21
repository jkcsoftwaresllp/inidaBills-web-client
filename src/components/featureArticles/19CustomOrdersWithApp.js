const CustomOrdersWithApp = () => ({
  title: 'Custom Orders with App',
  shortDescription: 'Create and manage custom orders easily through the app',
  category: 'Sales & Order Management',
  image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200',
  detailedDescription: 'Allow your customers or staff to create and manage custom product orders directly from the mobile app. Whether it’s a made-to-order product, personalized configuration, or special delivery instructions, this feature ensures flexibility, efficiency, and better customer satisfaction.',

  whatMakesItDifferent: [
    'Create orders with custom notes, specifications, or attachments',
    'Mobile-first interface for on-the-go order placement',
    'Track status updates for each custom order in real-time',
    'Supports approvals or internal reviews before fulfillment',
    'Syncs seamlessly with inventory and billing modules',
    'Notifies relevant staff upon order creation or changes'
  ],

  idealFor: [
    {
      businessType: 'Custom Manufacturers',
      description: 'Perfect for businesses offering personalized or made-to-order products.',
      benefits: ['Receive clear customization details', 'Avoid manual miscommunication', 'Speed up order processing', 'Track fulfillment timelines easily']
    },
    {
      businessType: 'Retailers',
      description: 'Useful for retailers offering product bundles, personalization, or optional add-ons.',
      benefits: ['Handle product customizations at the POS or via app', 'Keep detailed order records', 'Improve customer satisfaction with tailored options']
    },
    {
      businessType: 'On-demand Services',
      description: 'Great for services like printing, repairs, tailoring, or food customization.',
      benefits: ['Capture client requirements directly from mobile', 'Enable staff notifications and confirmations', 'Ensure smooth end-to-end tracking of service orders']
    },
    {
      businessType: 'Field Sales Teams',
      description: 'Allows field agents to place customer-specific orders during visits.',
      benefits: ['Enable real-time order booking', 'Add custom delivery or packaging notes', 'Instant confirmation to backend teams']
    }
  ],

  keyFeatures: [
    {
      feature: 'Custom Order Form',
      description: 'Capture product details, quantity, notes, and optional file uploads for personalization.'
    },
    {
      feature: 'Mobile App Integration',
      description: 'Place and manage orders from any smartphone with an intuitive interface.'
    },
    {
      feature: 'Real-Time Status Tracking',
      description: 'Track the progress of each custom order from approval to delivery.'
    },
    {
      feature: 'Notifications & Alerts',
      description: 'Notify staff or departments when a new custom order is placed or updated.'
    },
    {
      feature: 'Approval Workflow (Optional)',
      description: 'Add internal review steps before processing complex or high-value custom orders.'
    },
    {
      feature: 'History & Reorder Support',
      description: 'View past custom orders and reorder with a single tap.'
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
      scenario: 'Tailoring Store Receives Mobile Orders',
      description: 'Customers place stitching orders with measurements and fabric preferences via the app.',
      result: 'Reduces in-store footfall by 35% while improving accuracy of custom orders'
    },
    {
      scenario: 'Furniture Manufacturer Accepts Personalized Requests',
      description: 'A manufacturer receives requests for customized designs and finishes via sales reps on the app.',
      result: 'Streamlines custom production workflow and shortens turnaround time'
    },
    {
      scenario: 'Field Sales Agent Places On-the-Spot Orders',
      description: 'An FMCG sales agent books personalized product packages based on retailer needs.',
      result: 'Improves response time and increases conversions during in-person visits'
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
