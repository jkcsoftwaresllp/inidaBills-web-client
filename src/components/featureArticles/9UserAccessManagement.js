const UserAccessManagement = () => ({
  title: 'User Access Management',
  shortDescription: 'Control access with customizable roles and permissions',
  category: 'Security & Administration',
  image: 'https://images.unsplash.com/photo-1614849963646-a54ce1d63bfb?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills helps you control who can see or do what, making your system safer and easier to manage.',

  whatMakesItDifferent: [
    'Custom roles',
    'Limit data access',
    'Track user actions',
    'Easy to update',
    'Works for teams',
    'Auto log-out'
  ],

  idealFor: [
    {
      businessType: 'Retail Stores',
      description: 'Keep data secure.',
      benefits: ['Protects sales info', 'Tracks staff work', 'Prevents misuse', 'Builds trust']
    },
    {
      businessType: 'Wholesalers',
      description: 'Manage many users easily.',
      benefits: ['Custom roles', 'Track orders by user', 'Prevent errors', 'Secure system']
    },
    {
      businessType: 'Pharmacies',
      description: 'Control sensitive data.',
      benefits: ['Protects stock info', 'User-level control', 'Stops wrong edits', 'Safer records']
    },
    {
      businessType: 'Supermarkets',
      description: 'Large team access made safe.',
      benefits: ['Role-based access', 'Limits mistakes', 'Tracks changes', 'Safer data']
    }
  ],

  keyFeatures: [
  {
    feature: 'Custom User Roles',
    description: 'Define user roles like Admin, Manager, or Salesperson with fully customizable permissions for each role.'
  },
  {
    feature: 'Granular Data Access Control',
    description: 'Control who can view, edit, delete, or export data across different modules for enhanced business security.'
  },
  {
    feature: 'Comprehensive Activity Logs',
    description: 'Monitor all user actions with detailed logs, tracking changes, logins, and sensitive operations.'
  },
  {
    feature: 'Automatic User Lockout',
    description: 'Add an extra layer of protection with auto-lockout features after multiple failed login attempts or suspicious activity.'
  },
  {
    feature: 'Multi-User Team Support',
    description: 'Easily manage access for large teams with support for unlimited user accounts and role assignments.'
  },
  {
    feature: 'Flexible Role Management',
    description: 'Quickly create, edit, or update user roles as your business structure or team responsibilities change.'
  }
],

  screenshots: [
    {
      title: 'Role Management Interface',
      image: 'https://images.unsplash.com/photo-1614849963646-a54ce1d63bfb?auto=format&fit=crop&w=800',
      description: 'Create and manage roles with detailed permissions for each module'
    },
    {
      title: 'User Permission Setup',
      image: 'https://images.unsplash.com/photo-1624378439575-5b8b6c96c695?auto=format&fit=crop&w=800',
      description: 'Assign and customize access levels for each user based on department or store'
    },
    {
      title: 'Activity Logs and Audit Trail',
      image: 'https://images.unsplash.com/photo-1581091012184-7a4c2b2b5a5c?auto=format&fit=crop&w=800',
      description: 'Track actions performed by users across the platform for accountability and security'
    }
  ],

  useCases: [
  {
    scenario: 'Limiting Cashier Access in Retail Stores',
    description: 'A retail shop restricts cashier permissions to prevent them from editing prices or issuing unauthorized discounts.',
    result: 'Reduced risk of fraud and improved control over billing operations'
  },
  {
    scenario: 'Tracking Data Changes in Wholesale Operations',
    description: 'A wholesaler enables activity logs to monitor who makes changes to stock and sales data across the system.',
    result: 'Improved data security and accountability through clear audit trails'
  },
  {
    scenario: 'Controlled Stock Management in Pharmacies',
    description: 'A pharmacy restricts stock data editing rights to authorized personnel to prevent inventory mismatches and manual errors.',
    result: 'Minimized stock handling errors and improved accuracy in inventory records'
  }
],

  implementation: {
    setupTime: '1–2 hours',
    trainingRequired: 'Minimal (30 mins)',
    integrationComplexity: 'Low',
    steps: [
      'Define business roles and permission sets',
      'Assign roles to existing and new users',
      'Configure access by location, module, or feature',
      'Test user access across departments and stores',
      'Enable activity logging and monitoring',
      'Train managers to manage access autonomously'
    ]
  },

  pricing: {
    included: 'Included in all plans',
    additionalCosts: 'None',
    roi: 'Improved data protection, operational control, and staff accountability with minimal administrative overhead'
  }
});

export default UserAccessManagement;
