const OrderDeliveryTracking = () => ({
  title: 'Order/Delivery Tracking',
  shortDescription: 'Seamlessly track orders and deliveries in real-time',
  category: 'Logistics & Fulfillment',
  image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b1?auto=format&fit=crop&w=1200',
  detailedDescription: 'Stay on top of every order and its delivery status. Provide better customer service with accurate and timely tracking updates. From packing to delivery, monitor the full lifecycle of each order with location updates, delivery confirmations, and status alerts.',

  whatMakesItDifferent: [
    'Real-time order status tracking from placement to delivery',
    'Live delivery updates with ETA predictions',
    'Geo-tracking of delivery agents or vehicles',
    'Customer notifications via email, SMS, or app',
    'Order timeline with complete event history',
    'Support for partial deliveries and split shipments'
  ],

  idealFor: [
    {
      businessType: 'E-commerce',
      description: 'Deliver better online shopping experiences with transparent tracking and reduced delivery anxiety.',
      benefits: ['Improve customer trust', 'Reduce “where is my order” inquiries', 'Enable fast issue resolution', 'Boost repeat purchases']
    },
    {
      businessType: 'Logistics',
      description: 'Essential for logistics firms handling B2B or B2C parcel and freight movement.',
      benefits: ['Track vehicle and delivery agent movements', 'Improve route planning', 'Enhance delivery SLAs', 'Reduce misplacements']
    },
    {
      businessType: 'Retail',
      description: 'Ideal for retail chains with home delivery or store pickup options.',
      benefits: ['Sync in-store and online orders', 'Ensure timely fulfillment', 'Notify customers proactively', 'Optimize delivery resources']
    },
    {
      businessType: 'FMCG & Food Delivery',
      description: 'Track time-sensitive deliveries like groceries or restaurant orders.',
      benefits: ['Minimize delays', 'Ensure freshness and satisfaction', 'Auto-assign routes based on location', 'Track feedback post-delivery']
    }
  ],

  keyFeatures: [
    {
      feature: 'Order Timeline View',
      description: 'Track every step of the order from confirmation, packing, dispatch to delivery.'
    },
    {
      feature: 'Live Geo-Tracking',
      description: 'View real-time location of delivery agents or vehicles on the map.'
    },
    {
      feature: 'Status Notifications',
      description: 'Send automated alerts to customers via email, SMS, or app when status updates.'
    },
    {
      feature: 'Delivery Confirmation',
      description: 'Capture proof of delivery through OTP, signature, or photo.'
    },
    {
      feature: 'Partial Fulfillment Support',
      description: 'Handle multi-item or multi-location orders with split shipments.'
    },
    {
      feature: 'Analytics & Delivery Reports',
      description: 'Monitor delivery performance, delays, and success rate with detailed reports.'
    }
  ],

  screenshots: [
    {
      title: 'Order Timeline',
      image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b1?auto=format&fit=crop&w=800',
      description: 'Visual progression of an order from confirmation to delivery completion'
    },
    {
      title: 'Live Delivery Map',
      image: 'https://images.unsplash.com/photo-1605902711899-060e4f0fefb6?auto=format&fit=crop&w=800',
      description: 'Track delivery agents and vehicles with real-time GPS updates'
    },
    {
      title: 'Customer Notification Interface',
      image: 'https://images.unsplash.com/photo-1605902711927-3e0d39f0662c?auto=format&fit=crop&w=800',
      description: 'Sample SMS/email notifications sent to customers on order progress'
    }
  ],

  useCases: [
    {
      scenario: 'Same-Day Delivery Tracking',
      description: 'An e-commerce company offers same-day delivery and uses live tracking to ensure timely drop-offs.',
      result: '95% on-time deliveries and 40% reduction in customer queries'
    },
    {
      scenario: 'Multi-Stop Logistics',
      description: 'A logistics company uses geo-tracking to optimize delivery routes and minimize fuel costs.',
      result: '20% reduction in delivery time and operational costs'
    },
    {
      scenario: 'Order Split Across Warehouses',
      description: 'A retail business fulfills an order from two different warehouse locations.',
      result: 'Improved fulfillment flexibility with 100% accurate delivery tracking'
    }
  ],

  implementation: {
    setupTime: '2–4 hours',
    trainingRequired: 'Basic (1–2 hours)',
    integrationComplexity: 'Medium',
    steps: [
      'Enable order tracking module',
      'Integrate with order and delivery systems',
      'Assign roles to delivery agents and update routing rules',
      'Set notification preferences for customers',
      'Test live tracking and update intervals',
      'Train staff on tracking interface and delivery confirmation'
    ]
  },

  pricing: {
    included: 'Included in IndiaBills Premium & Enterprise plans',
    additionalCosts: 'Optional GPS device or delivery agent app',
    roi: 'Typically 200–400% ROI from reduced support tickets, better on-time deliveries, and higher customer retention'
  }
});

export default OrderDeliveryTracking;
