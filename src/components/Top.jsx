/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Top() {
    const [trending, setTrending] = useState("movie");
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const getSeries = async () => {
            let api = `https://api.themoviedb.org/3/${trending}/top_rated`;
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
        getSeries();
    }, [trending]);

    const handleNavigate = (id) => {
        navigate(`/${trending}/${id}`);
    };

    return (
        <section className="py-10 bg-gradient-to-r from-stone-900 via-slate-900 to-neutral-900">
            <div className="flex items-center justify-between pb-5 w-[90%] mx-auto border-b border-pink-500">
                <h2 className="px-2 text-2xl font-bold text-transparent rounded-md bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                    Top Rated
                </h2>

                <div className="flex items-center justify-between border-b-2 border-slate-900">
                    <div className="flex gap-4 text-white">
                        <span
                            className={
                                trending === "movie"
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 px-2 rounded-full cursor-pointer"
                                    : "px-2 cursor-pointer rounded-full"
                            }
                            onClick={() => setTrending("movie")}
                        >
                            Movies
                        </span>
                        <span
                            className={
                                trending === "tv"
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 px-2 rounded-full cursor-pointer"
                                    : "px-2 cursor-pointer rounded-full"
                            }
                            onClick={() => setTrending("tv")}
                        >
                            Tv Shows
                        </span>
                    </div>
                </div>
            </div>
            {/* for destop */}
            <Swiper
                Swiper
                watchSlidesProgress={true}
                slidesPerView={5}
                className="my-10 space-x-5 cursor-pointer mySwiper w-[90%] hidden lg:block"
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

            {/* for tablet */}
            <Swiper
                Swiper
                watchSlidesProgress={true}
                slidesPerView={3}
                className="my-10 space-x-5 cursor-pointer mySwiper w-[90%] hidden md:block lg:hidden"
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

            {/* for mobile */}
            <Swiper
                Swiper
                watchSlidesProgress={true}
                slidesPerView={1}
                className="my-10 space-x-5 cursor-pointer mySwiper w-[90%] md:hidden"
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
        </section>
    );
}
