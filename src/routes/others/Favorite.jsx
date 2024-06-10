import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clear, remove } from "../../toolkit/slices/favoriteSlice";
import { IoEyeSharp } from "react-icons/io5";

const Favorite = () => {
  const { favoriteList } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  // const tag = "movie" || "tv"

  // console.log(favoriteList);
  return (
    <main className="min-h-screen pt-24 bg-fixed bg-cover bg-movie">
      <div className="flex items-center justify-between w-[90%] mx-auto">
        <h1 className="mb-2 text-2xl font-bold leading-tight text-white">
          My Favorite List
        </h1>
        <p
          className="flex items-center gap-2 text-white transition-all duration-700 cursor-pointer hover:translate-x-2"
          onClick={() => dispatch(clear())}
        >
          <span>Clear All</span>
          <MdDelete className="w-8 h-8 p-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
        </p>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5 text-white cursor-pointer w-[90%] mx-auto">
        {favoriteList.length === 0 ? (
          <p className="">Your cart is Empty</p>
        ) : (
          favoriteList.map((movie) => (
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

                <button
                  className="flex items-center gap-2"
                  onClick={() => dispatch(remove(movie))}
                >
                  <MdDelete className="w-8 h-8 p-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                </button>
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
          ))
        )}
      </section>
    </main>
  );
};

export default Favorite;
