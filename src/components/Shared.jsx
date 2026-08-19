import React from 'react';

const Button = ({ children, size = 'md', onClick }) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`bg-orange-700 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-200 ${sizeClasses[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const SectionWrapper = ({ children, className = '' }) => {
  return (
    <section className={`py-12 px-4 max-w-6xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

const LuxurySerifText = ({ children, className = '' }) => {
  return (
    <span className={`font-playfair-display ${className}`}>
      {children}
    </span>
  );
};

export { Button, SectionWrapper, LuxurySerifText };
