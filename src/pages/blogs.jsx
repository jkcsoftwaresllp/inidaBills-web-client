import React from 'react';
import { Link } from 'react-router-dom';
import styles from './blogs.module.css';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'complete-guide-gst-billing-software-india',
    title: 'Complete Guide to GST Billing Software in India 2025',
    excerpt:
      'Everything you need to know about GST billing software, compliance requirements, and how IndiaBills simplifies tax management for Indian businesses.',
    author: 'IndiaBills Team',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'GST & Compliance',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800',
    featured: true,
  },
  {
    id: 2,
    slug: 'inventory-management-best-practices-small-business',
    title: 'Inventory Management Best Practices for Small Businesses',
    excerpt:
      'Learn proven inventory management strategies that help small businesses reduce costs, prevent stockouts, and improve cash flow with IndiaBills.',
    author: 'Priya Sharma',
    date: '2025-01-12',
    readTime: '6 min read',
    category: 'Inventory Management',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800',
    featured: false,
  },
  {
    id: 3,
    slug: 'digital-transformation-indian-retail-businesses',
    title: 'Digital Transformation for Indian Retail Businesses',
    excerpt:
      'How Indian retailers are leveraging digital billing and inventory solutions like IndiaBills to compete in the modern marketplace.',
    author: 'Rajesh Kumar',
    date: '2025-01-10',
    readTime: '7 min read',
    category: 'Digital Transformation',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
    featured: false,
  },
  {
    id: 4,
    slug: 'e-invoicing-compliance-guide-india',
    title: 'E-Invoicing Compliance Guide for Indian Businesses',
    excerpt:
      'Step-by-step guide to e-invoicing compliance in India, including mandatory requirements and how IndiaBills ensures seamless compliance.',
    author: 'Anita Desai',
    date: '2025-01-08',
    readTime: '9 min read',
    category: 'Compliance',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    featured: false,
  },
  {
    id: 5,
    slug: 'multi-location-business-management-software',
    title: 'Multi-Location Business Management with IndiaBills',
    excerpt:
      'Manage multiple business locations efficiently with centralized billing, inventory tracking, and reporting using IndiaBills software.',
    author: 'Vikram Singh',
    date: '2025-01-05',
    readTime: '5 min read',
    category: 'Business Management',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800',
    featured: false,
  },
  {
    id: 6,
    slug: 'automated-billing-benefits-indian-businesses',
    title: 'Benefits of Automated Billing for Indian Businesses',
    excerpt:
      'Discover how automated billing systems like IndiaBills reduce errors, save time, and improve cash flow for businesses across India.',
    author: 'Meera Patel',
    date: '2025-01-03',
    readTime: '6 min read',
    category: 'Automation',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    featured: false,
  },
  {
    id: 7,
    slug: 'cloud-based-accounting-software-advantages',
    title: 'Why Cloud-Based Accounting Software is the Future',
    excerpt:
      'Explore the advantages of cloud-based accounting solutions and why IndiaBills cloud platform is perfect for modern Indian businesses.',
    author: 'Arjun Reddy',
    date: '2025-01-01',
    readTime: '7 min read',
    category: 'Cloud Technology',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800',
    featured: false,
  },
  {
    id: 8,
    slug: 'indiabills-vs-competitors-comparison-guide',
    title: 'IndiaBills vs Competitors: Complete Comparison Guide',
    excerpt:
      'Detailed comparison of IndiaBills with other billing software in India, highlighting unique features and value propositions.',
    author: 'IndiaBills Team',
    date: '2024-12-28',
    readTime: '10 min read',
    category: 'Product Comparison',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800',
    featured: false,
  },
];

const Blogs = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className={styles.container}>
      {/* SEO Content for IndiaBills and India Bills */}
      <div style={{ display: 'none' }}>
        <h1>IndiaBills Blog - Billing Software Tips and Guides</h1>
        <h2>India Bills Articles and Resources</h2>
        <h3>IndiaBills Business Insights</h3>
        <h4>India Bills Software Tutorials</h4>
        <p>Read the latest IndiaBills blog posts about billing software, inventory management, and business growth. India Bills blog provides valuable insights for businesses.</p>
      </div>

      <section className={styles.hero}>
        <h1>IndiaBills Blogs</h1>
        <p>
          Stay updated with the latest insights on billing software, inventory
          management, GST compliance, and business growth strategies for Indian
          enterprises. Read IndiaBills articles and expert tips.
        </p>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className={styles.featuredSection}>
          <h2 className={styles.sectionTitle}>Featured IndiaBills Article</h2>
          <Link
            to={`/blog/${featuredPost.slug}`}
            className={styles.featuredPost}
          >
            <div className={styles.featuredImage}>
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className={styles.featuredBadge}>Featured</div>
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.postMeta}>
                <span className={styles.category}>{featuredPost.category}</span>
                <div className={styles.metaInfo}>
                  <Calendar size={16} />
                  <span>
                    {new Date(featuredPost.date).toLocaleDateString('en-IN')}
                  </span>
                  <User size={16} />
                  <span>{featuredPost.author}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <h3 className={styles.featuredTitle}>{featuredPost.title}</h3>
              <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              <div className={styles.readMoreLink}>
                Read Full Article <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className={styles.postsSection}>
        <h2 className={styles.sectionTitle}>Latest India Bills Articles</h2>
        <div className={styles.postsGrid}>
          {regularPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className={styles.postCard}
            >
              <div className={styles.postImage}>
                <img src={post.image} alt={post.title} />
                <div className={styles.categoryBadge}>{post.category}</div>
              </div>
              <div className={styles.postContent}>
                <div className={styles.postMeta}>
                  <div className={styles.metaInfo}>
                    <Calendar size={14} />
                    <span>
                      {new Date(post.date).toLocaleDateString('en-IN')}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postAuthor}>
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={styles.newsletter}>
        <h2>Stay Updated with IndiaBills</h2>
        <p>Get the latest India Bills articles and insights delivered to your inbox</p>
        <form className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Enter your email address"
            className={styles.emailInput}
          />
          <button type="submit" className={styles.subscribeButton}>
            Subscribe to IndiaBills
          </button>
        </form>
      </section>
    </div>
  );
};

export default Blogs;