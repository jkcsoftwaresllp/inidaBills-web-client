const SecurityOfData = () => ({
  title: 'Security of Data',
  shortDescription: 'Ensure the highest level of data security and privacy',
  category: 'Data Protection & Compliance',
  image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills ensures that your business data is fully protected with strong security measures, so your records stay safe.',

  whatMakesItDifferent: [
    'Encryption',
    'User access control',
    'Secure backups',
    'Cloud safety',
    'Auto-logout',
    'Audit trails'
  ],

  idealFor: [
    {
      businessType: 'Retail Stores',
      description: 'Protect customer info.',
      benefits: ['Data safety', 'Prevent misuse', 'Secure backups', 'Track actions']
    },
    {
      businessType: 'Wholesalers',
      description: 'Keep records safe.',
      benefits: ['Safer orders', 'Protect supplier data', 'User controls', 'Audit-ready']
    },
    {
      businessType: 'Pharmacies',
      description: 'Secure sensitive info.',
      benefits: ['Protect patient data', 'Safer stock logs', 'Audit help', 'Data backup']
    },
    {
      businessType: 'Supermarkets',
      description: 'Secure large data.',
      benefits: ['Protect transactions', 'Safer records', 'Prevent errors', 'Secure sharing']
    }
  ],

  keyFeatures: [
  {
    feature: 'End-to-End Data Encryption',
    description: 'All sensitive business and customer data is protected using AES-256 level encryption both at rest and in transit.'
  },
  {
    feature: 'User Access Controls',
    description: 'Define role-based permissions to ensure only authorized users can view or modify sensitive information.'
  },
  {
    feature: 'Automated Data Backups',
    description: 'Daily cloud backups ensure your data is safe, recoverable, and protected from accidental loss.'
  },
  {
    feature: 'Cloud Infrastructure Security',
    description: 'Hosted on secure, industry-certified cloud platforms with continuous monitoring and protection against cyber threats.'
  },
  {
    feature: 'Auto Logout for Idle Sessions',
    description: 'Prevent unauthorized system access by automatically logging out inactive users after a defined period.'
  },
  {
    feature: 'Full Audit Trails',
    description: 'Monitor who made what change and when with detailed user activity logs for complete accountability.'
  }
],

  screenshots: [
    {
      title: 'Access Control Settings',
      image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800',
      description: 'Configure and manage permissions based on user roles and modules'
    },
    {
      title: 'Audit Trail Logs',
      image: 'https://images.unsplash.com/photo-1580910051070-313b0e445484?auto=format&fit=crop&w=800',
      description: 'Monitor who accessed what, when, and from where—ensuring complete traceability'
    },
    {
      title: 'Backup & Recovery Options',
      image: 'https://images.unsplash.com/photo-1611175694983-a6c4c3d5ef67?auto=format&fit=crop&w=800',
      description: 'Easily access and manage automated backups to restore your data anytime'
    }
  ],

  useCases: [
  {
    scenario: 'Retailer Safeguards Customer Data',
    description: 'A retail business implements encryption and role-based access to protect customer billing and contact information.',
    result: 'Achieved zero data breaches while maintaining customer trust'
  },
  {
    scenario: 'Wholesaler Secures Order Information',
    description: 'A wholesale distributor applies user access controls and automated backups to protect sensitive order and payment data.',
    result: 'Maintained 100% data integrity with zero loss during system upgrades and audits'
  },
  {
    scenario: 'Pharmacy Protects Medical Records',
    description: 'A pharmacy uses encryption and audit logs to safeguard patient prescription histories and billing details.',
    result: 'Prevented data leaks and ensured full compliance with healthcare data protection norms'
  }
],

  implementation: {
    setupTime: 'Instant (pre-configured)',
    trainingRequired: 'None to Minimal',
    integrationComplexity: 'None',
    steps: [
      'Enable user roles and permissions from the admin panel',
      'Configure 2FA for all users (optional)',
      'Review and enable automatic backup schedule',
      'Monitor logs and audit activity via the security dashboard',
      'Update access rules as team structure changes',
      'Rest assured with built-in security compliance'
    ]
  },

  pricing: {
    included: 'Included in all IndiaBills plans',
    additionalCosts: 'None',
    roi: 'Protects against potential data loss, financial penalties, and reputation damage—immeasurable long-term ROI'
  }
});

export default SecurityOfData;
