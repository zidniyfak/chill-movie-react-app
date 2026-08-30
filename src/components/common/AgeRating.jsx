const BASE_STYLES =
  'h-8 px-2 flex items-center justify-center text-xs rounded-full leading-1';

const VARIANTS = {
  solid: 'bg-info-background text-text-light-secondary font-bold',
  outline:
    'border border-text-light-secondary text-text-light-secondary lg:h-10 lg:text-sm lg:px-3',
};

const AgeRating = ({ rating, variant = 'solid' }) => {
  return (
    <span className={`${BASE_STYLES} ${VARIANTS[variant]}`}>{rating}</span>
  );
};

export default AgeRating;
