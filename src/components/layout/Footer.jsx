import { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';

import logoFull from '../../assets/images/brands/logo-full.png';
import { GENRE_MASTER } from '../../data/dummyMovies';

const BANTUAN = ['FAQ', 'Kontak Kami', 'Privasi', 'Syarat & Ketentuan'];

const Footer = () => {
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isBantuanOpen, setIsBantuanOpen] = useState(false);

  const genres = Object.values(GENRE_MASTER);

  return (
    <footer className="bg-page-header-background w-full border-t border-gray-800 px-6 py-8 text-gray-300 md:px-16 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:justify-between md:gap-12">
        <div className="flex flex-col gap-3 md:w-1/4">
          <div className="flex items-center gap-2">
            <img
              src={logoFull}
              alt="CHILL Logo"
              className="h-auto w-24 md:w-32 lg:w-36"
            />
          </div>
          <p className="text-xs text-gray-400 md:text-sm">
            © 2023 Chill All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-1 md:flex-row md:justify-end md:gap-16">
          <div className="flex flex-col">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between py-3 text-sm font-bold text-white md:pointer-events-none md:cursor-default md:border-none md:py-0 md:pb-4 md:text-base"
              onClick={() => setIsGenreOpen((prev) => !prev)}
            >
              <span>Genre</span>
              <span className="md:hidden">
                {isGenreOpen ? (
                  <MdKeyboardArrowDown className="h-5 w-5" />
                ) : (
                  <MdKeyboardArrowRight className="h-5 w-5" />
                )}
              </span>
            </button>

            <ul
              className={`${
                isGenreOpen ? 'grid' : 'hidden'
              } grid-cols-2 gap-x-6 gap-y-2.5 pt-3 pb-4 text-xs md:grid md:grid-cols-[repeat(4,max-content)] md:gap-x-8 md:pt-0 md:pb-0 md:text-sm`}
            >
              {genres.map((genre, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="whitespace-nowrap text-gray-400 transition-colors hover:text-white hover:underline"
                  >
                    {genre}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between py-3 text-sm font-bold text-white md:pointer-events-none md:cursor-default md:border-none md:py-0 md:pb-4 md:text-base"
              onClick={() => setIsBantuanOpen((prev) => !prev)}
            >
              <span>Bantuan</span>
              <span className="md:hidden">
                {isBantuanOpen ? (
                  <MdKeyboardArrowDown className="h-5 w-5" />
                ) : (
                  <MdKeyboardArrowRight className="h-5 w-5" />
                )}
              </span>
            </button>

            <ul
              className={`${
                isBantuanOpen ? 'flex' : 'hidden'
              } flex-col gap-2.5 pt-3 pb-4 text-xs md:flex md:pt-0 md:pb-0 md:text-sm`}
            >
              {BANTUAN.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 transition-colors hover:text-white hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
