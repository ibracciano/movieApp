// import React from 'react'

import { useLoaderData } from "react-router-dom";
import Cast from "../../components/Cast";

const Actor = () => {
  const actor = useLoaderData();
  // console.log(actor);



  return (
    <section className="bg-cover py-28 bg-movie">
      <div className="flex items-center gap-10 w-[90%] mx-auto">
        <div className="w-[35%]">
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
            className="w-full rounded-md"
          />
        </div>

        <div className="w-[65%] text-white">
          <h2 className="text-5xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text">
            {actor.name}
          </h2>
          <p className="flex flex-col my-5">
            <span className="mb-2 text-xl font-bold">Biography</span>
            <span className={` ${actor.biography.length > 300 ? "text-[10px]" : "text-sm"}`}>{actor.biography}</span>
          </p>

          <div>
            <span>Know for: </span>
            <Cast id={actor.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actor;
