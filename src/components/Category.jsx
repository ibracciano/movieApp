import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";

import { Link, useLoaderData } from "react-router-dom";

const Category = ({ data }) => {
  const [category, setCategory] = useState("category");
  const [item, setItem] = useState([]);

  console.log(item);

  const handleSearch = () => {
    const value = data.find((item) => item.name === category);
    setItem(value);
  };

  const { results } = useLoaderData();
  const moviesCategory = results.filter((movie) =>
    movie.genre_ids.includes(item?.id)
  );
  // console.log(moviesCategory);

  return (
    <div>
      <section className="py-2 mt-10 text-white w-[90%] mx-auto">
        <div className="mx-[25%] mb-10 flex flex-col md:flex-row justify-center gap-4">
          <span>Search by Category</span>
          <select
            name=""
            id=""
            className="text-pink-600 bg-black border border-white rounded-md outline-none "
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="category">choose a category</option>
            {data.map((categorie) => (
              <option value={categorie.name} key={categorie.id}>
                {categorie.name}
              </option>
            ))}
          </select>

          <button
            className="px-2 py-1 font-semibold rounded-md bg-gradient-to-r from-pink-500 to-rose-500 scl hover:scale-105"
            onClick={handleSearch}
          >
            Search...
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {moviesCategory.map((movie) => (
            <div
              key={movie.id}
              className="px-3 py-5 transition-all duration-700 rounded-md bg-gradient-to-r from-slate-950 to-black hover:saturate-200 hover:scale-110"
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="rounded-md"
              />
              <div className="flex items-center justify-between mt-3">
                <h3 className="my-2 text-sm font-bold text-transparent text-white bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                  {movie.title || movie.name}
                </h3>
              </div>
              <div className="flex justify-between mt-5">
                <p className="px-2 text-transparent border-l-4 border-pink-400 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                  {movie.release_date || movie.first_air_date}
                </p>
                <button>
                  <Link
                    to={`/movie/${movie.id}`}
                    className="flex items-center gap-2"
                  >
                    <IoEyeSharp className="w-8 h-8 p-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Category;
