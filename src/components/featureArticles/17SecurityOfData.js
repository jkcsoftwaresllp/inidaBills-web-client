const SecurityOfData = () => ({
  title: 'Security of Data',
  shortDescription: 'Ensure the highest level of data security and privacy',
  category: 'Data Protection & Compliance',
  image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=1200',
  detailedDescription: 'Your business data is protected with enterprise-grade security protocols. We use encryption, secure access controls, and regular backups to ensure your data stays private, accurate, and available at all times. Whether you are in retail, healthcare, or finance, your trust is our top priority.',

  whatMakesItDifferent: [
    'End-to-end encryption for data in transit and at rest',
    'Role-based access controls to limit unauthorized entry',
    'Daily automated backups with restore support',
    'Compliance with major industry data protection standards',
    'Activity logs for all critical operations and data access',
    'Built-in protection against data tampering and breaches'
  ],

  idealFor: [
    {
      businessType: 'All Businesses',
      description: 'Every business requires robust protection to ensure continuity and data privacy.',
      benefits: ['Secure customer and transaction data', 'Maintain peace of mind during digital operations', 'Ensure compliance with legal norms', 'Prevent data misuse or leaks']
    },
    {
      businessType: 'Finance & Legal',
      description: 'These sectors handle highly sensitive and confidential records.',
      benefits: ['Meet regulatory compliance (e.g. GST, IT Act)', 'Ensure confidentiality of financial and legal documents', 'Restrict access based on legal roles', 'Enable audit-ready logs']
    },
    {
      businessType: 'Healthcare',
      description: 'Security is vital when dealing with patient and treatment data.',
      benefits: ['Protect patient records', 'Control access to sensitive information', 'Ensure HIPAA-equivalent safety in Indian context', 'Enable secure sharing with stakeholders']
    },
    {
      businessType: 'E-commerce Platforms',
      description: 'Trust and data safety are essential in online transactions and storage.',
      benefits: ['Secure customer addresses and payment info', 'Protect seller-vendor information', 'Enable GDPR/IT compliance', 'Mitigate risks of fraud and chargebacks']
    }
  ],

  keyFeatures: [
    {
      feature: 'Data Encryption',
      description: 'All sensitive data is encrypted using industry-standard AES-256 encryption.'
    },
    {
      feature: 'Role-Based Access Control (RBAC)',
      description: 'Assign access permissions based on user roles to avoid unauthorized exposure.'
    },
    {
      feature: 'Daily Backups',
      description: 'Automated daily backups with rollback capabilities for up to 30 days.'
    },
    {
      feature: 'Audit Logs',
      description: 'Track and review every data access or change, with user and timestamp metadata.'
    },
    {
      feature: 'Two-Factor Authentication (2FA)',
      description: 'Add an extra layer of security for user logins using OTPs or authenticator apps.'
    },
    {
      feature: 'Compliance-Ready Infrastructure',
      description: 'Built to align with ISO 27001, GDPR principles, and Indian IT regulations.'
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
      scenario: 'Legal Firm Secures Client Files',
      description: 'A legal consultancy uses access restrictions and encryption to manage confidential client data.',
      result: 'Zero incidents of data leaks or misuse over 2+ years'
    },
    {
      scenario: 'Retail Chain Implements Role-Based Control',
      description: 'A retailer restricts sensitive billing and reporting data to authorized managers only.',
      result: 'Improved control and traceability over internal operations'
    },
    {
      scenario: 'Healthcare Clinic Protects Patient Records',
      description: 'A multi-branch clinic protects sensitive medical records using encryption and audit logs.',
      result: 'Ensures compliance with digital health standards and builds patient trust'
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
