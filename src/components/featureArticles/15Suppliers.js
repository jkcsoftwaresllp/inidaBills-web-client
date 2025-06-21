const Suppliers = () => ({
  title: 'Suppliers',
  shortDescription: 'Manage and track all your suppliers in one place',
  category: 'Procurement & Vendor Management',
  image: 'https://images.unsplash.com/photo-1566202166293-7f78a062aa7e?auto=format&fit=crop&w=1200',
  detailedDescription: 'Keep a centralized and organized record of all your suppliers. Monitor transactions, payments, and incoming stock from multiple vendors with ease. Build strong vendor relationships and ensure your supply chain is always optimized and transparent.',

  whatMakesItDifferent: [
    'Maintain detailed supplier profiles with contact info and terms',
    'Track purchase orders, payments, and pending deliveries per supplier',
    'Analyze supplier performance with order accuracy and fulfillment timelines',
    'Link inventory inflow directly with supplier transactions',
    'Automated payment reminders and credit tracking',
    'Seamless bulk import and export of supplier data'
  ],

  idealFor: [
    {
      businessType: 'Retailers',
      description: 'Helps retailers manage relationships with multiple suppliers for various products and categories.',
      benefits: ['Track delivery timelines', 'Monitor purchase frequency', 'Avoid duplicate orders', 'Improve negotiation with supplier data']
    },
    {
      businessType: 'Wholesalers',
      description: 'Enables efficient vendor management for large-volume purchases and supply networks.',
      benefits: ['Centralize supplier data', 'Track payments and credits', 'Optimize replenishment cycles', 'Improve supplier accountability']
    },
    {
      businessType: 'Manufacturers',
      description: 'Ideal for manufacturing units to manage raw material vendors and procurement timelines.',
      benefits: ['Track supplier-wise material flow', 'Analyze delays and their impact on production', 'Automate POs and invoice mapping', 'Maintain consistent material availability']
    },
    {
      businessType: 'Restaurants & Hospitality',
      description: 'Manage fresh produce and inventory from multiple food and beverage suppliers.',
      benefits: ['Ensure consistent stock for menus', 'Track freshness and delivery schedules', 'Simplify reorder process', 'Avoid overstocking or spoilage']
    }
  ],

  keyFeatures: [
    {
      feature: 'Supplier Directory',
      description: 'Maintain a searchable list of all vendors with contact, payment, and product info.'
    },
    {
      feature: 'Transaction History',
      description: 'View all past purchases, invoices, and payment history by supplier.'
    },
    {
      feature: 'Performance Analytics',
      description: 'Track delivery accuracy, fulfillment times, and pricing consistency for each vendor.'
    },
    {
      feature: 'Linked Inventory Updates',
      description: 'Automatically update stock levels when supplier transactions are recorded.'
    },
    {
      feature: 'Credit & Due Tracking',
      description: 'Get alerts for outstanding supplier payments and manage credit limits.'
    },
    {
      feature: 'Import/Export Support',
      description: 'Easily bulk import or export supplier data in Excel/CSV formats.'
    }
  ],

  screenshots: [
    {
      title: 'Supplier Dashboard',
      image: 'https://images.unsplash.com/photo-1566202166293-7f78a062aa7e?auto=format&fit=crop&w=800',
      description: 'Central view of all supplier contacts, transactions, and activity summaries'
    },
    {
      title: 'Purchase History by Supplier',
      image: 'https://images.unsplash.com/photo-1584622647114-7a60b99f2a7b?auto=format&fit=crop&w=800',
      description: 'Detailed logs of purchases, invoices, and pending deliveries from each supplier'
    },
    {
      title: 'Supplier Performance Metrics',
      image: 'https://images.unsplash.com/photo-1597699401792-0df2c9cb2039?auto=format&fit=crop&w=800',
      description: 'Analytics panel tracking delivery accuracy, timeliness, and cost trends per vendor'
    }
  ],

  useCases: [
    {
      scenario: 'Multi-Product Retailer',
      description: 'A fashion retailer tracks separate vendors for apparel, packaging, and accessories.',
      result: 'Improved coordination and reduced delays with 3rd-party suppliers by 45%'
    },
    {
      scenario: 'Manufacturing Vendor Management',
      description: 'A furniture manufacturer manages raw material suppliers and order schedules.',
      result: 'Reduces production halts by maintaining vendor accountability and timely delivery'
    },
    {
      scenario: 'Wholesale Reordering System',
      description: 'A wholesale distributor integrates supplier profiles into reordering processes.',
      result: 'Streamlines reorders and cuts manual communication by 60%'
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
