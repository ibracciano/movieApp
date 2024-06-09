// import React from 'react'

// import { CiHeart } from "react-icons/ci"
import { Link, useLoaderData } from "react-router-dom"

const Upcoming = () => {
    const { results } = useLoaderData()
    return (
        <main className="pt-24 bg-fixed bg-cover bg-movie">

            <h1 className="mb-2 text-6xl font-bold leading-tight text-center text-white">
                Upcoming films
            </h1>

            <section className="grid grid-cols-5 gap-4 mt-5 text-white cursor-pointer w-[90%] mx-auto">
                {results.map((movie) => (
                    <Link to={`/movie/${movie.id}`}
                        key={movie.id}
                        className="px-3 py-5 transition-all duration-700 rounded-md bg-gradient-to-r from-slate-950 to-black hover:saturate-200 hover:scale-110"
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded-md"
                        />
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
    )
}

export default Upcoming