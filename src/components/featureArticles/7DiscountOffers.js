const DiscountOffers = () => ({
  title: 'Discount & Offers',
  shortDescription: 'Easily apply discounts and manage special offers',
  category: 'Sales & Promotions',
  image: 'https://images.unsplash.com/photo-1549921296-3a6b6363f4f1?auto=format&fit=crop&w=1200',
  detailedDescription: 'IndiaBills lets you apply discounts and create special offers directly in your store section, helping attract customers and boost sales without manual effort',

  whatMakesItDifferent: [
    'Flexible discount rules',
    'Store-wide or item-specific',
    'Combo offers',
    'Auto-apply at checkout',
    'Time-limited deals',
    'Works with GST'
  ],

  idealFor: [
    {
      businessType: 'Retail Shops',
      description: 'Encourage repeat buyers.',
      benefits: ['Easy to run offers', 'Boosts footfall', 'Clears stock', 'Builds loyalty']
    },
    {
      businessType: 'Supermarkets',
      description: 'Smooth festive discounts.',
      benefits: ['Applies at checkout', 'Simple combo deals', 'Handles volume', 'Faster billing']
    },
    {
      businessType: 'Wholesalers',
      description: 'Supports bulk order offers.',
      benefits: ['Auto bulk discounts', 'Quick order processing', 'Builds client trust', 'Improves sales']
    },
    {
      businessType: 'Electronics Stores',
      description: 'High-ticket item deals.',
      benefits: ['Big item discount control', 'Handles EMI offers', 'Correct GST', 'Builds brand trust']
    }
  ],

  keyFeatures: [
  {
    feature: 'Flexible Discount Types',
    description: 'Easily set up flat-rate or percentage-based discounts to suit different promotional strategies.'
  },
  {
    feature: 'Combo Deal Management',
    description: 'Create bundled offers by combining multiple products into a single discounted package.'
  },
  {
    feature: 'Time-Bound Promotions',
    description: 'Schedule offers with specific start and end dates to run limited-time deals automatically.'
  },
  {
    feature: 'Auto-Apply Discount Rules',
    description: 'Define rule-based conditions for discounts to apply automatically at checkout without manual intervention.'
  },
  {
    feature: 'GST-Compatible Discounts',
    description: 'Ensure all discounts are accurately reflected in GST calculations for hassle-free tax compliance.'
  },
  {
    feature: 'Offer Performance Reporting',
    description: 'Generate detailed reports to analyze the success of promotional campaigns and track sales impact.'
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
    scenario: 'Clearing Old Stock with Targeted Offers',
    description: 'A retail shop runs limited-time discounts on older inventory to move stock quickly and free up shelf space.',
    result: 'Faster clearance of slow-moving items and improved cash flow'
  },
  {
    scenario: 'Bulk Deal Promotions for Wholesalers',
    description: 'A wholesaler offers special bulk purchase discounts to incentivize larger order volumes from retailers.',
    result: 'Increased sales volume and stronger relationships with key customers'
  },
  {
    scenario: 'Festival Discount Campaign for Supermarkets',
    description: 'A supermarket runs a festival-themed discount event, offering special prices on essential items to attract shoppers.',
    result: 'Higher footfall and boosted overall sales during the festive period'
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
