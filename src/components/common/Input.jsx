import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Input = ({
  label,
  id,
  type = 'text',
  name,
  placeholder,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const finalType = type === 'password' && showPassword ? 'text' : type;

  const defaultInputClass =
    'h-8 w-full rounded-full border border-outline-border bg-transparent px-3 pr-10 text-white placeholder:text-text-light-disabled transition-all focus:border-white focus:outline-none lg:h-10 lg:px-5 lg:text-sm';

  return (
    <div className="flex flex-col gap-1 lg:gap-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium lg:text-base">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <input
          id={id}
          name={name || id}
          className={`${defaultInputClass} ${className}`.trim()}
          type={finalType}
          placeholder={placeholder}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-text-light-secondary absolute right-3 flex items-center justify-center transition-colors hover:text-white focus:outline-none"
            aria-label={
              showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'
            }
          >
            {showPassword ? (
              <MdVisibilityOff className="h-4 w-4" />
            ) : (
              <MdVisibility className="h-4 w-4" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
