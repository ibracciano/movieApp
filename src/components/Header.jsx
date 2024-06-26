import { useState } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { RiMovie2Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useSelector } from "react-redux";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const { total } = useSelector((state) => state.favorite);

  const [openMovies, setOpenMovies] = useState(false);
  const [openTv, setOpenTv] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // cette ecriture permet d'ajouter la recherche sur URL
    navigate(`/search?q=${query}`);
    setQuery("");
  }

  return (
    <header className="fixed top-0 z-50 w-full py-2 text-white bg-black shadow-sm">
      <nav className="flex items-center justify-between w-[90%] lg:w-[80%] mx-auto font-semibold">
        <Link to="" className="flex items-center gap-1 text-2xl">
          <RiMovie2Fill style={{ color: "red" }} size={40} />
          <span className="font-bold">MovieS</span>
        </Link>
        {/* version desktop */}
        <ul className="hidden gap-7 md:flex">
          <li className="relative" onClick={() => setOpenMovies(!openMovies)}>
            <p className="flex items-center cursor-pointer">
              <span>Movies</span>
              {openMovies ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </p>

            <ul
              className={`absolute py-1 bg-gradient-to-r from-slate-950 to-black w-[150px] rounded-md ${
                openMovies ? "visible" : "hidden"
              }`}
            >
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="movies/nowPlaying">Now Playing</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="movies/top">Top Rated</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="movies/popular">Popular</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="movies/upcoming">Upcoming</Link>
              </li>
            </ul>
          </li>

          <li className="relative" onClick={() => setOpenTv(!openTv)}>
            <p className="flex items-center cursor-pointer">
              <span>Tv</span>
              {openTv ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </p>

            <ul
              className={`absolute py-1 bg-gradient-to-r from-slate-950 to-black w-[150px] rounded-md ${
                openTv ? "visible" : "hidden"
              }`}
            >
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="tv/airingtoday">Airing Today</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="tv/ontheair">On the Air</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="tv/popular">Popular</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="tv/toprated">Top Rated</Link>
              </li>
            </ul>
          </li>

          <li className="relative">
            <NavLink
              to="category"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-semibold" : ""
              }
            >
              Categories
            </NavLink>
          </li>

          <li className="relative">
            <NavLink
              to="favorite"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-semibold" : ""
              }
            >
              Favorites
            </NavLink>
            <span className="absolute inline-flex items-center justify-center w-5 h-5 bg-red-500 rounded-full -right-3 -top-2 ">
              {total}
            </span>
          </li>

          <li className="relative">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-semibold" : ""
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <form
          className="hidden md:flex items-center gap-2 w-[30%] border-1 bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-2 rounded-md"
          onSubmit={handleSubmit}
        >
          <IoSearch className="" />
          <input
            value={query.trim().toLowerCase()}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search movie..."
            className="w-full rounded-md outline-none bg-gradient-to-r from-purple-500 to-pink-500 "
          />
        </form>
        <button
          className="flex items-center justify-center w-8 h-8 p-1 text-white border-2 rounded-md md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {!openMenu ? (
            <RxHamburgerMenu />
          ) : (
            <RxCross2 onClick={() => setOpenMenu(!openMenu)} />
          )}
        </button>
      </nav>
      {/* version mobile */}
      {openMenu && (
        <ul className="absolute left-0 flex flex-col w-full gap-4 py-3 pl-6 bg-gradient-to-r from-slate-950 to-black md:hidden top-15">
          <li className="relative" onClick={() => setOpenMovies(!openMovies)}>
            <p className="flex items-center cursor-pointer">
              <span>Movies</span>
              {openMovies ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </p>

            <ul
              className={`mt-2 py-1 bg-gradient-to-r from-slate-950 to-black border w-[150px] rounded-md left-20 ${
                openMovies ? "visible" : "hidden"
              }`}
            >
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="movies/nowPlaying">Now Playing</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="movies/top">Top Rated</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="movies/popular">Popular</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="movies/upcoming">Upcoming</Link>
              </li>
            </ul>
          </li>

          <li className="relative" onClick={() => setOpenTv(!openTv)}>
            <p className="flex items-center cursor-pointer">
              <span>Tv</span>
              {openTv ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </p>

            <ul
              className={`mt-2 py-1 bg-gradient-to-r from-slate-950 to-black border w-[150px] rounded-md ${
                openTv ? "visible" : "hidden"
              }`}
            >
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="tv/airingtoday">Airing Today</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="tv/ontheair">On the Air</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="tv/popular">Popular</Link>
              </li>
              <li className="w-full px-2 py-1 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text hover:opacity-50">
                <Link to="tv/toprated">Top Rated</Link>
              </li>
            </ul>
          </li>

          <li className="relative">
            <NavLink
              to="category"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-semibold" : ""
              }
            >
              Categories
            </NavLink>
          </li>

          <li className="relative">
            <NavLink
              to="favorite"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-semibold" : ""
              }
            >
              Favorites
            </NavLink>
            <span className="absolute inline-flex items-center justify-center w-5 h-5 bg-red-500 rounded-full left-20 -top-0 ">
              {total}
            </span>
          </li>

          <li className="relative">
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-semibold" : ""
              }
            >
              About
            </NavLink>
          </li>

          <form
            className="flex items-center w-[90%] gap-2 px-3 py-2 rounded-md border-1 bg-gradient-to-r from-purple-500 to-pink-500"
            onSubmit={handleSubmit}
          >
            <IoSearch className="" />
            <input
              value={query.trim().toLowerCase()}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search movie..."
              className="w-full rounded-md outline-none bg-gradient-to-r from-purple-500 to-pink-500 "
            />
          </form>
        </ul>
      )}
    </header>
  );
};

export default Header;
