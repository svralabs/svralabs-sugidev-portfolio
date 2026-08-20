import React, { useState } from 'react';
import {Globe as ArrowUpRight} from 'lucide-react';
import styles from './Footer.module.css';
import socialLinks from '../config/socialLinks';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  };

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footerContainer}>
        <p className={styles.projectText} data-reveal="" data-y="40">
          (Got a project?)
        </p>
        <a className={styles.ctaLink} data-delay="0.1" data-reveal="" data-y="40" href="mailto:hello@sugidev.studio">
          Let's build<br />
          <span>
            something
            <ArrowUpRight className="w-[0.7em] h-[0.7em] text-ember transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
          </span>
        </a>
        <a className={styles.emailLink} data-delay="0.2" data-reveal="" data-y="30" href="mailto:hello@sugidev.studio">
          hello@sugidev.studio
        </a>
      </div>
      <div className={styles.bottomLinks}>
        <span className={styles.copyright}>
          © 2026 sugidev° — Frontend Developer
        </span>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a key={link.name} className={styles.socialLink} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          ))}
        </div>
        <a className={styles.backToTop} href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
