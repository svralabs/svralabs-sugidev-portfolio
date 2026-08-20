import PropTypes from 'prop-types';

export default function Badge({
  variant = 'default',
  size = 'md',
  children,
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-kanit font-bold uppercase tracking-wider';
  const variantClasses = {
    default: 'bg-ink-soft text-on-background',
    ember: 'bg-ember text-white',
    mist: 'bg-mist text-background',
  };
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
    lg: 'px-5 py-2 text-base',
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  variant: PropTypes.oneOf(['default', 'ember', 'mist']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
