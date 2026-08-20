import React from 'react';

const Button = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-nav-link uppercase transition-all duration-300';

  const variantClasses = {
    primary: 'bg-primary-container text-ink hover:bg-primary-container/90',
    secondary: 'bg-surface-container text-on-surface hover:bg-surface-container/90',
    outline: 'border border-outline text-on-surface hover:bg-surface-container',
    text: 'text-on-surface hover:bg-surface-container/10',
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-2 text-nav-link',
    large: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
