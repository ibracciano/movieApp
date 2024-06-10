// import React from 'react'

// import { CiHeart } from "react-icons/ci";
import { Link, useLoaderData } from "react-router-dom";

const Search = () => {
  const { results } = useLoaderData();
  // console.log(results);

  return (
    <main className="min-h-screen pt-20 bg-fixed bg-cover bg-movie">
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5 text-white cursor-pointer w-[90%] mx-auto">
        {results.filter(item => item.poster_path !== null).map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="px-3 py-5 transition-all duration-700 rounded-md bg-gradient-to-r from-slate-950 to-black hover:saturate-200 hover:scale-110"
          // onClick={() => handleNavigate(movie.id)}
          >
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center justify-between mt-3">
              <h3 className="my-2 text-sm font-bold text-transparent text-white bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                {movie.title}
              </h3>

              {/* <button className="p-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500">
                <CiHeart />
              </button> */}
            </div>
            <p className="px-2 text-transparent border-l-4 border-pink-400 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
              {movie.release_date}
            </p>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Search;
