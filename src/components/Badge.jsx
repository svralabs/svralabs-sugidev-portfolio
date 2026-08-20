import React from 'react';
import styles from './Badge.module.css';

const Badge = ({ children, variant = 'default', className = '', ...props }) => {
  const badgeClasses = [
    styles.badge,
    styles[`badge-${variant}`],
    className
  ].join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  );
};

export default Badge;
