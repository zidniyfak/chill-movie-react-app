import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import avatar from '../assets/images/avatars/avatar-profile.png';
import MovieCard from '../components/movie/MovieCard';
import { getUserWatchlist, toggleUserWatchlist } from '../utils/watchlist';

const Profile = () => {
  // 1. Read Data User dari LocalStorage (Lazy Initialization)
  const [formData, setFormData] = useState(() => {
    const activeUser = localStorage.getItem('current_user');
    if (activeUser) {
      const parsedUser = JSON.parse(activeUser);
      return {
        username: parsedUser.username || '',
        email: parsedUser.email || '',
        password: parsedUser.password || '',
      };
    }
    return { username: '', email: '', password: '' };
  });

  // 2. Read Data Watchlist Dinamis dari User Aktif
  const [watchList, setWatchList] = useState(() => getUserWatchlist());

  // State mode edit & notifikasi
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [message, setMessage] = useState('');

  // Handler Input Form Text
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handler Submit Form Profil (Update User Profile)
  const handleSubmit = (e) => {
    e.preventDefault();

    const activeUser = JSON.parse(localStorage.getItem('current_user'));
    if (!activeUser) return;

    const updatedUser = {
      ...activeUser,
      username: formData.username.trim(),
      password: formData.password,
    };

    // Update Sesi Aktif & Users List Utama
    localStorage.setItem('current_user', JSON.stringify(updatedUser));
    const usersList = JSON.parse(localStorage.getItem('users_list')) || [];
    const updatedUsersList = usersList.map((user) =>
      user.email === updatedUser.email ? updatedUser : user,
    );
    localStorage.setItem('users_list', JSON.stringify(updatedUsersList));

    setIsEditingName(false);
    setIsEditingPassword(false);
    setMessage('Profil berhasil diperbarui!');
    setTimeout(() => setMessage(''), 3000);
  };

  // 3. Handler Toggle Watchlist Dinamis (Tambah / Hapus Film dari Profil)
  const handleToggleWatchlist = (movie) => {
    const updated = toggleUserWatchlist(movie);
    setWatchList(updated);
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#181A1C] text-white">
      <Navbar />

      {/* Main Content Area */}
      <main className="mx-auto w-full max-w-[1440px] flex-1 space-y-12 px-4 py-8 md:px-[80px]">
        {/* Section 1: Profil Saya & Status Berlangganan */}
        <section aria-labelledby="profile-heading">
          <h1 id="profile-heading" className="mb-6 text-2xl font-bold">
            Profil Saya
          </h1>

          <div className="desktop:gap-[80px] flex w-full flex-col-reverse items-start gap-6 lg:grid lg:grid-cols-12 lg:gap-10">
            {/* Form Tampilan Profil */}
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-4 md:space-y-5 lg:col-span-7"
            >
              {message && (
                <div className="rounded-lg border border-green-600/40 bg-green-600/20 p-3 text-xs text-green-400">
                  {message}
                </div>
              )}

              {/* Avatar Section */}
              <div className="flex items-center gap-4 md:gap-5">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-gray-700 md:h-20 md:w-20">
                  <img
                    src={avatar}
                    alt="Foto Profil"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => alert('Fitur upload foto diabaikan dulu')}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-blue-600 px-4 py-1.5 text-xs font-semibold text-blue-500 transition-colors hover:bg-blue-600 hover:text-white"
                  >
                    Ubah Foto
                  </button>
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
                  value={formData.username}
                  onChange={handleChange}
                  disabled={!isEditingName}
                  className="mt-0.5 w-full bg-transparent text-sm text-white outline-none disabled:opacity-75"
                  required
                />
                <button
                  type="button"
                  onClick={() => setIsEditingName((prev) => !prev)}
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

              {/* Input Email (Read-Only) */}
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
                  value={formData.email}
                  readOnly
                  disabled
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
                  type={isEditingPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  disabled={!isEditingPassword}
                  className="mt-0.5 w-full bg-transparent text-sm text-white outline-none disabled:opacity-75"
                  required
                />
                <button
                  type="button"
                  onClick={() => setIsEditingPassword((prev) => !prev)}
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
              <div className="pt-2">
                <button
                  type="submit"
                  className="rounded-full bg-blue-700 px-6 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-800"
                >
                  Simpan
                </button>
              </div>
            </form>

            {/* Banner Subscription Info */}
            <aside className="w-full lg:col-span-5">
              <div className="flex items-start gap-4 rounded-2xl border border-gray-700/50 bg-[#2D3035] p-6 shadow-lg">
                <div className="flex-shrink-0 rounded-lg bg-red-500/20 p-2 text-2xl text-red-500">
                  📢
                </div>
                <div className="flex-1 space-y-2">
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

        <section aria-labelledby="mylist-heading" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 id="mylist-heading" className="text-xl font-bold">
              Daftar Saya
            </h2>
            {/* Mengarahkan langsung ke halaman MyList.jsx */}
            <Link
              to="/mylist"
              className="text-xs text-gray-400 transition-colors hover:text-white"
            >
              Lihat Semua
            </Link>
          </div>

          {watchList.length === 0 ? (
            <div className="rounded-xl border border-gray-800 bg-[#22282A] py-12 text-center text-sm text-gray-400">
              Belum ada film di Daftar Saya.
            </div>
          ) : (
            <div className="relative w-full">
              <div className="-my-16 flex scrollbar-none gap-2.5 overflow-x-auto overflow-y-visible py-20 sm:gap-4 xl:gap-5">
                {watchList.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    variant="portrait"
                    popup={true}
                    watchlist={watchList}
                    onToggleWatchlist={handleToggleWatchlist}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
