const DiscountOffers = () => ({
  title: 'Discount & Offers',
  shortDescription: 'Easily apply discounts and manage special offers',
  category: 'Sales & Promotions',
  image: 'https://images.unsplash.com/photo-1549921296-3a6b6363f4f1?auto=format&fit=crop&w=1200',
  detailedDescription: 'Run promotional campaigns effortlessly by configuring discounts and limited-time offers. With flexible rules, real-time application at checkout, and detailed analytics, you can boost sales while staying in control of your margins.',

  whatMakesItDifferent: [
    'Flexible discount rules (percentage, flat rate, BOGO, etc.)',
    'Schedule time-bound promotions and festive campaigns',
    'Apply offers by product, category, customer group, or cart value',
    'Auto-apply discounts at checkout or through coupons',
    'In-depth performance tracking of each campaign',
    'Multi-channel support—POS, online store, and mobile app'
  ],

  idealFor: [
    {
      businessType: 'Retail',
      description: 'Perfect for in-store promotions, seasonal sales, and customer-specific discounts.',
      benefits: ['Increase walk-in sales', 'Clear old inventory', 'Run flash sales with ease', 'Attract returning customers']
    },
    {
      businessType: 'Online businesses',
      description: 'Ideal for e-commerce platforms looking to run time-sensitive offers or loyalty promotions.',
      benefits: ['Boost cart conversions', 'Enable discount codes and auto-applied promos', 'Target specific customer segments', 'Integrate with checkout and email systems']
    }
  ],

  keyFeatures: [
    {
      feature: 'Rule-Based Discount Engine',
      description: 'Create and manage various types of offers like flat discounts, percentages, or conditional deals.'
    },
    {
      feature: 'Time-Sensitive Promotions',
      description: 'Schedule start and end dates for limited-time deals automatically.'
    },
    {
      feature: 'Coupon Code Management',
      description: 'Generate and manage unique or reusable coupon codes with usage limits.'
    },
    {
      feature: 'Customer Segmentation',
      description: 'Target offers based on customer type, purchase history, or loyalty tier.'
    },
    {
      feature: 'Real-Time Checkout Integration',
      description: 'Seamlessly apply discounts across POS and online store interfaces in real-time.'
    },
    {
      feature: 'Offer Analytics',
      description: 'Track offer performance metrics like redemption rate, revenue impact, and best-selling discounted items.'
    }
  ],

  screenshots: [
    {
      title: 'Discount Dashboard',
      image: 'https://images.unsplash.com/photo-1549921296-3a6b6363f4f1?auto=format&fit=crop&w=800',
      description: 'Centralized dashboard to view, manage, and analyze all ongoing promotions'
    },
    {
      title: 'Coupon Code Setup',
      image: 'https://images.unsplash.com/photo-1596803245964-0449b9b5b4aa?auto=format&fit=crop&w=800',
      description: 'Create and assign discount codes with flexible parameters and usage rules'
    },
    {
      title: 'Time-Based Offer Configuration',
      image: 'https://images.unsplash.com/photo-1583912268184-5b8c509194bb?auto=format&fit=crop&w=800',
      description: 'Configure start/end times and preview how offers will appear during the promotional period'
    }
  ],

  useCases: [
    {
      scenario: 'Festive Season Sale',
      description: 'A retail store launches a 20% discount on clothing during the festive season.',
      result: '45% increase in foot traffic and 30% growth in total revenue during campaign'
    },
    {
      scenario: 'First-Time Buyer Discount',
      description: 'An online store gives ₹100 off to first-time users using a coupon code.',
      result: '25% increase in new customer conversions and higher repeat purchase rate'
    },
    {
      scenario: 'Buy One Get One (BOGO)',
      description: 'A beauty brand offers BOGO deals on select items to clear out expiring stock.',
      result: 'Reduced unsold inventory by 70% in 2 weeks'
    }
  ],

  implementation: {
    setupTime: '1-2 hours',
    trainingRequired: 'Minimal (under 1 hour)',
    integrationComplexity: 'Low',
    steps: [
      'Define discount rules or create coupon codes',
      'Set target products, categories, or customer groups',
      'Schedule start and end times for campaigns',
      'Test and preview discount application across platforms',
      'Launch promotion and monitor performance in real-time',
      'Analyze results and refine for future campaigns'
    ]
  },

  pricing: {
    included: 'Included in all standard plans',
    additionalCosts: 'None',
    roi: '150–300% ROI through increased conversions, faster inventory turnover, and stronger customer loyalty'
  }
});

export default DiscountOffers;
