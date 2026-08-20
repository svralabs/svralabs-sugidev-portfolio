import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const baseClasses = 'font-nav-link text-nav-link uppercase rounded-full inline-flex items-center justify-center transition-all duration-300';
  const variantClasses = {
    primary: 'bg-primary-container text-ink hover:bg-primary-container/90',
    secondary: 'bg-surface text-on-surface hover:bg-surface/90',
    outline: 'border border-mist/20 text-on-surface hover:bg-mist/10',
    text: 'text-on-surface hover:text-primary',
  };
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2 text-nav-link',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
