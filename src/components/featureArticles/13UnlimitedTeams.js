const UnlimitedTeams = () => ({
  title: 'Unlimited Teams',
  shortDescription: 'Manage teams with flexible access controls',
  category: 'User & Team Management',
  image: 'https://images.unsplash.com/photo-1581090700227-1c72ba1cfb0f?auto=format&fit=crop&w=1200',
  detailedDescription: 'Create and manage multiple teams under one business account. Assign roles, customize access levels, and monitor team activity and performance—all from one centralized platform. Ideal for growing businesses with diverse functions or locations.',

  whatMakesItDifferent: [
    'Create unlimited teams under a single organization',
    'Assign team-specific roles and permissions',
    'Monitor individual and team performance metrics',
    'Team-based access control for modules and data',
    'Supports cross-functional or location-based team setups',
    'Flexible onboarding and deactivation workflows'
  ],

  idealFor: [
    {
      businessType: 'Medium to Large Businesses',
      description: 'Manage multiple departments like sales, support, finance, and operations within one account.',
      benefits: ['Streamline organization structure', 'Boost accountability', 'Enhance interdepartmental collaboration', 'Enable controlled data sharing']
    },
    {
      businessType: 'Franchises',
      description: 'Perfect for managing teams across different branches or franchise locations.',
      benefits: ['Maintain standardized roles', 'Monitor branch performance centrally', 'Ensure operational consistency', 'Assign localized access']
    },
    {
      businessType: 'Sales Teams',
      description: 'Ideal for managing dynamic sales teams with territory-based operations and hierarchy.',
      benefits: ['Track individual targets and goals', 'Assign leads by team', 'Generate team-wise reports', 'Maintain secure access to CRM and billing']
    },
    {
      businessType: 'Customer Support Teams',
      description: 'Structure customer service operations across shifts or channels.',
      benefits: ['Define roles for chat, email, or voice support', 'Monitor team productivity', 'Control ticket visibility and reassignment', 'Track resolution time per team']
    }
  ],

  keyFeatures: [
    {
      feature: 'Unlimited Team Creation',
      description: 'Add as many teams as needed, categorized by department, function, or region.'
    },
    {
      feature: 'Role & Permission Control',
      description: 'Assign roles and set what each team can view, edit, or manage.'
    },
    {
      feature: 'Team Activity Monitoring',
      description: 'Track performance, login patterns, and recent activity per team or user.'
    },
    {
      feature: 'Cross-Team Collaboration',
      description: 'Enable collaboration between teams with customizable visibility settings.'
    },
    {
      feature: 'One-Click Deactivation',
      description: 'Easily disable or reassign users from one team to another with minimal effort.'
    },
    {
      feature: 'Team-Based Reporting',
      description: 'Generate productivity and operational reports by team, time period, or task type.'
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
      scenario: 'Multi-Department Setup',
      description: 'A business uses the feature to segment access for sales, support, and accounts teams.',
      result: 'Improved focus, reduced data clutter, and enhanced internal security'
    },
    {
      scenario: 'Franchise-Level Management',
      description: 'A chain of retail stores sets up a team per location to streamline reporting and access.',
      result: 'Standardized workflows and centralized oversight across branches'
    },
    {
      scenario: 'Sales Team Expansion',
      description: 'A fast-growing startup builds and manages regional sales teams under one platform.',
      result: 'Seamless scalability and improved tracking of sales performance'
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
