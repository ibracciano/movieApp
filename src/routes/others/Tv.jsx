import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { Link, useLoaderData } from "react-router-dom";
import PopActor from "../../components/PopActor";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../toolkit/slices/favoriteSlice";

const Tv = () => {
  const Tv = useLoaderData();
  // console.log(Tv);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((state) => state.favorite);

  const date_diff_first = Tv.first_air_date;
  //   const date_diff_last = Tv.last_air_date;
  const year = date_diff_first.slice(0, 4);
  const countries = Tv.production_countries;
  const hour = Math.ceil(Tv.episode_run_time[0] / 60) || 0;
  const min = Tv.episode_run_time[0] % 60 || 0;
  const score = Tv.vote_average.toFixed(1);
  const per = Math.floor((Tv.vote_average / 10) * 5);
  // const per2 = Math.floor((Tv.seasons[0].vote_average / 10) * 5);

  const activeIframe = () => {
    setActive(true);
  };

  const stars = Array(per).fill(0);
  // const emptyStars = Array(per2).fill(0);
  return (
    <main className="min-h-screen bg-fixed bg-cover bg-cinema">
      <section className="pt-24 w-[90%] mx-auto relative">
        <div className="flex items-center gap-10 text-white bg-cover rounded-md bg-reel">
          <div className="w-[20%]">
            <img
              src={`https://image.tmdb.org/t/p/original/${Tv.poster_path}`}
              alt={Tv.name}
              className="w-full h-[300px] rounded-md"
            />
          </div>

          <div className="p-5 bg-black bg-opacity-50 w-[80%]">
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text">
              {Tv.name}({year})
            </h2>

            <div className="flex gap-2 text-sm">
              <span>
                | {date_diff_first}({countries[0].iso_3166_1})
              </span>
              <span>Total Episode : {Tv.number_of_episodes} | </span>
              <span>Total Saison : {Tv.number_of_seasons} | </span>
              <p>
                {Tv.genres.map((item) => (
                  <Link key={item.id} className="underline">
                    {item.name} ,
                  </Link>
                ))}
                {""}
              </p>
              <span>
                {hour}h {min}min
              </span>
            </div>

            <div className="flex items-center gap-10 mb-3 text-sm">
              <div className="flex items-center gap-2">
                <span>User rating : </span>

                <div className="flex gap-2">
                  {stars.map((_, index) => (
                    <span key={index}>
                      <FaStar className="text-yellow-500" />
                    </span>
                  ))}
                </div>
                <span className="flex items-center justify-center w-8 h-8 p-1 text-white rounded-full bg-gradient-to-r from-pink-500 to-rose-500">
                  {score}
                </span>
              </div>
              {favoriteList.find((item) => item.id === Tv.id) ? (
                <button className="flex items-center gap-2"
                  onClick={() => dispatch(remove(Tv))}>
                  <span>remove to favorites</span>
                  <CiHeart className="w-8 h-8 p-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                </button>
              ) : (
                <button className="flex items-center gap-2"
                  onClick={() => dispatch(add(Tv))}>
                  <span>Add to favorites</span>
                  <CiHeart className="w-8 h-8 p-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                </button>
              )}

            </div>

            <div className="text-[12px]">
              <span>Total Episode : {Tv.number_of_episodes} |</span>
              <span> Name : {Tv.name}, </span>
              <span> Total Season : {Tv.number_of_seasons}</span>
            </div>

            <div className="text-[12px]">
              <span>Seasons : </span>
              <span>Air date ({Tv.seasons[0].air_date}) | </span>
              <span>Name : {Tv.seasons[0].name} | </span>
              {/* <span>Season number : {Tv.seasons[0].season_number} | </span> */}
              <div className="flex gap-5 mt-2">
                <span>Created By : </span>
                <div>
                  {Tv.created_by.map((actor) => (
                    <span key={actor.id} className="underline">
                      {actor.name},{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5">
              <span className="font-semibold">Synopsis</span>
              <p className="italic text">{Tv.overview}</p>
            </div>
            <button
              className="flex items-center gap-3 mt-2 transition-all duration-700 hover:translate-x-2"
              onClick={activeIframe}
            >
              <span>Watch Demo</span>
              <MdOutlinePlayCircleFilled
                size={30}
                className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500"
              />
            </button>
          </div>
        </div>
        {active && (
          <div className="absolute top-16 left-0 right-0 w-[1280px] h-[620] overflow-y-hidden ">
            <button
              onClick={() => setActive(false)}
              className="flex items-center gap-2 text-red-500"
            >
              <RxCrossCircled size={20} />
              <span>Close</span>
            </button>
            <iframe
              src={Tv.homepage}
              width="1280"
              height="620"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <PopActor />
      </section>
    </main>
  );
};

export default Tv;
