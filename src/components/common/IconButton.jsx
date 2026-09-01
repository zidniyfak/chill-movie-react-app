const BASE_STYLES =
  'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full lg:h-10 lg:w-10 border';

const VARIANTS = {
  solid: 'border-outline-border bg-body-background text-white',
  outline: 'bg-transparent border-text-light-secondary',
};
const IconButton = ({ children, className = '', variant, ...props }) => {
  const variantClass = VARIANTS[variant] || VARIANTS.solid;

  return (
    <button
      type="button"
      className={`${BASE_STYLES} ${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
