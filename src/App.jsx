import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/others/Layout";
import ErrorPage from "./routes/others/ErrorPage";
import Home from "./routes/others/Home";
import Favorite from "./routes/others/Favorite";



import About from "./routes/others/About";
import { TvId, actor, airingTv, movies, moviesId, ontheairTv, popularMovies, popularTv, searchCategory, searchMovie, topMovies, topRatedTv, upcomingMovies } from "./api/api";
import NowPlaying from "./routes/movies/NowPlaying";
import Popular from "./routes/movies/Popular";

import TopRated from "./routes/movies/TopRated";

import Upcoming from "./routes/movies/Upcoming";
import AiringToday from "./routes/tv/AiringToday";
import OnTheAir from "./routes/tv/OnTheAir";
import TopRatedTv from "./routes/tv/TopRatedTv";
import PopularTv from "./routes/tv/PopularTv";
import Movie from "./routes/others/Movie";
import Tv from "./routes/others/Tv";
import Actor from "./routes/others/Actor";
import Search from "./routes/others/Search";
import Categorie from "./routes/others/Categorie";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
          // loader: movies,
        },
        {
          path: "movie/:id",
          element: <Movie />,
          loader: moviesId,
        },
        {
          path: "movies/nowPlaying",
          element: <NowPlaying />,
          loader: movies,
        },
        {
          path: "movies/popular",
          element: <Popular />,
          loader: popularMovies,
        },
        {
          path: "movies/top",
          element: <TopRated />,
          loader: topMovies,
        },
        {
          path: "movies/upcoming",
          element: <Upcoming />,
          loader: upcomingMovies,
        },
        {
          path: "favorite",
          element: <Favorite />,
        },

        {
          path: "tv/:id",
          element: <Tv />,
          loader: TvId,
        },
        {
          path: "tv/airingtoday",
          element: <AiringToday />,
          loader: airingTv,
        },
        {
          path: "tv/ontheair",
          element: <OnTheAir />,
          loader: ontheairTv,
        },
        {
          path: "tv/popular",
          element: <PopularTv />,
          loader: popularTv,
        },
        {
          path: "tv/toprated",
          element: <TopRatedTv />,
          loader: topRatedTv,
        },
        {
          path: "actor/:id",
          element: <Actor />,
          loader: actor,
        },

        {
          path: "about",
          element: <About />,
        },
        {
          path: "search",
          element: <Search />,
          loader: searchMovie,
        },
        {
          path: "category",
          element: <Categorie />,
          loader: searchCategory,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
