import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../toolkit/slices/favoriteSlice";
import { MdDelete } from "react-icons/md";

export default function Slide() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const { favoriteList } = useSelector((state) => state.favorite);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    const popularMovies = async () => {
      let api = "https://api.themoviedb.org/3/movie/popular";
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
    popularMovies();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[100%] h-screen"
      >
        <SwiperSlide className="relative flex bg-cover bg-rat">
          <div className="flex flex-col items-center justify-center w-full h-full bg-opacity-85 bg-slate-950"></div>
          <div className="w-[70%] flex gap-5 absolute left-[15%] top-[20%]">
            {data.slice(0, 3).map((movie) => (
              <div key={movie.key} className="relative group">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                  className="p-4 rounded-md bg-slate-950"
                />
                <div className="absolute inset-0 py-5 bg-black opacity-0 px-7 bg-opacity-80 group-hover:opacity-100">
                  <h3 className="text-lg font-bold  text-transparent text-white max-w-[200px] bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                    {movie.title}
                  </h3>
                </div>
                {favoriteList.find((item) => item.id === movie.id) ? (
                  <button
                    className="absolute top-[50%] left-[20%] flex gap-2 items-center border-2 border-red-600 p-1 rounded-full hover:border-white opacity-0 group-hover:opacity-100"
                    onClick={() => dispatch(remove(movie))}
                  >
                    <MdDelete
                      style={{ color: "white" }}
                      size={30}
                      className="bg-red-600 rounded-full hover:bg-black"
                    />
                  </button>
                ) : (
                  <button
                    className="absolute top-[50%] left-[20%] flex gap-2 items-center border-2 border-red-600 p-1 rounded-full hover:border-white opacity-0 group-hover:opacity-100"
                    onClick={() => dispatch(add(movie))}
                  >
                    <CiHeart
                      style={{ color: "white" }}
                      size={30}
                      className="bg-red-600 rounded-full hover:bg-black"
                    />
                  </button>
                )}

                <button
                  className="absolute top-[50%] left-[40%] flex gap-2 items-center border-2 border-red-600 p-1 rounded-full hover:border-white opacity-0 group-hover:opacity-100"
                  onClick={() => handleNavigate(movie.id)}
                >
                  <IoEyeSharp
                    style={{ color: "white" }}
                    size={30}
                    className="bg-red-600 rounded-full hover:bg-black"
                  />
                </button>
                <CircularProgressbar
                  value={movie.vote_average * 10}
                  text={`${movie.vote_average * 10}%`}
                  className="absolute w-10 h-10 top-[50%] left-[60%] opacity-0 group-hover:opacity-100"
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "red",
                    trailColor: "white",
                  })}
                />
                <p className="absolute text-white text-[8px] bottom-0 left-0 px-8 py-3 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  {movie.overview}
                </p>
              </div>
            ))}
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative flex bg-cover bg-rat">
          <div className="flex flex-col items-center justify-center w-full h-full bg-opacity-85 bg-slate-950"></div>
          <div className="w-[70%] flex gap-5 absolute left-[15%] top-[20%]">
            {data.slice(3, 6).map((movie) => (
              <div key={movie.key} className="relative group">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                  className="p-4 rounded-md bg-slate-950"
                />
                <div className="absolute inset-0 py-5 bg-black opacity-0 px-7 bg-opacity-80 group-hover:opacity-100">
                  <h3 className="text-lg font-bold  text-transparent text-white max-w-[200px] bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                    {movie.title}
                  </h3>
                </div>
                {favoriteList.find((item) => item.id === movie.id) ? (
                  <button
                    className="absolute top-[50%] left-[20%] flex gap-2 items-center border-2 border-red-600 p-1 rounded-full hover:border-white opacity-0 group-hover:opacity-100"
                    onClick={() => dispatch(remove(movie))}
                  >
                    <MdDelete
                      style={{ color: "white" }}
                      size={30}
                      className="bg-red-600 rounded-full hover:bg-black"
                    />
                  </button>
                ) : (
                  <button
                    className="absolute top-[50%] left-[20%] flex gap-2 items-center border-2 border-red-600 p-1 rounded-full hover:border-white opacity-0 group-hover:opacity-100"
                    onClick={() => dispatch(add(movie))}
                  >
                    <CiHeart
                      style={{ color: "white" }}
                      size={30}
                      className="bg-red-600 rounded-full hover:bg-black"
                    />
                  </button>
                )}

                <button
                  className="absolute top-[50%] left-[40%] flex gap-2 items-center border-2 border-red-600 p-1 rounded-full hover:border-white opacity-0 group-hover:opacity-100"
                  onClick={() => handleNavigate(movie.id)}
                >
                  <IoEyeSharp
                    style={{ color: "white" }}
                    size={30}
                    className="bg-red-600 rounded-full hover:bg-black"
                  />
                </button>
                <CircularProgressbar
                  value={movie.vote_average * 10}
                  text={`${movie.vote_average * 10}%`}
                  className="absolute w-10 h-10 top-[50%] left-[60%] opacity-0 group-hover:opacity-100"
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "red",
                    trailColor: "white",
                  })}
                />
                <p className="absolute text-white text-[8px] bottom-0 left-0 px-8 py-3 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  {movie.overview}
                </p>
              </div>
            ))}
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative flex bg-cover bg-rat">
          <div className="flex flex-col items-center justify-center w-full h-full bg-opacity-85 bg-slate-950"></div>
          <div className="w-[70%] flex gap-5 absolute left-[15%] top-[20%]">
            {data.slice(9, 12).map((movie) => (
              <div key={movie.key} className="relative group">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                  className="p-4 rounded-md bg-slate-950"
                />
                <div className="absolute inset-0 py-5 bg-black opacity-0 px-7 bg-opacity-80 group-hover:opacity-100">
                  <h3 className="text-lg font-bold  text-transparent text-white max-w-[200px] bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">
                    {movie.title}
                  </h3>
                </div>
                {favoriteList.find((item) => item.id === movie.id) ? (
                  <button
                    className="absolute top-[50%] left-[20%] flex gap-2 items-center border-2 border-red-600 p-1 rounded-full hover:border-white opacity-0 group-hover:opacity-100"
                    onClick={() => dispatch(remove(movie))}
                  >
                    <MdDelete
                      style={{ color: "white" }}
                      size={30}
                      className="bg-red-600 rounded-full hover:bg-black"
                    />
                  </button>
                ) : (
                  <button
                    className="absolute top-[50%] left-[20%] flex gap-2 items-center border-2 border-red-600 p-1 rounded-full hover:border-white opacity-0 group-hover:opacity-100"
                    onClick={() => dispatch(add(movie))}
                  >
                    <CiHeart
                      style={{ color: "white" }}
                      size={30}
                      className="bg-red-600 rounded-full hover:bg-black"
                    />
                  </button>
                )}

                <button
                  className="absolute top-[50%] left-[40%] flex gap-2 items-center border-2 border-red-600 p-1 rounded-full hover:border-white opacity-0 group-hover:opacity-100"
                  onClick={() => handleNavigate(movie.id)}
                >
                  <IoEyeSharp
                    style={{ color: "white" }}
                    size={30}
                    className="bg-red-600 rounded-full hover:bg-black"
                  />
                </button>
                <CircularProgressbar
                  value={movie.vote_average * 10}
                  text={`${movie.vote_average * 10}%`}
                  className="absolute w-10 h-10 top-[50%] left-[60%] opacity-0 group-hover:opacity-100"
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "red",
                    trailColor: "white",
                  })}
                />
                <p className="absolute text-white text-[8px] bottom-0 left-0 px-8 py-3 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                  {movie.overview}
                </p>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
