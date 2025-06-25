const UnlimitedWarehouse = () => ({
  title: 'Unlimited Warehouse',
  shortDescription: 'Manage multiple warehouses with unlimited capacity',
  category: 'Inventory Management',
  image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?auto=format&fit=crop&w=1200',
  detailedDescription: 'The Unlimited Warehouse feature lets businesses manage stock across as many warehouses or branches as needed, all from one system.',

  whatMakesItDifferent: [
    'No warehouse limit',
    'Central control',
    'Separate stock data',
    'Easy transfer',
    'Detailed tracking',
    'Low-stock per location alerts'
  ],

  idealFor: [
    {
      businessType: 'Retail Chains',
      description: 'Handle multiple stores easily.',
      benefits: ['Central stock view', 'Location alerts', 'Easy transfer', 'Efficient restock']
    },
    {
      businessType: 'Wholesalers',
      description: 'Control stock across locations.',
      benefits: ['Multi-location visibility', 'Bulk transfer', 'Supplier coordination', 'Reduce waste']
    },
    {
      businessType: 'Pharmacies',
      description: 'Handle main and branch stocks.',
      benefits: ['Location expiry tracking', 'Medicine availability', 'Fast transfer', 'Prevent shortages']
    },
    {
      businessType: 'Supermarkets',
      description: 'Manage big stock across stores.',
      benefits: ['Accurate stock data', 'Avoid overstock', 'Smooth transfers', 'Plan better']
    }
  ],

  keyFeatures: [
  {
    feature: 'Unlimited Warehouse Locations',
    description: 'Manage an unlimited number of warehouses or stock locations without any system-imposed restrictions.'
  },
  {
    feature: 'Centralized Stock Control',
    description: 'Monitor and manage stock levels across all locations from a single, unified system.'
  },
  {
    feature: 'Per-Warehouse Stock Visibility',
    description: 'View real-time stock levels for each individual warehouse to enable better inventory decisions.'
  },
  {
    feature: 'Easy Inter-Location Transfers',
    description: 'Quickly transfer items between warehouses with automated tracking and documentation.'
  },
  {
    feature: 'Location-Specific Reports',
    description: 'Generate detailed inventory and movement reports for each warehouse location separately.'
  },
  {
    feature: 'Location-Based Stock Alerts',
    description: 'Receive low-stock and reorder alerts specific to each warehouse to avoid stockouts at any location.'
  }
],

  screenshots: [
    {
      title: 'Warehouse Dashboard',
      image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?auto=format&fit=crop&w=800',
      description: 'Overview of multiple warehouses with stock summaries and quick action options'
    },
    {
      title: 'Stock Transfer Log',
      image: 'https://images.unsplash.com/photo-1626771452406-2b18a76851c0?auto=format&fit=crop&w=800',
      description: 'Detailed record of stock transfers between different warehouse locations'
    },
    {
      title: 'Rack & Zone Mapping',
      image: 'https://images.unsplash.com/photo-1581093588401-0707a4c01c33?auto=format&fit=crop&w=800',
      description: 'Visual representation of storage zones and item placements within a warehouse'
    }
  ],

  useCases: [
  {
    scenario: 'Preventing Store Stockouts',
    description: 'A retail chain uses real-time stock transfer capabilities to quickly move inventory between stores and avoid empty shelves during high demand.',
    result: 'Reduced stockouts and improved on-shelf availability across all store locations'
  },
  {
    scenario: 'Smart Stock Balancing for Fast Fulfillment',
    description: 'A wholesaler dynamically transfers stock between warehouses to quickly fulfill urgent bulk orders for key customers.',
    result: 'Faster order fulfillment and better stock utilization across warehouses'
  },
  {
    scenario: 'Timely Medicine Availability in Branches',
    description: 'A pharmacy chain shifts essential medicines to branches with urgent demand, ensuring critical stock reaches the right location on time.',
    result: 'Improved patient service and ensured timely availability of life-saving medicines'
  }
],

  implementation: {
    setupTime: '3-5 hours',
    trainingRequired: 'Basic to Intermediate (2-3 hours)',
    integrationComplexity: 'Medium',
    steps: [
      'Create warehouse profiles and zones',
      'Define user roles and access levels',
      'Upload stock data by location',
      'Set transfer rules and documentation formats',
      'Configure dashboards and reports',
      'Train warehouse and logistics staff'
    ]
  },

  pricing: {
    included: 'Included in Premium and Enterprise plans',
    additionalCosts: 'None for software; optional costs for hardware mapping tools',
    roi: '200–400% ROI through reduced transfer delays, higher stock visibility, and better warehouse utilization'
  }
});

export default UnlimitedWarehouse;
