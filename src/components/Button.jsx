import PropTypes from 'prop-types';

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) {
  const baseClasses = 'font-kanit font-bold uppercase tracking-wider rounded-md transition-all active:scale-95';
  const variantClasses = {
    primary: 'bg-ember text-white ember-glow hover:-translate-y-1',
    ink: 'bg-ink-soft text-on-background border border-mist/10 hover:bg-mist/10',
    ghost: 'bg-transparent text-on-background border border-transparent hover:border-mist/20 hover:bg-mist/5',
    mist: 'bg-mist text-background hover:bg-white',
    outlineEmber: 'bg-transparent text-ember border-2 border-ember hover:bg-ember hover:text-white',
    outlineMist: 'bg-transparent text-mist border-2 border-mist/30 hover:border-mist hover:bg-mist/5',
  };
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3.5',
    lg: 'px-10 py-5 text-lg tracking-widest',
  };

  const iconClasses = 'material-symbols-outlined text-lg';
  const iconElement = icon && <span className={iconClasses}>{icon}</span>;

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'ink', 'ghost', 'mist', 'outlineEmber', 'outlineMist']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
};
