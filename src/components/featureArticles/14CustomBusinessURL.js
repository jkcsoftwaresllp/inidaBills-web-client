import customURL from '../../featuresScreenshot/custom_url.png';

const CustomBusinessURL = () => ({
  title: 'Custom Business URL',
  shortDescription: 'Get a custom business URL for a personalized online presence',
  category: 'Branding & Accessibility',
  image: 'https://images.unsplash.com/photo-1581091870621-3b5dd89f4d30?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills gives you a custom URL for sharing invoices and records, building trust with your brand.',

  whatMakesItDifferent: [
    'Branded URL',
    'Secure sharing',
    'Easy recall',
    'Works on all devices',
    'No tech setup',
    'Boosts brand trust'
  ],

  idealFor: [
    {
      businessType: 'Retail Stores',
      description: 'Share bills with style.',
      benefits: ['Professional image', 'Easy link', 'Safer share', 'Better trust']
    },
    {
      businessType: 'Wholesalers',
      description: 'Share bulk records fast.',
      benefits: ['Secure share', 'Fast send', 'Branded link', 'Bulk ready']
    },
    {
      businessType: 'Pharmacies',
      description: 'Trusted records sharing.',
      benefits: ['Secure bills', 'Easy client access', 'Boosts image', 'GST-ready']
    },
    {
      businessType: 'Service Firms',
      description: 'Share work records smartly.',
      benefits: ['Professional URL', 'Quick share', 'Secure data', 'Builds brand']
    }
  ],

  keyFeatures: [
  {
    feature: 'Custom Branded URL',
    description: 'Create a personalized link like yourbusiness.indiabills.com to reinforce your brand identity in every customer interaction.'
  },
  {
    feature: 'Secure Link Sharing',
    description: 'All links are HTTPS-encrypted, ensuring safe and private delivery of invoices, receipts, or documents.'
  },
  {
    feature: 'Instant Activation',
    description: 'No setup required—your custom URL is ready to use within minutes, with zero technical effort.'
  },
  {
    feature: 'Mobile-Friendly Access',
    description: 'All links open smoothly on any device—mobile, tablet, or desktop—for customer convenience.'
  },
  {
    feature: 'Enhanced Client Trust',
    description: 'A branded and secure link improves your professional image and builds trust with customers.'
  },
  {
    feature: 'Multi-Channel Compatibility',
    description: 'Easily share your custom URL across WhatsApp, Email, SMS, or social media platforms without compatibility issues.'
  }
],

  screenshots: [
    {
      title: 'Custom URL Activation',
      image: customURL,
      description: 'Activate your branded subdomain and start using it across your business touchpoints'
    },
    // {
    //   title: 'Public Invoice Page',
    //   image: 'https://images.unsplash.com/photo-1580910051070-313b0e445484?auto=format&fit=crop&w=800',
    //   description: 'Invoices or catalogs opened via your branded link for client access'
    // },
    // {
    //   title: 'QR Code Linking',
    //   image: 'https://images.unsplash.com/photo-1607082349566-cf5afedbeb5b?auto=format&fit=crop&w=800',
    //   description: 'Share your business URL as a QR code on packaging, receipts, or promotions'
    // }
  ],

  useCases: [
  {
    scenario: 'Professional Invoice Sharing for Retailers',
    description: 'A retailer sends digital invoices using a custom branded link, giving customers a professional and trustworthy experience.',
    result: 'Improved brand image and faster payment turnaround'
  },
  {
    scenario: 'Branded Document Delivery for Wholesalers',
    description: 'A wholesaler shares order records and transaction summaries through secure, branded URLs.',
    result: 'Stronger business reputation and improved client confidence in communication'
  },
  {
    scenario: 'Trust-Building Communication for Service Providers',
    description: 'A service company uses branded links for sending GST-compliant invoices and service reports to clients.',
    result: 'Increased customer trust and better engagement with shared documents'
  }
],

  implementation: {
    setupTime: 'Under 10 minutes',
    trainingRequired: 'None',
    integrationComplexity: 'Very Low',
    steps: [
      'Choose your subdomain (e.g., yourbrand.indiabills.com)',
      'Activate and verify instantly from your dashboard',
      'Start using it in invoice sharing, links, and catalogs',
      'Embed the URL in emails, signatures, and social media',
      'Generate and print QR codes if needed',
      'Track link access in dashboard'
    ]
  },

  pricing: {
    included: 'Available in Business & Enterprise plans',
    additionalCosts: 'None',
    roi: 'Instantly boosts brand presence and customer trust with zero maintenance cost'
  }
});

export default CustomBusinessURL;
