import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './featurePost.module.css';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import FeatureContentTile from '../components/featureContentTile/FeatureContentTile';
import featureArticles from '../components/featureArticles';

const FeaturePost = () => {
  const { slug } = useParams();
  const getFeatureData = featureArticles[slug];
  const feature = getFeatureData?.();

  if (!feature) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Feature Not Found</h1>
          <p>The feature you're looking for doesn't exist.</p>
          <Link to="/features" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Features
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        {/* Header */}
        <header className={styles.header}>
          <Link to="/features" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Features
          </Link>
          
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/features">Features</Link>
            <span>/</span>
            <span>{feature.title}</span>
          </div>
        </header>

        {/* Content */}
        <div className={styles.content}>
          <FeatureContentTile feature={feature} />
        </div>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2>Ready to Experience {feature.title}?</h2>
            <p>
              See how this powerful feature can transform your business operations. 
              Start your free trial today and discover the difference IndiaBills can make.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/contactus" className={styles.ctaButton}>
                Start Free Trial
              </Link>
              <Link to="/contactus" className={styles.ctaButtonSecondary}>
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* Related Features */}
      <section className={styles.relatedFeatures}>
        <h2>Explore More Features</h2>
        <div className={styles.relatedGrid}>
          <Link to="/feature/gst-billing" className={styles.relatedFeature}>
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400" alt="GST Billing" />
            <h3>GST Billing</h3>
            <p>Effortless GST compliance and automated tax calculations</p>
          </Link>
          <Link to="/feature/advanced-reports" className={styles.relatedFeature}>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400" alt="Advanced Reports" />
            <h3>Advanced Reports</h3>
            <p>Comprehensive analytics and business intelligence</p>
          </Link>
          <Link to="/feature/dedicated-customer-support" className={styles.relatedFeature}>
            <img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400" alt="Customer Support" />
            <h3>Customer Support</h3>
            <p>24/7 dedicated support for your business needs</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeaturePost;