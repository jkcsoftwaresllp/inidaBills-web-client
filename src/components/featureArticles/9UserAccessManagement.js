const UserAccessManagement = () => ({
  title: 'User Access Management',
  shortDescription: 'Control access with customizable roles and permissions',
  category: 'Security & Administration',
  image: 'https://images.unsplash.com/photo-1614849963646-a54ce1d63bfb?auto=format&fit=crop&w=1200',
  detailedDescription: 'Define roles and assign specific permissions to team members to ensure data security and operational control. With role-based access, your team can stay productive while maintaining compliance and confidentiality across departments or locations.',

  whatMakesItDifferent: [
    'Create unlimited custom roles based on job responsibilities',
    'Assign granular permissions per module or action',
    'Restrict visibility by location, department, or user level',
    'Enable audit trails to track user activity and access logs',
    'Quickly onboard or offboard team members with role templates',
    'Supports multi-branch and franchise permission models'
  ],

  idealFor: [
    {
      businessType: 'Organizations with multiple users',
      description: 'Perfect for businesses with departments or teams needing controlled access to sensitive data.',
      benefits: ['Secure business-critical information', 'Limit human errors by access control', 'Maintain transparency and traceability', 'Boost accountability among staff']
    },
    {
      businessType: 'Retail chains',
      description: 'Ideal for retail stores needing different permissions for cashiers, inventory managers, and supervisors.',
      benefits: ['Prevent unauthorized edits or deletions', 'Customize access based on responsibilities', 'Enable regional access controls', 'Streamline store operations safely']
    },
    {
      businessType: 'Franchises',
      description: 'Franchise businesses can define permissions centrally and assign them across branches.',
      benefits: ['Maintain brand control across units', 'Standardize data access models', 'Reduce misuse of data or resources', 'Enhance compliance and oversight']
    }
  ],

  keyFeatures: [
    {
      feature: 'Role-Based Access Control',
      description: 'Create roles like Admin, Manager, Staff, etc., each with a specific set of permissions.'
    },
    {
      feature: 'Permission Granularity',
      description: 'Allow or restrict actions like view, edit, delete, export, or approve within each module.'
    },
    {
      feature: 'Activity Logs',
      description: 'Track who accessed or modified what and when through secure audit logs.'
    },
    {
      feature: 'Location-Based Permissions',
      description: 'Set location-specific access to users managing particular stores or warehouses.'
    },
    {
      feature: 'Quick Onboarding Templates',
      description: 'Use predefined templates to assign roles quickly during user onboarding.'
    },
    {
      feature: 'Access Expiry & Deactivation',
      description: 'Automatically revoke access for inactive users or temporary staff after a defined period.'
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
      scenario: 'Department-Level Access',
      description: 'A company restricts HR and Finance data access to their respective departments using role-based permissions.',
      result: 'Zero data leaks and full compliance with internal privacy policies'
    },
    {
      scenario: 'Branch-Level Control',
      description: 'A retail chain gives store managers access only to their own store’s data and operations.',
      result: '80% fewer permission-related support requests and faster issue resolution'
    },
    {
      scenario: 'Franchise Oversight',
      description: 'A franchise owner sets up read-only access for auditors and full access for branch leads.',
      result: 'Improved transparency and simplified auditing across multiple locations'
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
