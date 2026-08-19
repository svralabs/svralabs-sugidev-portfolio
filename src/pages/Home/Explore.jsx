import React from 'react';
import styles from './Explore.module.css';
import exploreData from '../../data/explore.json';

const Explore = () => {
  return (
    <section className={styles.exploreSection}>
      <div className={styles.ctaContainer}>
        <button className={styles.ctaButton}>
          {exploreData.ctaText}
        </button>
      </div>
    </section>
  );
};

export default Explore;
