import { useRef } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import IconButton from '../common/IconButton';
import MovieCard from './MovieCard';

const MovieRow = ({
  title,
  movies,
  variant = 'portrait',
  watchlist = [],
  onToggleWatchlist,
}) => {
  const rowRef = useRef(null);

  // Fungsi Scroll Carousel Kiri/Kanan
  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.75; // Menggeser 75% dari lebar kontainer

      rowRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="flex flex-col gap-2 py-2 md:py-4">
      {/* Title Judul menyesuaikan padding 20px (mobile) & 80px (desktop) */}
      <h2 className="px-5 text-lg font-bold md:px-20 md:text-2xl lg:text-3xl">
        {title}
      </h2>

      <div className="relative w-full">
        {/* Tombol Arrow Prev (Kiri) - Tepat di Tepi Card */}
        <IconButton
          onClick={() => handleScroll('left')}
          className="absolute top-1/2 left-4 z-30 hidden -translate-y-1/2 md:flex md:left-8 lg:left-12"
          aria-label="Scroll left"
        >
          <MdArrowBack className="h-4 w-4 lg:h-6 lg:w-6" />
        </IconButton>

        {/* 
          Container Carousel:
          - Mobile (px-5 / 20px padding, py-2 tanpa margin negatif gila)
          - Desktop (md:px-20 / 80px padding, md:-my-16 md:py-20 untuk hover space)
        */}
        <div
          ref={rowRef}
          className="flex scrollbar-none gap-2.5 overflow-x-auto overflow-y-visible px-5 py-2 md:-my-16 md:gap-4 md:px-20 md:py-20"
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              variant={variant}
              watchlist={watchlist}
              onToggleWatchlist={onToggleWatchlist}
            />
          ))}
        </div>

        {/* Tombol Arrow Next (Kanan) - Tepat di Tepi Card */}
        <IconButton
          onClick={() => handleScroll('right')}
          className="absolute top-1/2 right-4 z-30 hidden -translate-y-1/2 md:flex md:right-8 lg:right-12"
          aria-label="Scroll right"
        >
          <MdArrowForward className="h-4 w-4 lg:h-6 lg:w-6" />
        </IconButton>
      </div>
    </section>
  );
};

export default MovieRow;