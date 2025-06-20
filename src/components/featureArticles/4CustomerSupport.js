const CustomerSupport = () => ({
  title: 'Dedicated Customer Support',
  shortDescription: 'Reliable customer support whenever you need it',
  category: 'Support & Service',
  image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200',
  detailedDescription: 'Experience unparalleled customer support with our dedicated team of experts. Get help when you need it through multiple channels, comprehensive resources, and personalized assistance to ensure your business runs smoothly.',
  
  whatMakesItDifferent: [
    '24/7 availability through multiple support channels',
    'Dedicated account managers for enterprise clients',
    'Multilingual support in Hindi, English, and regional languages',
    'Video call support for complex technical issues',
    'Proactive monitoring and issue prevention',
    'Comprehensive knowledge base and video tutorials'
  ],

  idealFor: [
    {
      businessType: 'All Business Types',
      description: 'Every business needs reliable support to ensure smooth operations and quick resolution of any issues that may arise.',
      benefits: ['Minimal downtime', 'Quick issue resolution', 'Expert guidance', 'Peace of mind']
    },
    {
      businessType: 'New Technology Adopters',
      description: 'Perfect for businesses new to digital billing systems who need extra guidance and support during the transition.',
      benefits: ['Smooth onboarding', 'Comprehensive training', 'Confidence building', 'Reduced learning curve']
    },
    {
      businessType: 'Growing Businesses',
      description: 'Ideal for rapidly growing businesses that need scalable support as they expand their operations.',
      benefits: ['Scalable support solutions', 'Growth guidance', 'System optimization', 'Strategic advice']
    },
    {
      businessType: 'Mission-Critical Operations',
      description: 'Essential for businesses where system downtime can significantly impact operations and revenue.',
      benefits: ['Priority support', 'Immediate response', 'Preventive maintenance', 'Business continuity']
    }
  ],

  keyFeatures: [
    {
      feature: '24/7 Multi-Channel Support',
      description: 'Round-the-clock support through phone, email, chat, and video calls in multiple languages.'
    },
    {
      feature: 'Dedicated Account Management',
      description: 'Personal account managers for enterprise clients providing proactive support and strategic guidance.'
    },
    {
      feature: 'Comprehensive Knowledge Base',
      description: 'Extensive library of articles, tutorials, and FAQs covering all aspects of the system.'
    },
    {
      feature: 'Video Tutorial Library',
      description: 'Step-by-step video guides for all features and common use cases in multiple languages.'
    },
    {
      feature: 'Remote Assistance',
      description: 'Screen sharing and remote desktop support for complex technical issues and training.'
    },
    {
      feature: 'Proactive Monitoring',
      description: 'System health monitoring with proactive alerts and preventive maintenance.'
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
      scenario: 'Emergency System Recovery',
      description: 'A manufacturing company experiences a critical system issue during peak production. Our support team provides immediate remote assistance to restore operations.',
      result: 'System restored within 15 minutes, preventing potential loss of ₹2 lakhs in production delays'
    },
    {
      scenario: 'New User Onboarding',
      description: 'A traditional retail business transitioning to digital billing receives comprehensive training and ongoing support for smooth adoption.',
      result: 'Complete system adoption achieved in 3 days instead of the typical 2-3 weeks'
    },
    {
      scenario: 'Scaling Support',
      description: 'A growing e-commerce business receives strategic guidance on system optimization as they expand from 100 to 1000 daily orders.',
      result: 'Seamless scaling with 99.9% system uptime during 10x growth period'
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