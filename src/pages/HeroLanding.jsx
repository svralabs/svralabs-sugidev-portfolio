import React from 'react';
import styles from './HeroLanding.module.css';

const HeroLanding = () => {
  return (
    <div className={styles.container}>
      {/* TopNavBar */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          {/* Brand */}
          <a className={styles.brand} href="#">
            sugidev
          </a>
          {/* Links (Hidden on mobile, flex on md+) */}
          <div className={styles.navLinks}>
            <a className={styles.navLink} href="#">Work</a>
            <a className={styles.navLink} href="#">Services</a>
            <a className={styles.navLink} href="#">About</a>
            <a className={styles.navLink} href="#">Contact</a>
          </div>
          {/* Trailing Action */}
          <a className={styles.ctaButton} href="#">
            Let's Build
          </a>
          {/* Mobile Menu Toggle */}
          <button className={styles.mobileMenuToggle}>
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className={styles.main}>
        <div className={styles.mainContent}>
          {/* Availability Badge */}
          <div className={styles.availabilityBadge}>
            <span className={styles.availabilityDot}>
              <span className={styles.availabilityPing}></span>
              <span className={styles.availabilityInnerDot}></span>
            </span>
            <span className={styles.availabilityText}>Available for work</span>
          </div>

          {/* Hero Typography */}
          <div className={styles.heroTypography}>
            {/* Location Subtext */}
            <div className={styles.locationSubtext}>
              <span className="material-symbols-outlined text-sm">location_on</span>
              Based in Tokyo, JP
            </div>

            {/* Marquee Heading */}
            <div className={styles.marqueeContainer}>
              <div className={styles.marqueeContent}>
                HI, I'M SUGIDEV • FRONTEND ENGINEER • HI, I'M SUGIDEV • FRONTEND ENGINEER • HI, I'M SUGIDEV • FRONTEND ENGINEER •
              </div>
            </div>

            {/* Foreground Static Heading */}
            <h1 className={styles.heroHeading}>
              Hi, I'm <span className={styles.heroHighlight}>sugidev</span>
            </h1>
          </div>

          {/* Description */}
          <p className={styles.description}>
            Crafting high-performance, visually striking digital experiences. Specializing in modern web architectures and fluid user interfaces.
          </p>

          {/* Action */}
          <div className={styles.action}>
            <a className={styles.contactButton} href="#contact">
              Contact Me
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            sugidev
          </div>

          {/* Copyright */}
          <div className={styles.copyright}>
            © 2024 sugidev. Built with precision.
          </div>

          {/* Links */}
          <div className={styles.footerLinks}>
            <a className={styles.footerLink} href="#">Globe</a>
            <a className={styles.footerLink} href="#">LinkedIn</a>
            <a className={styles.footerLink} href="#">Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroLanding;
