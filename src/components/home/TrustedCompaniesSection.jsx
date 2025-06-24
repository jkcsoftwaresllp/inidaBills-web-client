import React from 'react';
import styles from './styles/TrustedCompaniesSection.module.css';
import ButtonWithBG from '../buttons/ButtonWithBG';

function TrustedCompaniesSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.tittle}>Trusted by Businesses Across India</h1>

      <div className={styles.companyBox}>
        <h2 className={styles.company}>COMPANY 1</h2>
        <h2 className={styles.company}>COMPANY 1</h2>
        <h2 className={styles.company}>COMPANY 1</h2>
        <h2 className={styles.company}>COMPANY 1</h2>
        <h2 className={styles.company}>COMPANY 1</h2>
      </div>
      <div className={styles.btmBox}>
        <div className={styles.bottomSection}>
          <h1 className={styles.heading}>
            Ready to Simplify Your Billing Process?
          </h1>
          <h2 className={styles.para}>
            Join thousands of businesses that trust IndiaBills for their billing
            and inventory needs.
          </h2>
        </div>
        <div className={styles.btn}>
          <ButtonWithBG
            label={'Start Demo'}
            background={0}
            rounded={'full'}
            border={1}
            redirectTo="/login"
          />
        </div>
      </div>
    </div>
  );
}

export default TrustedCompaniesSection;