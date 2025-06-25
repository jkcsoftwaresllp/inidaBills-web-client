const CustomerSupport = () => ({
  title: 'Dedicated Customer Support',
  shortDescription: 'Reliable customer support whenever you need it',
  category: 'Support & Service',
  image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills provides Dedicated Customer Support to ensure that businesses get timely help whenever needed. Our team is always ready to assist so you can focus on growing your business without technical worries.',
  
  whatMakesItDifferent: [
    '24/7 availability',
    'Multiple channels',
    'Quick resolutions',
    'Specialized agents',
    'Proactive help',
    'Easy documentation'
  ],

  idealFor: [
    {
      businessType: 'Retail Shops',
      description: 'Helps with quick setup and problem-solving.',
      benefits: ['Fast issue resolution', 'Easy contact options', 'Reduces downtime', 'Boosts confidence']
    },
    {
      businessType: 'Wholesalers',
      description: 'Handles large system queries efficiently.',
      benefits: ['Priority support', 'System guidance', 'Prevents order delays', 'Saves time']
    },
    {
      businessType: 'Pharmacies',
      description: 'Keeps critical systems running smoothly.',
      benefits: ['24/7 support', 'Compliance assistance', 'Quick fixes', 'Secure guidance']
    },
    {
      businessType: 'Supermarkets',
      description: 'Assists with big data and transactions.',
      benefits: ['Supports complex queries', 'Helps with reports', 'Speeds up troubleshooting', 'Reliable contact']
    }
  ],

  keyFeatures: [
  {
    feature: '24/7 Customer Support',
    description: 'Always-on assistance with round-the-clock availability to address customer queries and issues anytime.'
  },
  {
    feature: 'Industry-Trained Support Team',
    description: 'Expert agents with deep industry knowledge to provide accurate and relevant solutions quickly.'
  },
  {
    feature: 'Multi-Channel Support Options',
    description: 'Accessible support through chat, email, and phone to suit different customer preferences.'
  },
  {
    feature: 'Self-Service Knowledge Base',
    description: 'Comprehensive collection of guides, FAQs, and troubleshooting articles for quick self-help.'
  },
  {
    feature: 'Proactive Issue Alerts',
    description: 'Automated notifications that alert users about potential issues before they escalate.'
  },
  {
    feature: 'Efficient Ticketing System',
    description: 'Track support requests easily with a streamlined ticket system that ensures timely updates and resolutions.'
  }
],

  screenshots: [
    {
      title: 'Support Dashboard',
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800',
      description: 'Integrated support dashboard with ticket tracking and knowledge base access'
    },
    {
      title: 'Live Chat Interface',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800',
      description: 'Real-time chat support interface with file sharing and screen sharing capabilities'
    },
    {
      title: 'Video Tutorial Portal',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800',
      description: 'Comprehensive video tutorial library organized by topics and difficulty levels'
    }
  ],

  useCases: [
  {
    scenario: 'Quick Resolution of Billing Issues',
    description: 'A retailer faces a billing system error during peak hours. The support team quickly troubleshoots and resolves the issue, preventing checkout delays.',
    result: 'Issue resolved within minutes, helping avoid lost sales and maintain customer trust'
  },
  {
    scenario: 'Urgent Stock Query Handling',
    description: 'A wholesaler needs immediate stock availability information for a large order. The support team provides real-time data and guidance to fulfill the order on time.',
    result: 'Order processed and shipped on schedule, securing a key customer relationship'
  },
  {
    scenario: 'GST Filing Assistance for Compliance',
    description: 'A pharmacy seeks help with GST filing. The support team provides step-by-step guidance to ensure accurate reporting and timely submission.',
    result: 'Avoided late filing penalties and ensured smooth tax compliance'
  }
],

  implementation: {
    setupTime: 'Immediate',
    trainingRequired: 'None (support team provides training)',
    integrationComplexity: 'None',
    steps: [
      'Support account setup and contact information verification',
      'Preferred communication channel selection',
      'Support tier assignment based on business needs',
      'Introduction to support resources and knowledge base',
      'Emergency contact procedure setup',
      'Feedback and satisfaction tracking setup'
    ]
  },

  pricing: {
    included: 'Basic support included in all plans',
    additionalCosts: 'Premium support tiers available for enterprise clients',
    roi: 'Reduces system downtime by 95% and increases user productivity by 40% through faster issue resolution'
  }
});

export default CustomerSupport;