import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import HeroBanner from '../components/home/HeroBanner';
import MovieRow from '../components/movie/MovieRow';
import Footer from '../components/layout/Footer';
import { movies } from '../data/dummyMovies';
import { getUserWatchlist, toggleUserWatchlist } from '../utils/watchlist';

const Home = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    setWatchlist(getUserWatchlist());
  }, []);

  const handleToggleWatchlist = (movie) => {
    const updated = toggleUserWatchlist(movie);
    setWatchlist(updated);
  };

  const trendingMovie = movies.filter((movie) => movie.isTrending);
  const top10Movie = movies.filter((movie) => movie.badge === 'top10');

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-5">
        <HeroBanner />
        <MovieRow
          title="Melanjutkan Tonton Film"
          movies={movies}
          variant="landscape"
          watchlist={watchlist}
          onToggleWatchlist={handleToggleWatchlist}
        />
        <MovieRow
          title="Top Rating Film dan Series Hari Ini"
          movies={top10Movie}
          variant="portrait"
          watchlist={watchlist}
          onToggleWatchlist={handleToggleWatchlist}
        />
        <MovieRow
          title="Film Trending"
          movies={trendingMovie}
          variant="portrait"
          watchlist={watchlist}
          onToggleWatchlist={handleToggleWatchlist}
        />
        <MovieRow
          title="Rilis Baru"
          movies={movies}
          variant="portrait"
          watchlist={watchlist}
          onToggleWatchlist={handleToggleWatchlist}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
