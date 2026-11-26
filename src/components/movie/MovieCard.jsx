import { useState } from 'react';
import {
  MdStar,
  MdPlayArrow,
  MdCheck,
  MdAdd,
  MdKeyboardArrowDown,
} from 'react-icons/md';
import MovieBadge from './MovieBadge';
import AgeRating from '../common/AgeRating';

const CARD_VARIANTS = {
  portrait: {
    // 5 card di desktop (1440px): w-[234px] dengan gap-7 (28px) -> 5 * 234 + 4 * 28 = 1282px
    style: 'w-[96px] sm:w-[140px] md:w-[180px] xl:w-[234px] aspect-[2/3]',
  },
  landscape: {
    // 4 card di desktop (1440px): w-[298px] dengan gap-7 (28px) -> 4 * 298 + 3 * 28 = 1276px
    style: 'w-[320px] sm:w-[240px] md:w-[260px] xl:w-[298px] aspect-video',
  },
};

const BADGE_LABELS = {
  premium: 'Premium',
  newEpisode: 'Episode Baru',
  top10: 'Top 10',
};

const MovieCard = ({
  movie,
  variant = 'portrait',
  popup = true,
  watchlist = [],
  onToggleWatchlist,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const config = CARD_VARIANTS[variant] || CARD_VARIANTS.portrait;
  const posterPortrait = `images/posters/portrait/${movie.slug}.webp`;
  const posterLandscape = `images/posters/landscape/${movie.slug}.webp`;
  const label = BADGE_LABELS[movie.badge] || '';

  const isLandscape = variant === 'landscape';
  const progressPercent = ((movie.id * 17) % 50) + 35;
  const isWatchlisted = watchlist.some((item) => item.id === movie.id);

  return (
    <div
      className={`relative shrink-0 grow-0 basis-auto ${config.style} ${
        isHovered ? 'z-50' : 'z-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Utama */}
      <div
        role="button"
        tabIndex={0}
        className="relative h-full w-full cursor-pointer overflow-hidden rounded-lg text-left"
        onClick={() => alert(`Buka detail untuk: ${movie.title}`)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            alert(`Buka detail untuk: ${movie.title}`);
          }
        }}
      >
        <img
          src={isLandscape ? posterLandscape : posterPortrait}
          alt={movie.title}
          className="h-full w-full object-cover object-center"
        />

        {isLandscape && (
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-6 text-sm">
            <h1 className="max-w-[75%] truncate font-bold text-white">
              {movie.title}
            </h1>
            {movie.rating && (
              <p className="flex items-center gap-1 font-semibold text-white">
                <MdStar className="h-4 w-4 text-yellow-400" /> {movie.rating}
              </p>
            )}
          </div>
        )}

        {movie.badge === 'top10' ? (
          <MovieBadge type={movie.badge}>
            <span>Top</span>
            <span>10</span>
          </MovieBadge>
        ) : (
          <MovieBadge type={movie.badge}>{label}</MovieBadge>
        )}
      </div>

      {/* Pop-up Hover HANYA MUNCUL DI DESKTOP (md:flex) untuk mencegah bug visual mobile */}
      {popup && (
        <div
          className={`border-outline-border absolute top-1/2 left-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-xl border bg-[#181818] text-white shadow-2xl transition-all duration-300 md:flex ${
            isLandscape
              ? 'h-110 w-87.5 sm:h-90 sm:w-80'
              : 'h-105 w-82.5 sm:h-100 sm:w-80'
          } ${
            isHovered
              ? 'pointer-events-auto scale-100 opacity-100'
              : 'pointer-events-none scale-90 opacity-0'
          }`}
        >
          <img
            src={posterLandscape}
            alt={movie.title}
            className="h-1/2 w-full object-cover"
          />

          <div className="flex h-1/2 flex-col justify-between p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Memutar film: ${movie.title}`);
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:bg-gray-200"
                  aria-label="Play"
                >
                  <MdPlayArrow className="ml-0.5 h-6 w-6 fill-current" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onToggleWatchlist) onToggleWatchlist(movie);
                  }}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-white transition ${
                    isWatchlisted
                      ? 'border-green-500 bg-green-600/20 text-green-500 hover:border-green-400'
                      : 'border-gray-500 hover:border-white'
                  }`}
                  aria-label={
                    isWatchlisted ? 'Hapus dari daftar' : 'Tambah ke daftar'
                  }
                >
                  {isWatchlisted ? (
                    <MdCheck className="h-5 w-5" />
                  ) : (
                    <MdAdd className="h-5 w-5" />
                  )}
                </button>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  alert(`Buka detail selengkapnya: ${movie.title}`);
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-500 text-white transition hover:border-white"
                aria-label="Detail selengkapnya"
              >
                <MdKeyboardArrowDown className="h-5 w-5" />
              </button>
            </div>

            {isLandscape ? (
              <div className="flex w-full flex-col">
                {movie.type === 'series' && (
                  <span className="block text-base font-bold">"Episode 1"</span>
                )}
                <div className="flex items-center justify-between">
                  <div className="h-1.5 w-3/4 rounded-full bg-gray-700">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <span>2j 33m</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2.5 text-xs font-semibold">
                <AgeRating rating={movie.age_rating} />
                <span className="text-gray-300">2j 33m</span>
              </div>
            )}

            <div className="flex items-center justify-between text-xs font-medium text-gray-300">
              <span>Fiksi Ilmiah</span>
              <span>•</span>
              <span>Aksi</span>
              <span>•</span>
              <span>Komedi</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
