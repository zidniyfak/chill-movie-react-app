import { useState, useEffect } from 'react';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import MovieCard from '../components/movie/MovieCard';
import { getUserWatchlist, toggleUserWatchlist } from '../utils/watchlist';

const MyList = () => {
  const [userWatchlist, setUserWatchlist] = useState([]);

  useEffect(() => {
    setUserWatchlist(getUserWatchlist());
  }, []);

  const handleToggleWatchlist = (movie) => {
    const updated = toggleUserWatchlist(movie);
    setUserWatchlist(updated);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between gap-10">
      <Navbar />
      <div className="flex flex-col gap-4 px-4 md:gap-8 md:px-20">
        <h1 className="text-2xl font-bold md:text-4xl">Daftar Saya</h1>

        {userWatchlist.length === 0 ? (
          <div className="py-20 text-center text-gray-400">
            Daftar tontonan Anda masih kosong.
          </div>
        ) : (
          <div className="flex flex-wrap justify-start gap-2.5 sm:gap-4 xl:gap-5">
            {userWatchlist.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                variant="portrait"
                popup={true}
                watchlist={userWatchlist}
                onToggleWatchlist={handleToggleWatchlist}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyList;
