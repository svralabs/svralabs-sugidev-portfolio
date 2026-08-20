export default function Badge({ children, variant = 'default', className = '', ...props }) {
  const baseClasses = 'rounded-full px-4 py-2 flex items-center gap-2 w-fit';
  const variantClasses = {
    default: 'bg-surface/50 backdrop-blur-sm border border-mist/20',
    success: 'bg-success-container/20 border border-success/30',
    warning: 'bg-warning-container/20 border border-warning/30',
    error: 'bg-error-container/20 border border-error/30',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
