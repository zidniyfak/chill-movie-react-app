const BADGE_VARIANTS = {
  premium: 'bg-warning-pressed  top-2 left-2 rounded-full px-1.5 py-1',
  newEpisode: 'bg-primary-300  top-2 left-2 rounded-full px-1.5 py-1 ',
  top10:
    'bg-error-pressed text-white rounded-tr-sm rounded-bl-sm px-1 py-1.5 top-0 right-2 flex flex-col items-center gap-0.5',
};

const MovieBadge = ({ type, children }) => {
  const variantClass = BADGE_VARIANTS[type];

  return (
    <div>
      <span
        className={`text-3xs absolute font-semibold shadow-md ${variantClass}`}
      >
        {children}
      </span>
    </div>
  );
};

export default MovieBadge;
