import React from 'react';
import styles from './FeatureContentTile.module.css';

const FeatureContentTile = ({ feature }) => {
  if (!feature) return null;

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.categoryBadge}>{feature.category}</div>
          <h1 className={styles.title}>{feature.title}</h1>
          <p className={styles.description}>{feature.detailedDescription}</p>
        </div>
        <div className={styles.heroImage}>
          <img src={feature.image} alt={feature.title} />
        </div>
      </section>

      {/* What Makes It Different */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What Makes This Feature Different</h2>
        <div className={styles.differenceGrid}>
          {feature.whatMakesItDifferent.map((point, index) => (
            <div key={index} className={styles.differenceCard}>
              <div className={styles.differenceIcon}>✓</div>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ideal For */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Ideal For These Business Types</h2>
        <div className={styles.businessGrid}>
          {feature.idealFor.map((business, index) => (
            <div key={index} className={styles.businessCard}>
              <h3 className={styles.businessType}>{business.businessType}</h3>
              <p className={styles.businessDescription}>{business.description}</p>
              <div className={styles.benefitsList}>
                <h4>Key Benefits:</h4>
                <ul>
                  {business.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Key Features & Capabilities</h2>
        <div className={styles.featuresGrid}>
          {feature.keyFeatures.map((keyFeature, index) => (
            <div key={index} className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{keyFeature.feature}</h3>
              <p className={styles.featureDescription}>{keyFeature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Feature Screenshots</h2>
        <div className={styles.screenshotsGrid}>
          {feature.screenshots.map((screenshot, index) => (
            <div key={index} className={styles.screenshotCard}>
              <div className={styles.screenshotImage}>
                <img src={screenshot.image} alt={screenshot.title} />
              </div>
              <div className={styles.screenshotContent}>
                <h3>{screenshot.title}</h3>
                <p>{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Real-World Use Cases</h2>
        <div className={styles.useCasesGrid}>
          {feature.useCases.map((useCase, index) => (
            <div key={index} className={styles.useCaseCard}>
              <h3 className={styles.useCaseTitle}>{useCase.scenario}</h3>
              <p className={styles.useCaseDescription}>{useCase.description}</p>
              <div className={styles.useCaseResult}>
                <strong>Result: </strong>{useCase.result}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Implementation Details</h2>
        <div className={styles.implementationGrid}>
          <div className={styles.implementationCard}>
            <h3>Setup Time</h3>
            <p>{feature.implementation.setupTime}</p>
          </div>
          <div className={styles.implementationCard}>
            <h3>Training Required</h3>
            <p>{feature.implementation.trainingRequired}</p>
          </div>
          <div className={styles.implementationCard}>
            <h3>Integration Complexity</h3>
            <p>{feature.implementation.integrationComplexity}</p>
          </div>
        </div>
        <div className={styles.implementationSteps}>
          <h3>Implementation Steps:</h3>
          <ol>
            {feature.implementation.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing & ROI */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Pricing & Return on Investment</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3>Included In</h3>
            <p>{feature.pricing.included}</p>
          </div>
          <div className={styles.pricingCard}>
            <h3>Additional Costs</h3>
            <p>{feature.pricing.additionalCosts}</p>
          </div>
          <div className={styles.pricingCard}>
            <h3>Expected ROI</h3>
            <p>{feature.pricing.roi}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureContentTile;