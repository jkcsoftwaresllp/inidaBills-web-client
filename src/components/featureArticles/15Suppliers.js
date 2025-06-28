import suppliers from '../../featuresScreenshot/supplier_section.png';

const Suppliers = () => ({
  title: 'Suppliers',
  shortDescription: 'Manage and track all your suppliers in one place',
  category: 'Procurement & Vendor Management',
  image: 'https://images.unsplash.com/photo-1566202166293-7f78a062aa7e?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills helps you manage supplier records, orders, and payments from one place for smoother operations.',

  whatMakesItDifferent: [
    'Central supplier list',
    'Link to stock',
    'Track payments',
    'Bulk order support',
    'Supplier reports',
    'Easy updates'
  ],

  idealFor: [
    {
      businessType: 'Wholesalers',
      description: 'Handle many suppliers easily.',
      benefits: ['Supplier records', 'Track orders', 'Payment logs', 'Bulk ready']
    },
    {
      businessType: 'Retail Chains',
      description: 'Manage supplier network.',
      benefits: ['One list', 'Easy orders', 'Payment safety', 'Supply reports']
    },
    {
      businessType: 'Pharmacies',
      description: 'Track medical suppliers.',
      benefits: ['Supplier stock links', 'Payment track', 'Safer supply', 'GST ready']
    },
    {
      businessType: 'Supermarkets',
      description: 'Manage food/goods suppliers.',
      benefits: ['Central list', 'Order history', 'Track payments', 'Supplier report']
    }
  ],

  keyFeatures: [
  {
    feature: 'Supplier Directory',
    description: 'Maintain a complete, searchable list of all your suppliers with contact details, payment terms, and supplied products.'
  },
  {
    feature: 'Linked Stock Management',
    description: 'Automatically connect supplier orders to inventory levels, ensuring real-time stock updates across your supply chain.'
  },
  {
    feature: 'Supplier Payment Tracking',
    description: 'Monitor payments due, completed transactions, and credit terms for each supplier to ensure timely and accurate settlements.'
  },
  {
    feature: 'Order History by Supplier',
    description: 'Access detailed historical records of every order placed with each supplier, including quantities, prices, and delivery dates.'
  },
  {
    feature: 'Supplier Performance Reports',
    description: 'Analyze supplier reliability with insights on delivery timelines, order accuracy, and pricing trends.'
  },
  {
    feature: 'Easy Supplier Data Updates',
    description: 'Quickly edit and update supplier information to keep your database current and accurate.'
  }
],

  screenshots: [
    {
      title: 'Supplier Dashboard',
      image: suppliers,
      description: 'Central view of all supplier contacts, transactions, and activity summaries'
    },
    // {
    //   title: 'Purchase History by Supplier',
    //   image: 'https://images.unsplash.com/photo-1584622647114-7a60b99f2a7b?auto=format&fit=crop&w=800',
    //   description: 'Detailed logs of purchases, invoices, and pending deliveries from each supplier'
    // },
    // {
    //   title: 'Supplier Performance Metrics',
    //   image: 'https://images.unsplash.com/photo-1597699401792-0df2c9cb2039?auto=format&fit=crop&w=800',
    //   description: 'Analytics panel tracking delivery accuracy, timeliness, and cost trends per vendor'
    // }
  ],

  useCases: [
  {
    scenario: 'Bulk Supplier Order Tracking for Wholesalers',
    description: 'A wholesaler tracks multiple large supplier orders with linked inventory and payment monitoring.',
    result: 'Eliminated stock losses and improved order fulfillment accuracy'
  },
  {
    scenario: 'Improved Supplier Payment Management for Retail Chains',
    description: 'A retail chain uses supplier payment tracking to ensure timely and accurate settlements with vendors.',
    result: 'Reduced payment errors and strengthened supplier relationships'
  },
  {
    scenario: 'Medicine Supplier Tracking for Pharmacies',
    description: 'A pharmacy monitors medicine suppliers for timely deliveries and linked stock updates.',
    result: 'Safer stock management and minimized out-of-stock situations for critical medicines'
  }
],

  implementation: {
    setupTime: '1–2 hours',
    trainingRequired: 'Minimal (30–60 mins)',
    integrationComplexity: 'Low to Medium',
    steps: [
      'Import supplier details via form or CSV',
      'Set default payment terms and categories',
      'Link suppliers to relevant inventory or products',
      'Start recording purchases and transactions',
      'Enable due alerts and payment tracking',
      'Monitor supplier metrics over time'
    ]
  },

  pricing: {
    included: 'All IndiaBills plans',
    additionalCosts: 'None',
    roi: 'Improves inventory flow, reduces supply delays, and enhances vendor relations—leading to 20–40% cost savings'
  }
});

export default Suppliers;
