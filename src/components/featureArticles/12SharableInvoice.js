import sharableInvoice from '../../featuresScreenshot/Shareable_invoice.png';

const SharableInvoice = () => ({
  title: 'Sharable Invoice',
  shortDescription: 'Create invoices & share instantly with customers',
  category: 'Billing & Payments',
  image: 'https://images.unsplash.com/photo-1581092588429-8b6b9c03a0ba?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills lets you generate and share invoices instantly through email, WhatsApp, or print, saving time and improving service.',

  whatMakesItDifferent: [
    'Instant sharing',
    'Multi-channel',
    'GST-ready format',
    'Mobile-friendly',
    'Custom message',
    'Secure link'
  ],

  idealFor: [
    {
      businessType: 'Retail Shops',
      description: 'Quick invoicing on the go.',
      benefits: ['Faster checkout', 'Customer delight', 'Easy record', 'Saves paper']
    },
    {
      businessType: 'Wholesalers',
      description: 'Handles bulk invoices easily.',
      benefits: ['Bulk send', 'Clear records', 'Quick share', 'Saves time']
    },
    {
      businessType: 'Pharmacies',
      description: 'Safe, compliant bills.',
      benefits: ['Easy GST bills', 'Quick share', 'Clear records', 'Builds trust']
    },
    {
      businessType: 'Service Providers',
      description: 'Fast digital billing.',
      benefits: ['Instant invoices', 'Easy GST', 'Clear tax info', 'Quick client sends']
    }
  ],

  keyFeatures: [
  {
    feature: 'Multi-Channel Invoice Sharing',
    description: 'Easily send invoices via Email, WhatsApp, or secure shareable links—whichever suits your customer best.'
  },
  {
    feature: 'GST-Compliant Invoices',
    description: 'Generate invoices that automatically meet GST rules and tax formatting requirements for hassle-free compliance.'
  },
  {
    feature: 'Secure Invoice Links',
    description: 'Share encrypted, password-protected invoice links to ensure customer data stays safe and private.'
  },
  {
    feature: 'Print-Ready Formats',
    description: 'Generate printer-friendly invoice layouts for customers who prefer hard copies.'
  },
  {
    feature: 'Mobile-Friendly Access',
    description: 'Create, send, and view invoices easily on mobile devices for on-the-go business operations.'
  },
  {
    feature: 'Customizable Invoice Messages',
    description: 'Add personalized notes or instructions to each invoice for better customer communication.'
  }
],

  screenshots: [
    {
      title: 'Sharable Invoice Preview',
      image: sharableInvoice,
      description: 'View of a professional invoice ready to be shared via link or download'
    },
    // {
    //   title: 'Mobile Invoice Sharing',
    //   image: 'https://images.unsplash.com/photo-1556742400-b5ec50a9f345?auto=format&fit=crop&w=800',
    //   description: 'Mobile-friendly interface for sending invoices instantly to clients on the go'
    // },
    // {
    //   title: 'Invoice Customization Options',
    //   image: 'https://images.unsplash.com/photo-1608494067040-50e3b2aa6f4c?auto=format&fit=crop&w=800',
    //   description: 'Add logo, terms, tax, and branding elements to personalize your invoice'
    // }
  ],

  useCases: [
  {
    scenario: 'Faster Billing at Retail Counters',
    description: 'A retailer uses quick digital invoicing to generate and share bills instantly during checkout.',
    result: 'Reduced customer waiting time and improved checkout efficiency'
  },
  {
    scenario: 'Bulk Billing for Wholesale Clients',
    description: 'A wholesaler processes and sends invoices for large client orders in one go using batch invoicing tools.',
    result: 'Saved several hours on bulk billing and improved client satisfaction'
  },
  {
    scenario: 'Instant GST-Compliant Invoicing for Service Providers',
    description: 'A service provider generates and shares GST-compliant invoices on the spot after completing a job.',
    result: 'Faster payment cycles and happier clients thanks to instant billing'
  }
],

  implementation: {
    setupTime: 'Less than 30 minutes',
    trainingRequired: 'Minimal (15–30 mins)',
    integrationComplexity: 'Very Low',
    steps: [
      'Enable invoice sharing from settings',
      'Upload business logo and configure invoice format',
      'Set tax and payment terms',
      'Create and preview a test invoice',
      'Send sample via email or WhatsApp',
      'Start billing real clients instantly'
    ]
  },

  pricing: {
    included: 'Included in all IndiaBills plans',
    additionalCosts: 'None',
    roi: 'Faster payments, reduced admin effort, and improved customer experience with zero cost'
  }
});

export default SharableInvoice;
