/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
// import { CiHeart } from "react-icons/ci";
import Swip from "../../components/Swip";
import PopActor from "../../components/PopActor";
import Category from "../../components/Category";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Pop from "../../components/Pop";
import Top from "../../components/Top";
import Slide from "../../components/Slide";

// import "./styles.css";

const Home = () => {
  const navigate = useNavigate();

  const [trending, setTrending] = useState("day");
  const [data, setData] = useState([]);
  // console.log(data);

  useEffect(() => {
    const movies = async () => {
      let api = `https://api.themoviedb.org/3/trending/movie/${trending}`;
      const response = await fetch(
        api + `?api_key=${import.meta.env.VITE_API_KEY}`
      );
      try {
        const data = await response.json();
        // console.log(data);
        setData(data.results);
      } catch (error) {
        throw new Error(error);
      }
    };
    movies();
  }, [trending]);

  const handleNavigate = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <main className="min-h-screen bg-fixed bg-cover bg-movie">
      <Slide />
      <div className="flex flex-col justify-center h-full w-[90%] mx-auto">
        {/* <div className="w-full">
          <h1 className="w-full h-full pt-20 mb-2 text-6xl font-bold leading-tight text-center text-transparent bg-black bg-opacity-95 bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Discover, Millions of movies, TV shows and artists...
          </h1>
          <h5 className="text-4xl font-bold text-white bg-gradient-to-r from-pink-500 to-rose-500 border-l-[7px] leading-2 w-1/3 px-3 rounded-r-md mx-[33%] ">
            In a single platform
          </h5>
        </div> */}

        <div className="mt-24" id="trending">
          <div className="flex items-center justify-between pb-5 border-b-2 border-pink-500">
            <p className="px-2 text-2xl font-bold text-transparent rounded-sm bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              Trending Movies
            </p>
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

          <Swiper
            Swiper
            watchSlidesProgress={true}
            slidesPerView={5}
            className="my-10 space-x-5 cursor-pointer mySwiper"
          >
            {data.map((movie) => (
              <SwiperSlide
                key={movie.id}
                className="w-[300px] h-[450px] bg-cover bg-gradient-to-r from-slate-950 to-black px-5 pt-3 rounded-md hover:scale-105 transition-all duration-700"
                onClick={() => handleNavigate(movie.id)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full rounded-md"
                />
                <div className="flex items-center justify-between mt-3">
                  <h3 className="my-2 text-sm font-bold text-transparent text-white bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                    {movie.title || movie.name}
                  </h3>

                  <CircularProgressbar
                    value={movie.vote_average * 10}
                    text={`${movie.vote_average * 10}%`}
                    className="w-10 h-10"
                    styles={buildStyles({
                      textColor: "white",
                      pathColor: "red",
                      trailColor: "white",
                    })}
                  />
                </div>
                <p className="px-2 text-transparent border-l-4 border-pink-400 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                  {movie.release_date || movie.first_air_date}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Swip />
      <Pop />
      <Top />
      <PopActor />
    </main>
  );
};

export default Home;
