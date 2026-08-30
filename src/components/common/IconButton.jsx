const IconButton = ({ children, className = '', ...props }) => {
  return (
    <button
      type="button"
      className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-transparent transition-all duration-200 hover:border-white hover:bg-white/10 lg:h-10 lg:w-10 ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
