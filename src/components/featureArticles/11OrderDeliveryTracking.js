import orderTracking from '../../featuresScreenshot/order_tracking.png';

const OrderDeliveryTracking = () => ({
  title: 'Order/Delivery Tracking',
  shortDescription: 'Seamlessly track orders and deliveries in real-time',
  category: 'Logistics & Fulfillment',
  image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b1?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills helps you track orders from placement to delivery so your customers always get timely updates.',

  whatMakesItDifferent: [
    'Live order status',
    'Customer updates',
    'Link to stock',
    'Track by invoice',
    'Delay alerts',
    'Delivery reports'
  ],

  idealFor: [
    {
      businessType: 'Retail Shops',
      description: 'Ensures customers are updated.',
      benefits: ['Builds trust', 'Reduces queries', 'Fewer missed deliveries', 'Better reviews']
    },
    {
      businessType: 'Wholesalers',
      description: 'Handles bulk order tracking.',
      benefits: ['See order flow', 'Prevents lost orders', 'Helps in planning', 'Easy client updates']
    },
    {
      businessType: 'Pharmacies',
      description: 'Ensures medicines reach on time.',
      benefits: ['Tracks sensitive orders', 'Safer delivery', 'Alerts on delays', 'Builds loyalty']
    },
    {
      businessType: 'Supermarkets',
      description: 'Tracks online orders.',
      benefits: ['Clear delivery info', 'Helps team coordination', 'Prevents misses', 'Boosts satisfaction']
    }
  ],

  keyFeatures: [
  {
    feature: 'Live Order Tracking',
    description: 'Track order status in real-time from processing to delivery, keeping your team and customers updated at every step.'
  },
  {
    feature: 'Automated Customer Notifications',
    description: 'Send automatic order status updates to customers via SMS, email, or app notifications to enhance communication.'
  },
  {
    feature: 'Stock Synchronization',
    description: 'Automatically sync stock levels with order status to reduce manual data entry and inventory errors.'
  },
  {
    feature: 'Delivery Performance Monitoring',
    description: 'Track key delivery metrics like on-time rate, average delivery time, and fulfillment efficiency.'
  },
  {
    feature: 'Delay Alerts and Escalations',
    description: 'Receive instant alerts for delayed deliveries, enabling quick action to prevent customer dissatisfaction.'
  },
  {
    feature: 'Downloadable Delivery Reports',
    description: 'Export detailed delivery performance and order fulfillment reports for auditing and internal review.'
  }
],

  screenshots: [
    {
      title: 'Order Timeline',
      image: orderTracking,
      description: 'Visual progression of an order from confirmation to delivery completion'
    },
    // {
    //   title: 'Live Delivery Map',
    //   image: 'https://images.unsplash.com/photo-1605902711899-060e4f0fefb6?auto=format&fit=crop&w=800',
    //   description: 'Track delivery agents and vehicles with real-time GPS updates'
    // },
    // {
    //   title: 'Customer Notification Interface',
    //   image: 'https://images.unsplash.com/photo-1605902711927-3e0d39f0662c?auto=format&fit=crop&w=800',
    //   description: 'Sample SMS/email notifications sent to customers on order progress'
    // }
  ],

  useCases: [
  {
    scenario: 'Boosting Customer Reviews with Timely Updates',
    description: 'A retailer improves customer communication by sending real-time delivery updates and notifications throughout the order journey.',
    result: 'Higher customer satisfaction and an increase in positive online reviews'
  },
  {
    scenario: 'Tracking Bulk Order Deliveries for Wholesalers',
    description: 'A wholesaler manages and monitors large, multi-item shipments with real-time tracking to ensure timely delivery to retailers.',
    result: 'Improved delivery rates and better tracking of bulk orders'
  },
  {
    scenario: 'Ensuring Timely Medicine Delivery for Pharmacies',
    description: 'A pharmacy uses live tracking and delay alerts to ensure critical medicines reach patients or branches on time and safely.',
    result: 'Faster, safer deliveries and improved patient service levels'
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
