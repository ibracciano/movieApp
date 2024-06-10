// import React from 'react'

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

const Cast = ({ id }) => {

    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getCast = async () => {
            const api = `https://api.themoviedb.org/3/person/${id}/movie_credits`
            const response = await fetch(
                api + `?api_key=${import.meta.env.VITE_API_KEY}`
            );
            try {
                const data = await response.json();
                // console.log(data);
                setCast(data.cast);
            } catch (error) {
                throw new Error(error);
            }
        }
        getCast();
    }, [id])

    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/movie/${id}`)
    }



    return (
        <section className="mt-5">
            {/* for desktop */}
            <Swiper className="hidden gap-2 lg:flex mySwiper"
                watchSlidesProgress={true}
                slidesPerView={6}>
                {cast.map((cast) => (
                    <SwiperSlide key={cast.id} className="relative w-[80px] h-[200px] p-2 space-x-2 bg-black rounded-md group"
                        onClick={() => handleNavigate(cast.id)}>
                        <img src={`https://image.tmdb.org/t/p/w500/${cast.poster_path}`} alt={cast.title} className="inline-block w-full h-full rounded-md" />
                        <h3 className="absolute text-[9px] text-center text-white inset-0 bg-black rounded-md bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">{cast.title}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* for tablet */}
            <Swiper className="hidden gap-2 md:flex mySwiper lg:hidden"
                watchSlidesProgress={true}
                slidesPerView={5}>
                {cast.map((cast) => (
                    <SwiperSlide key={cast.id} className="relative w-[80px] h-[200px]  p-2 space-x-2 bg-black rounded-md group"
                        onClick={() => handleNavigate(cast.id)}>
                        <img src={`https://image.tmdb.org/t/p/w500/${cast.poster_path}`} alt={cast.title} className="inline-block w-full h-full rounded-md" />
                        <h3 className="absolute md:text-[7px] lg:text-[9px] text-center text-white inset-0 bg-black rounded-md bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">{cast.title}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* for mobile */}
            <Swiper className="flex gap-2 mySwiper md:hidden"
                watchSlidesProgress={true}
                slidesPerView={3}>
                {cast.map((cast) => (
                    <SwiperSlide key={cast.id} className="relative w-[80px] h-[200px] p-2 space-x-2 bg-black rounded-md group"
                        onClick={() => handleNavigate(cast.id)}>
                        <img src={`https://image.tmdb.org/t/p/w500/${cast.poster_path}`} alt={cast.title} className="inline-block w-full h-full rounded-md" />
                        <h3 className="absolute md:text-[7px] lg:text-[9px] text-center text-white inset-0 bg-black rounded-md bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">{cast.title}</h3>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Cast