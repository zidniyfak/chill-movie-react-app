import { Link } from 'react-router-dom';

const BASE_STYLES =
  'flex items-center justify-center gap-2 font-bold rounded-full text-xs lg:text-base cursor-pointer ';

const VARIANTS = {
  primary:
    'bg-primary-300 hover:bg-primary-400 border-0 px-3 h-8 lg:h-10 lg:px-7 leading-none transition-[opacity,transform,background-color] duration-200 ease-out active:scale-95',
  secondary:
    'bg-paper-background px-3 h-8 lg:h-10 lg:px-7 leading-none transition-[opacity,transform,background-color] duration-200 ease-out active:scale-95',
  outline:
    'border border-outline-border  bg-extra-background lg:text-base px-3 h-8 lg:h-10  transition-all duration-200 active:scale-[0.98] hover:bg-transparent hover:border-outline-border focus:outline-none',
};

const Button = ({
  children,
  variant = 'primary',
  isFullWidth = false,
  icon: Icon,
  className = '',
  type = 'button',
  to,
  href,
  disabled = false,
  ...props
}) => {
  const widthClass = isFullWidth ? 'w-full' : 'inline-flex';
  const variantClass = VARIANTS[variant] || VARIANTS.primary;
  const finalClass =
    `${widthClass} ${variantClass} ${BASE_STYLES} ${className}`.trim();
  const IconRender = Icon ? (
    <Icon
      className={
        variant === 'outline'
          ? 'h-5 w-5 shrink-0'
          : 'h-4 w-4 shrink-0 lg:h-5 lg:w-5'
      }
    />
  ) : null;

  if (to) {
    return (
      <Link to={to} className={finalClass} {...props}>
        {IconRender}
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={finalClass}
        {...props}
      >
        {IconRender}
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={finalClass} {...props}>
      {IconRender} {children}
    </button>
  );
};

export default Button;
