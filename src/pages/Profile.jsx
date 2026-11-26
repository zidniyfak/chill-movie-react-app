import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import avatar from '../assets/images/avatars/avatar-profile.png';
import { movies } from '../data/dummyMovies';
import MovieCard from '../components/movie/MovieCard';

const Profile = () => {
  const watchList = movies.filter((movie) => movie.isWatchlist);
  return (
    <div>
      <Navbar />
      {/* Main Content Area */}
      <main className="mx-auto w-full max-w-360 flex-1 space-y-12 px-4 py-8 md:px-20">
        {/* Section 1: Profil Saya & Status Berlangganan */}
        <section aria-labelledby="profile-heading">
          <h1 id="profile-heading" className="mb-6 text-2xl font-bold">
            Profil Saya
          </h1>

          <div className="desktop:gap-[80px] flex w-full flex-col-reverse items-start gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
            {/* Form Tampilan Profil (Kiri - 7 Columns) */}
            <form className="w-full space-y-4 md:space-y-5 lg:col-span-7">
              {/* Avatar Section */}
              <div className="flex items-center gap-4 md:gap-5">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-700 md:h-20 md:w-20">
                  <img
                    src={avatar}
                    alt="Foto Profil William"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-blue-600 px-4 py-1.5 text-xs font-semibold text-blue-500 transition-colors hover:bg-blue-600 hover:text-white">
                    <span>Ubah Foto</span>
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                  <p className="text-[11px] text-gray-400">Maksimal 2MB</p>
                </div>
              </div>

              {/* Input Nama Pengguna */}
              <div className="relative rounded-xl border border-gray-700 bg-[#22282A] p-3">
                <label
                  htmlFor="username"
                  className="block text-[11px] font-medium text-gray-400"
                >
                  Nama Pengguna
                </label>
                <input
                  id="username"
                  type="text"
                  defaultValue="William"
                  className="mt-0.5 w-full bg-transparent text-sm text-white outline-none"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 transition-colors hover:text-white"
                  aria-label="Edit Nama Pengguna"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              </div>

              {/* Input Email */}
              <div className="rounded-xl border border-gray-700 bg-[#22282A] p-3 opacity-60">
                <label
                  htmlFor="email"
                  className="block text-[11px] font-medium text-gray-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue="william1980@gmail.com"
                  readOnly
                  className="mt-0.5 w-full cursor-not-allowed bg-transparent text-sm text-gray-300 outline-none"
                />
              </div>

              {/* Input Kata Sandi */}
              <div className="relative rounded-xl border border-gray-700 bg-[#22282A] p-3">
                <label
                  htmlFor="password"
                  className="block text-[11px] font-medium text-gray-400"
                >
                  Kata Sandi
                </label>
                <input
                  id="password"
                  type="password"
                  defaultValue="123456789012"
                  className="mt-0.5 w-full bg-transparent text-sm text-white outline-none"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 transition-colors hover:text-white"
                  aria-label="Edit Kata Sandi"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              </div>

              {/* Tombol Simpan */}
              <button
                type="button"
                className="rounded-full bg-blue-700 px-6 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Simpan
              </button>
            </form>

            {/* Banner Subscription Info (Kanan - 5 Columns) */}
            <aside className="lg:col-span-5">
              <div className="flex items-start gap-4 rounded-2xl border border-gray-700/50 bg-[#2D3035] p-6 shadow-lg">
                <div className="flex-shrink-0 rounded-lg bg-red-500/20 p-2 text-2xl text-red-500">
                  📢
                </div>
                <div className="space-y-2">
                  <h2 className="text-base leading-snug font-bold">
                    Saat ini anda belum berlangganan
                  </h2>
                  <p className="text-xs leading-relaxed text-gray-300">
                    Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series
                    Kesukaan Kamu!
                  </p>
                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      className="rounded-full bg-[#3D4148] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-gray-600"
                    >
                      Mulai Berlangganan
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Section 2: Daftar Saya (Watchlist Cards Grid) */}
        <section aria-labelledby="mylist-heading" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 id="mylist-heading" className="text-xl font-bold">
              Daftar Saya
            </h2>
            <a
              href="#lihat-semua"
              className="text-xs text-gray-400 transition-colors hover:text-white"
            >
              Lihat Semua
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {watchList.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                variant="portrait"
                popup={false}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
