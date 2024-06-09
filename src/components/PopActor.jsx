import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const PopActor = () => {
  const [actors, setActors] = useState([]);
  const [trending, setTrending] = useState("day");

  // console.log(actors);

  const navigate = useNavigate();

  useEffect(() => {
    const getActors = async () => {
      let api = `https://api.themoviedb.org/3/trending/person/${trending}`;
      const response = await fetch(
        api + `?api_key=${import.meta.env.VITE_API_KEY}`
      );
      try {
        const data = await response.json();
        // console.log(data);
        setActors(data.results);
      } catch (error) {
        throw new Error(error);
      }
    };
    getActors();
  }, [trending]);

  const handleNavigate = (id) => {
    navigate(`/actor/${id}`);
  };

  return (
    <main className="py-10 bg-black">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between pb-5 border-b border-pink-500">
          <h2 className="px-2 text-2xl font-bold text-transparent rounded-md bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Trending Actors
          </h2>

          <div className="flex items-center justify-between">
            <div className="flex gap-4 text-white">
              <span
                className={
                  trending === "day"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 px-2 rounded-full cursor-pointer"
                    : "px-2 cursor-pointer rounded-full"
                }
                onClick={() => setTrending("day")}
              >
                Day
              </span>
              <span
                className={
                  trending === "week"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 px-2 rounded-full cursor-pointer"
                    : "px-2 cursor-pointer rounded-full"
                }
                onClick={() => setTrending("week")}
              >
                Week
              </span>
            </div>
          </div>
        </div>

        <Swiper
          watchSlidesProgress={true}
          slidesPerView={5}
          className="my-10 space-x-5 cursor-pointer mySwiper"
        >
          {actors.map((actor) => (
            <SwiperSlide
              key={actor.id}
              className="w-[300px] group h-[350px] bg-cover bg-gradient-to-r from-slate-950 to-black px-5 pt-3 rounded-md hover:scale-105 transition-all duration-700 relative"
              onClick={() => handleNavigate(actor.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt={actor.title}
                className="w-full rounded-md"
              />
              <div className="absolute inset-0 top-0 flex flex-col items-center justify-center mt-3 bg-black opacity-0 bg-opacity-80 group-hover:opacity-100">
                <h3 className="my-2 text-sm font-bold text-transparent text-white bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                  {actor.name}
                </h3>
                {actor.known_for.map((item, index) => (
                  <p
                    key={index}
                    className="text-[12px] text-center max-w-28 text-transparent bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text"
                  >
                    {item.original_title}
                  </p>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default PopActor;
