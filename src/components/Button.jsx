import React from 'react';
import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const buttonClasses = [
    styles.btn,
    styles[`btn-${variant}`],
    styles[`btn-${size}`],
    icon ? styles['btn-with-icon'] : '',
    className
  ].join(' ');

  return (
    <button className={buttonClasses} {...props}>
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
