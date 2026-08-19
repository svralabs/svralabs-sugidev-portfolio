import React from 'react';
import styles from './Footer.module.css';
import footerData from '../data/footer.json';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {footerData.columns.map((column, index) => (
            <div key={index} className={styles.column}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.copyright}>
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
