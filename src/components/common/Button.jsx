const Button = ({
  children,
  icon,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseStyle =
    'w-full border border-transparent bg-extra-background text-xs lg:text-base text-white font-semibold px-3 h-8 lg:h-10 rounded-full flex justify-center items-center gap-2 transition-all duration-200 active:scale-[0.98] hover:bg-transparent hover:border-outline-border focus:outline-none';

  return (
    <button
      type={type}
      className={`${baseStyle} ${className}`.trim()}
      {...props}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
