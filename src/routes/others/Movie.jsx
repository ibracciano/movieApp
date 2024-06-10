// import React from 'react'

import { useState } from "react";
import { CiHeart } from "react-icons/ci";

import { MdDelete, MdOutlinePlayCircleFilled } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { Link, useLoaderData } from "react-router-dom";
import PopActor from "../../components/PopActor";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../toolkit/slices/favoriteSlice";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Movie = () => {
  const movie = useLoaderData();
  console.log(movie);
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((state) => state.favorite);

  const [active, setActive] = useState(false);

  const date = movie.release_date;
  const year = date.slice(0, 4);
  const countries = movie.origin_country;
  const hour = Math.floor(movie.runtime / 60);
  const min = movie.runtime % 60;
  const score = (movie.vote_average * 10).toFixed(0);
  //   console.log(per);



  const activeIframe = () => {
    setActive(true);
  };

  return (
    <main className="min-h-screen bg-fixed bg-cover bg-movie">
      <section className="pt-24 w-full md:w-[90%] mx-auto relative">
        <div className="flex flex-col items-center gap-10 text-white bg-cover rounded-md md:flex-row bg-reel">
          <div className="w-full md:w-[30%] lg:[20%]">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-md"
            />
          </div>

          <div className="p-5 bg-black bg-opacity-50 w-full md:w-[70%] lg:[80%] ">
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text">
              {movie.title}({year})
            </h2>

            <div className="flex gap-2">
              <span>
                {date}({countries[0]})
              </span>
              <p>
                {movie.genres.map((item) => (
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

            <div className="flex items-center gap-10 mt-3">
              <div className="flex items-center gap-2">
                <span className="font-bold">User rating</span>

                <CircularProgressbar
                  value={score}
                  text={`${score}%`}
                  className="w-10 h-10"
                  styles={buildStyles({
                    textColor: "white",
                    pathColor: "red",
                    trailColor: "white",
                  })}
                />
              </div>
              {favoriteList.find((item) => item.id === movie.id) ? (
                <button
                  className="flex items-center gap-2"
                  onClick={() => dispatch(remove(movie))}
                >
                  <span>remove to favorites</span>
                  <MdDelete className="w-8 h-8 p-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                </button>
              ) : (
                <button
                  className="flex items-center gap-2"
                  onClick={() => dispatch(add(movie))}
                >
                  <span>Add to favorites</span>
                  <CiHeart className="w-8 h-8 p-1 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" />
                </button>
              )}
            </div>

            <div className="mt-5">
              <span className="font-semibold">Synopsis</span>
              <p className="italic">{movie.overview}</p>
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
              src={movie.homepage}
              width="1280"
              height="620"
              className="z-30"
              allowFullScreen
            ></iframe>
          </div>
        )}

      </section>
      <PopActor />
    </main>
  );
};

export default Movie;
