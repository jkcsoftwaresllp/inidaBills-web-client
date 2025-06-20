const UnlimitedWarehouse = () => ({
  title: 'Unlimited Warehouse',
  shortDescription: 'Manage multiple warehouses with unlimited capacity',
  category: 'Inventory Management',
  image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?auto=format&fit=crop&w=1200',
  detailedDescription: 'Track stock and movements across all your warehouses without limits. Our Unlimited Warehouse feature empowers your business to expand effortlessly, offering centralized control, real-time tracking, and seamless operations across any number of storage locations.',

  whatMakesItDifferent: [
    'No cap on the number of warehouses or storage zones',
    'Centralized visibility and control for distributed inventory',
    'Custom warehouse hierarchy and role-based access',
    'Smart transfers between warehouses with automated documentation',
    'Support for temperature-controlled or specialized warehouses',
    'Real-time sync with logistics and dispatch operations'
  ],

  idealFor: [
    {
      businessType: 'Retail',
      description: 'Ideal for retail businesses with regional stock hubs or back-end fulfillment centers.',
      benefits: ['Improve regional dispatch speed', 'Enable stock redistribution between stores', 'Lower last-mile delivery times', 'Enhance local inventory accuracy']
    },
    {
      businessType: 'Wholesale',
      description: 'Best suited for wholesalers managing high-volume storage and inter-warehouse transfers.',
      benefits: ['Streamline inter-warehouse transfers', 'Reduce bulk order errors', 'Maintain centralized purchase visibility', 'Optimize supplier deliveries']
    },
    {
      businessType: 'Logistics',
      description: 'Perfect for logistics companies operating multiple storage nodes or distribution points.',
      benefits: ['Monitor warehouse performance', 'Track movement across nodes', 'Improve fulfillment SLAs', 'Enable detailed operational reporting']
    }
  ],

  keyFeatures: [
    {
      feature: 'Unlimited Warehouses',
      description: 'Add and manage any number of warehouse locations without additional limits or costs.'
    },
    {
      feature: 'Central Dashboard',
      description: 'Unified dashboard showing stock summaries, alerts, and movements across all warehouses.'
    },
    {
      feature: 'Smart Transfers',
      description: 'Easily move stock between warehouses with auto-generated documentation and audit trails.'
    },
    {
      feature: 'Zone and Rack Mapping',
      description: 'Map zones, aisles, and racks for precise storage and easy retrieval.'
    },
    {
      feature: 'User Permissions',
      description: 'Assign roles and access levels based on warehouse responsibilities and location.'
    },
    {
      feature: 'Advanced Filters & Reporting',
      description: 'Generate location-specific reports for better stock planning and performance insights.'
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
      scenario: 'Regional Stock Allocation',
      description: 'A retail chain distributes stock across regional warehouses based on demand data.',
      result: '25% reduction in delivery time and 15% boost in product availability'
    },
    {
      scenario: 'Bulk Goods Distribution',
      description: 'A wholesaler manages multiple bulk warehouses and coordinates transfers efficiently.',
      result: '35% reduction in inventory mismatch and enhanced delivery accuracy'
    },
    {
      scenario: 'Distributed Fulfillment Centers',
      description: 'A logistics provider uses decentralized warehouses to fulfill orders faster.',
      result: '20% increase in same-day dispatch and improved delivery SLAs'
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
