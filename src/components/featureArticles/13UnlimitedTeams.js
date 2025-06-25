const UnlimitedTeams = () => ({
  title: 'Unlimited Teams',
  shortDescription: 'Manage teams with flexible access controls',
  category: 'User & Team Management',
  image: 'https://images.unsplash.com/photo-1581090700227-1c72ba1cfb0f?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills lets you add unlimited team members, helping you scale without worrying about user limits.',

  whatMakesItDifferent: [
    'No cap on users',
    'Custom access roles',
    'Activity tracking',
    'Team-based reports',
    'Cost-effective scaling',
    'Instant team setup'
  ],

  idealFor: [
    {
      businessType: 'Retail Chains',
      description: 'Manage large staff easily.',
      benefits: ['Add all employees', 'Role-based access', 'Track actions', 'Boost security']
    },
    {
      businessType: 'Wholesalers',
      description: 'Big teams, easy management.',
      benefits: ['User limits removed', 'Assign roles', 'Track work', 'Safer ops']
    },
    {
      businessType: 'Supermarkets',
      description: 'Control large teams smartly.',
      benefits: ['Team reports', 'Track changes', 'Set rights', 'No limits']
    },
    {
      businessType: 'Service Companies',
      description: 'Manage projects with big teams.',
      benefits: ['Unlimited members', 'Track work', 'Assign permissions', 'Project security']
    }
  ],

  keyFeatures: [
  {
    feature: 'Unlimited User Accounts',
    description: 'Add unlimited users to your system without any extra licensing or hidden fees.'
  },
  {
    feature: 'Custom Role Management',
    description: 'Define and manage custom user roles with specific permissions for viewing, editing, or managing different modules.'
  },
  {
    feature: 'Detailed User Activity Logs',
    description: 'Track every user’s login history, actions, and changes for better visibility and control.'
  },
  {
    feature: 'Easy User Setup',
    description: 'Quickly add new users at any time with simple onboarding and role assignment.'
  },
  {
    feature: 'Team Productivity Reports',
    description: 'Generate performance and activity reports to monitor team productivity and task completion rates.'
  },
  {
    feature: 'Granular Access Rights',
    description: 'Set precise data access levels for each user to ensure business data security and privacy.'
  }
],

  screenshots: [
    {
      title: 'Team Management Interface',
      image: 'https://images.unsplash.com/photo-1581090700227-1c72ba1cfb0f?auto=format&fit=crop&w=800',
      description: 'Easily create, organize, and assign members to teams with specific access controls'
    },
    {
      title: 'Role & Permission Setup',
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800',
      description: 'Set detailed access permissions for each team or role within your organization'
    },
    {
      title: 'Team-Based Analytics',
      image: 'https://images.unsplash.com/photo-1620200423722-a3e7b0d2f149?auto=format&fit=crop&w=800',
      description: 'Monitor productivity, task completion, and performance per team with real-time insights'
    }
  ],

  useCases: [
  {
    scenario: 'Fast Staff Onboarding for Retail Chains',
    description: 'A retail chain quickly adds new employees to the system with predefined roles and permissions.',
    result: 'Zero onboarding delays and immediate system access for new staff'
  },
  {
    scenario: 'Scalable Team Management for Wholesalers',
    description: 'A wholesaler expands its team to handle business growth without worrying about extra user licensing costs.',
    result: 'Seamless team scaling with no additional software expenses'
  },
  {
    scenario: 'Team Activity Tracking for Service Providers',
    description: 'A service company monitors user activity and task completion rates to evaluate team productivity.',
    result: 'Improved team output and better performance visibility'
  }
],

  implementation: {
    setupTime: '1–2 hours',
    trainingRequired: 'Minimal (1 hour)',
    integrationComplexity: 'Low',
    steps: [
      'Enable Team Management from settings',
      'Define departments or regions as team groups',
      'Assign users to respective teams and roles',
      'Set up permissions and access rules',
      'Monitor team activity and reports',
      'Make adjustments as teams grow or shift'
    ]
  },

  pricing: {
    included: 'Included in all IndiaBills Business & Enterprise plans',
    additionalCosts: 'None',
    roi: 'Saves hours in access control, improves collaboration, and scales effortlessly as your team grows'
  }
});

export default UnlimitedTeams;
