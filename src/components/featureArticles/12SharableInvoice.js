const SharableInvoice = () => ({
  title: 'Sharable Invoice',
  shortDescription: 'Create invoices & share instantly with customers',
  category: 'Billing & Payments',
  image: 'https://images.unsplash.com/photo-1581092588429-8b6b9c03a0ba?auto=format&fit=crop&w=1200',
  detailedDescription: 'Generate professional invoices and share them instantly via email, WhatsApp, or downloadable links. Streamline your billing process, reduce delays, and improve your payment turnaround with modern, mobile-friendly invoicing.',

  whatMakesItDifferent: [
    'One-click sharing via email, WhatsApp, or direct link',
    'Customizable invoice templates with branding support',
    'Mobile-friendly invoice previews for customer convenience',
    'Auto-generated PDFs for record-keeping and sharing',
    'Real-time invoice view status tracking',
    'Supports multiple tax formats, payment terms, and currency types'
  ],

  idealFor: [
    {
      businessType: 'Freelancers',
      description: 'Ideal for individuals who need to send polished, professional invoices quickly to clients.',
      benefits: ['Impress clients with well-formatted invoices', 'Get paid faster with instant delivery', 'Track when invoices are opened', 'Stay organized without manual paperwork']
    },
    {
      businessType: 'Service Providers',
      description: 'Useful for consultants, repair businesses, or agencies needing fast invoicing.',
      benefits: ['Generate and send bills on-site or remotely', 'Include service descriptions and taxes', 'Reduce back-office workload', 'Enable quicker client follow-ups']
    },
    {
      businessType: 'Retailers',
      description: 'Retail shops can use sharable invoices for walk-in or remote orders with digital billing.',
      benefits: ['Reduce paper usage and printing costs', 'Offer instant bills for home delivery orders', 'Maintain digital records for compliance', 'Boost customer convenience']
    },
    {
      businessType: 'Online Sellers',
      description: 'Helps sellers on marketplaces or social platforms share branded invoices instantly.',
      benefits: ['Maintain professional image', 'Simplify dispute resolution', 'Enable payment reminders via link', 'Track partial or full payments']
    }
  ],

  keyFeatures: [
    {
      feature: 'Instant Invoice Sharing',
      description: 'Send invoices through WhatsApp, email, or link in one click—no downloads needed.'
    },
    {
      feature: 'Custom Branding',
      description: 'Add logo, business name, and color schemes to match your brand identity.'
    },
    {
      feature: 'Multi-Device Support',
      description: 'View and share invoices from any device, desktop or mobile.'
    },
    {
      feature: 'PDF Generation & Download',
      description: 'Auto-generate downloadable PDF invoices with embedded tax and payment details.'
    },
    {
      feature: 'Invoice View Tracking',
      description: 'Know exactly when the customer has viewed the invoice.'
    },
    {
      feature: 'Tax & Discount Support',
      description: 'Apply GST, VAT, discounts, or rounding with easy toggles.'
    }
  ],

  screenshots: [
    {
      title: 'Sharable Invoice Preview',
      image: 'https://images.unsplash.com/photo-1581092588429-8b6b9c03a0ba?auto=format&fit=crop&w=800',
      description: 'View of a professional invoice ready to be shared via link or download'
    },
    {
      title: 'Mobile Invoice Sharing',
      image: 'https://images.unsplash.com/photo-1556742400-b5ec50a9f345?auto=format&fit=crop&w=800',
      description: 'Mobile-friendly interface for sending invoices instantly to clients on the go'
    },
    {
      title: 'Invoice Customization Options',
      image: 'https://images.unsplash.com/photo-1608494067040-50e3b2aa6f4c?auto=format&fit=crop&w=800',
      description: 'Add logo, terms, tax, and branding elements to personalize your invoice'
    }
  ],

  useCases: [
    {
      scenario: 'Freelancer Sends Instant Bill',
      description: 'A freelance designer completes a project and sends the invoice via WhatsApp instantly.',
      result: 'Receives payment within 2 hours, with client impressed by the professional format'
    },
    {
      scenario: 'Retailer Sends Home Delivery Invoice',
      description: 'A retail store sends digital invoices for phone orders delivered to customers.',
      result: 'Faster order confirmations and reduced paperwork, with 100% invoice delivery success'
    },
    {
      scenario: 'Service-Based Business On-Site Billing',
      description: 'An appliance repair company creates and shares invoices directly from mobile devices.',
      result: 'Cuts down end-of-day reconciliation time by 50%'
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
