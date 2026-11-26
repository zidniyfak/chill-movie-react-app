import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import MovieCard from '../components/movie/MovieCard';
import { movies } from '../data/dummyMovies';

const MyList = () => {
  return (
    <div className=" flex min-h-screen flex-col justify-between gap-10">
      <Navbar />
      <div className="flex flex-col gap-4 px-4 md:gap-8 md:px-20">
        <h1 className="text-2xl font-bold md:text-4xl">Daftar Saya</h1>
        <div className="flex flex-wrap justify-center gap-3">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              variant="portrait"
              popup={false}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyList;
