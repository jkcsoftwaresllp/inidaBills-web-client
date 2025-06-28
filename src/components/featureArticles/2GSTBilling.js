import GstBilling from '../../featuresScreenshot/GST_Billing.png';

const GSTBilling = () => ({
  title: 'GST Billing',
  shortDescription: 'Effortless GST billing and inventory management',
  category: 'Tax Compliance',
  image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200',
  detailedDescription: 'GST Billing by IndiaBills makes tax calculations automatic and generates clean, compliant invoices. It simplifies GST filing and keeps your business tax-ready at all times.',
  
  whatMakesItDifferent: [
    'Automatic GST calculation',
    'Handles mixed GST rates',
    'HSN/GSTIN included',
    'Combines tax + discounts correctly',
    'Prepares GST return reports',
    'Instant digital sharing'
  ],

  idealFor: [
    {
      businessType: 'Electronics Stores',
      description: 'Different tax rates? No problem for billing.',
      benefits: ['Mixed-rate support', 'Accurate invoices', 'Faster billing', 'Ready for GST return']
    },
    {
      businessType: 'Clothing Shops',
      description: 'Easy GST for fashion retailers',
      benefits: ['Mixed-tax item billing', 'Clean tax breakdown', 'Simple filing', 'Customer-friendly bills']
    },
    {
      businessType: 'Wholesalers',
      description: 'Bulk GST billing made easy.',
      benefits: ['Quick bulk invoice creation', 'Handles multi-rate goods', 'Auto GST reports', 'Saves time']
    },
    {
      businessType: 'Service Providers',
      description: 'Combines goods and service billing seamlessly.',
      benefits: ['Single invoice', 'Correct tax split', 'Easy records', 'GST-ready format']
    }
  ],

  keyFeatures: [
    {
      feature: 'Auto tax calculations',
      description: 'No need for manual entry.'
    },
    {
      feature: 'HSN/GSTIN compliance',
      description: 'Bills meet legal requirements.'
    },
    {
      feature: 'Mixed rate support',
      description: 'One bill can cover all rates.'
    },
    {
      feature: 'Combines discount/tax properly',
      description: 'Always correct totals.'
    },
    {
      feature: 'Creates GST return reports',
      description: 'Filing becomes easier.'
    },
    {
      feature: 'Shares bills online',
      description: 'Email/WhatsApp options built-in.'
    }
  ],

  screenshots: [
    {
      title: 'GST Invoice Generation',
      image: GstBilling,
      description: 'Professional GST-compliant invoice with all mandatory fields and tax breakdowns'
    },
    // {
    //   title: 'Tax Calculation Dashboard',
    //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    //   description: 'Automated GST calculation interface showing tax breakdowns and rates'
    // },
    // {
    //   title: 'GST Return Preview',
    //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    //   description: 'GSTR-1 return preview with all transaction details and tax summaries'
    // }
  ],

  useCases: [
  {
    scenario: 'Error-Free Retail Billing',
    description: 'An electronics store automates billing to ensure accurate invoices at checkout, reducing manual errors and speeding up the customer billing process.',
    result: 'Faster checkout and improved customer satisfaction with accurate invoicing'
  },
  {
    scenario: 'High-Volume Invoicing for Wholesalers',
    description: 'A wholesale distributor streamlines bulk order processing by quickly generating multiple invoices with minimal manual effort.',
    result: 'Significant time savings and faster order-to-invoice cycle for large customer orders'
  },
  {
    scenario: 'Combined Billing for Products and Services',
    description: 'A service-based company simplifies billing by seamlessly combining charges for both products sold and services rendered into a single invoice.',
    result: 'Simplified billing process and reduced confusion for customers dealing with mixed charges'
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