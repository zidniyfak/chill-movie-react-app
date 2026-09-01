import { MdArrowBack, MdArrowForward } from 'react-icons/md';

import IconButton from '../common/IconButton';
import MovieCard from './MovieCard';

const MovieRow = ({ title, movies, variant = 'portrait' }) => {
  return (
    <section className="flex flex-col gap-2 py-2 ps-5 sm:py-4 lg:px-20">
      <h2 className="text-lg font-bold lg:text-3xl">{title}</h2>
      <div className="relative w-full">
        <IconButton
          className="absolute top-1/2 -left-5 z-10 hidden -translate-y-1/2 md:flex"
          aria-label="Scroll left"
        >
          <MdArrowBack className="h-4 w-4 lg:h-6 lg:w-6" />
        </IconButton>
        <div className="-my-28 flex scrollbar-none gap-4 overflow-x-auto overflow-y-hidden py-32 sm:-my-32 sm:py-36">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              variant={variant}
              onClick={(data) => alert(`Buka pop-up untuk: ${data.title}`)}
            />
          ))}
        </div>
        <IconButton
          className="absolute top-1/2 -right-5 z-10 hidden -translate-y-1/2 md:flex"
          aria-label="Scroll right"
        >
          <MdArrowForward className="h-4 w-4 lg:h-6 lg:w-6" />
        </IconButton>
      </div>
    </section>
  );
};

export default MovieRow;
