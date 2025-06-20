const GSTBilling = () => ({
  title: 'GST Billing',
  shortDescription: 'Effortless GST billing and inventory management',
  category: 'Tax Compliance',
  image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200',
  detailedDescription: 'Simplify your GST compliance with our comprehensive billing system designed specifically for Indian businesses. Generate GST-compliant invoices, manage tax calculations, and streamline your filing process with ease.',
  
  whatMakesItDifferent: [
    'Automatic GST calculation based on HSN/SAC codes',
    'Built-in compliance with latest GST rules and rates',
    'E-invoicing integration for businesses above ₹5 crores turnover',
    'Automated GSTR-1, GSTR-3B return preparation',
    'Real-time GST rate updates and notifications',
    'Reverse charge mechanism handling for applicable transactions'
  ],

  idealFor: [
    {
      businessType: 'Small Businesses',
      description: 'Perfect for small businesses new to GST compliance. Simplifies complex tax calculations and ensures accurate filing.',
      benefits: ['Automated tax calculations', 'Error-free GST returns', 'Compliance assurance', 'Time savings on paperwork']
    },
    {
      businessType: 'Service Providers',
      description: 'Ideal for consultants, agencies, and service-based businesses dealing with SAC codes and service tax complexities.',
      benefits: ['SAC code management', 'Service tax calculations', 'Professional invoice templates', 'Client payment tracking']
    },
    {
      businessType: 'Retailers',
      description: 'Essential for retail businesses managing multiple product categories with different GST rates and HSN codes.',
      benefits: ['Multi-rate GST handling', 'HSN code automation', 'Quick billing process', 'Inventory-tax integration']
    },
    {
      businessType: 'B2B Companies',
      description: 'Critical for B2B businesses requiring detailed GST documentation and compliance for input tax credit claims.',
      benefits: ['Detailed GST documentation', 'ITC tracking', 'Vendor GST verification', 'Compliance reporting']
    }
  ],

  keyFeatures: [
    {
      feature: 'Automatic Tax Calculation',
      description: 'Intelligent GST calculation based on product HSN codes, customer location, and applicable tax rates.'
    },
    {
      feature: 'GST-Compliant Invoices',
      description: 'Generate invoices that meet all GST requirements including mandatory fields and proper formatting.'
    },
    {
      feature: 'E-Invoicing Support',
      description: 'Seamless e-invoicing integration for businesses with turnover above ₹5 crores with IRN generation.'
    },
    {
      feature: 'Return Filing Assistance',
      description: 'Automated preparation of GSTR-1, GSTR-3B, and other returns with data validation.'
    },
    {
      feature: 'HSN/SAC Management',
      description: 'Comprehensive database of HSN and SAC codes with automatic rate assignment.'
    },
    {
      feature: 'Compliance Monitoring',
      description: 'Real-time compliance checks and alerts for any GST-related issues or updates.'
    }
  ],

  screenshots: [
    {
      title: 'GST Invoice Generation',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800',
      description: 'Professional GST-compliant invoice with all mandatory fields and tax breakdowns'
    },
    {
      title: 'Tax Calculation Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
      description: 'Automated GST calculation interface showing tax breakdowns and rates'
    },
    {
      title: 'GST Return Preview',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
      description: 'GSTR-1 return preview with all transaction details and tax summaries'
    }
  ],

  useCases: [
    {
      scenario: 'Multi-State Business Operations',
      description: 'A textile distributor operating across multiple states uses automated IGST/CGST/SGST calculations for different customer locations.',
      result: '90% reduction in tax calculation errors and 100% compliance with inter-state tax rules'
    },
    {
      scenario: 'Service Business Compliance',
      description: 'A digital marketing agency automates SAC code assignment and service tax calculations for diverse client projects.',
      result: 'Reduced GST filing time from 8 hours to 30 minutes per month'
    },
    {
      scenario: 'E-Invoicing Implementation',
      description: 'A pharmaceutical distributor seamlessly implements e-invoicing with automatic IRN generation for all B2B transactions.',
      result: '100% e-invoicing compliance achieved within 2 weeks of implementation'
    }
  ],

  implementation: {
    setupTime: '1-3 hours',
    trainingRequired: 'Basic (2-3 hours)',
    integrationComplexity: 'Low',
    steps: [
      'GSTIN registration and verification',
      'Product HSN/SAC code setup',
      'Customer GST details configuration',
      'Invoice template customization',
      'E-invoicing setup (if applicable)',
      'Return filing process training'
    ]
  },

  pricing: {
    included: 'All IndiaBills plans',
    additionalCosts: 'None',
    roi: 'Saves 15-20 hours per month on GST compliance tasks, reducing accounting costs by 60-80%'
  }
});

export default GSTBilling;