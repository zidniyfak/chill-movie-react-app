import Navbar from '../components/layout/Navbar';
import HeroBanner from '../components/home/HeroBanner';
import MovieRow from '../components/movie/MovieRow';
import Footer from '../components/layout/Footer';

import { movies } from '../data/dummyMovies';

const Home = () => {
  const trendingMovie = movies.filter((movie) => movie.isTrending);
  const top10Movie = movies.filter((movie) => movie.badge === 'top10');

  return (
    <div className="bg-page-header-background min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-5">
        <HeroBanner />
        <MovieRow
          title="Melanjutkan Tonton Film"
          movies={movies}
          variant="landscape"
        />
        <MovieRow
          title="Top Rating Film dan Series Hari Ini"
          movies={top10Movie}
          variant="portrait"
        />
        <MovieRow
          title="Film Trending"
          movies={trendingMovie}
          variant="portrait"
        />
        <MovieRow title="Rilis Baru" movies={movies} variant="portrait" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
