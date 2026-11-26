export const getUserWatchlist = () => {
  const currentUser = JSON.parse(localStorage.getItem('current_user'));
  return currentUser?.watchlist || [];
};

export const toggleUserWatchlist = (movie) => {
  const currentUser = JSON.parse(localStorage.getItem('current_user'));
  if (!currentUser) {
    alert('Silakan login terlebih dahulu!');
    return [];
  }

  const currentWatchlist = currentUser.watchlist || [];
  const isExist = currentWatchlist.some((item) => item.id === movie.id);

  const updatedWatchlist = isExist
    ? currentWatchlist.filter((item) => item.id !== movie.id)
    : [...currentWatchlist, movie];

  // 1. Update sesi user aktif
  const updatedUser = { ...currentUser, watchlist: updatedWatchlist };
  localStorage.setItem('current_user', JSON.stringify(updatedUser));

  // 2. Sync ke array users_list utama
  const usersList = JSON.parse(localStorage.getItem('users_list')) || [];
  const updatedUsersList = usersList.map((user) =>
    user.email === updatedUser.email ? updatedUser : user,
  );
  localStorage.setItem('users_list', JSON.stringify(updatedUsersList));

  return updatedWatchlist;
};
