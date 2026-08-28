import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../../assets/images/brands/logo-icon.png';
import logoFull from '../../assets/images/brands/logo-full.png';
import avatar from '../../assets/images/avatars/avatar-profile.png';

import {
  MdPerson,
  MdStar,
  MdExitToApp,
  MdExpandMore,
  MdExpandLess,
} from 'react-icons/md';

const NAV_LINKS = [
  {
    name: 'Series',
    path: '/series',
  },
  {
    name: 'Film',
    path: '/film',
  },
  {
    name: 'Daftar Saya',
    path: '/daftar-saya',
  },
];

const DROPDOWN_MENU = [
  {
    name: 'Profil Saya',
    path: '/profil',
    icon: MdPerson,
  },
  {
    name: 'Ubah Premium',
    path: '/favorit',
    icon: MdStar,
  },
];

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 lg:px-20 lg:py-7">
      <div className="flex items-center gap-4 lg:gap-20">
        <Link to="/" className="navbar__brand">
          <picture>
            <source media="(min-width: 768px)" srcSet={logoFull} />
            <img
              src={logoIcon}
              alt="CHILL Logo"
              className="h-auto w-5 md:w-25"
              aria-label="CHILL Logo"
            />
          </picture>
        </Link>
        <ul className="flex list-none items-center gap-4 lg:gap-20">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="navbar__item">
              <Link
                to={link.path}
                className="text-text-light-secondary text-xs font-medium hover:text-white lg:text-lg"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex items-center gap-2">
        <img
          src={avatar}
          alt="Profile"
          className="block w-5 rounded-full lg:w-10"
          aria-label="Profile"
        />

        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-expanded={isExpanded}
          aria-haspopup="true"
          className="focus:outline-none"
        >
          {isExpanded ? (
            <MdExpandLess className="h-auto w-4 cursor-pointer lg:w-7" />
          ) : (
            <MdExpandMore className="h-auto w-4 cursor-pointer lg:w-7" />
          )}
        </button>

        {/* Dropdown */}
        {isExpanded && (
          <div className="bg-body-background border-outline-border absolute top-6 right-0 z-999 h-auto w-30 rounded-sm border lg:top-15 lg:w-40">
            <ul className="list-none">
              {DROPDOWN_MENU.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name} className="navbar__dropdown-item">
                    <Link
                      to={item.path}
                      className="hover:bg-outline-border hover:text-primary-200 flex items-center gap-2 px-3 py-2"
                    >
                      <Icon className="h-auto w-4 lg:w-6" />
                      <span className="text-2xs font-medium whitespace-nowrap lg:text-sm">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
              <li className="navbar__dropdown-item border-outline-border/50 mt-1 border-t pt-1">
                <button
                  type="button"
                  onClick={() => {
                    // Logic Logout disini
                    setIsExpanded(false);
                  }}
                  className="hover:bg-outline-border flex w-full items-center gap-2 px-3 py-2 text-red-500 transition-colors"
                >
                  <MdExitToApp className="h-auto w-4 lg:w-6" />
                  <span className="text-2xs font-medium whitespace-nowrap lg:text-sm">
                    Keluar
                  </span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
