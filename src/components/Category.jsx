import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState("category");
  const navigate = useNavigate();

  //   console.log(category);

  function handleNavigate() {
    if (category !== "category") {
      // cette ecriture permet d'ajouter la recherche sur URL
      navigate(`/category?q=${category}`);
      setCategory("category");
    }
  }

  return (
    <div>
      <section className="py-2 mt-10 text-white w-[90%] mx-auto">
        <div className="space-x-16 mx-[25%] mb-10">
          <span>Search by Category</span>
          <select
            name=""
            id=""
            className="text-pink-600 bg-black border border-white rounded-md outline-none "
          >
            <option value="category" onChange={() => setCategory("category")}>
              choose a category
            </option>
            <option value="action" onChange={() => setCategory("action")}>
              action
            </option>
            <option value="comedy" onChange={() => setCategory("comedy")}>
              comedy
            </option>
            <option value="horror" onChange={() => setCategory("horror")}>
              horror
            </option>
            <option value="romance" onChange={() => setCategory("romance")}>
              romance
            </option>
            <option value="scifi" onChange={() => setCategory("scifi")}>
              scifi
            </option>
            <option value="thriller" onChange={() => setCategory("thriller")}>
              thriller
            </option>
            <option value="war" onChange={() => setCategory("war")}>
              war
            </option>
            <option value="western" onChange={() => setCategory("western")}>
              western
            </option>
            <option value="adventure" onChange={() => setCategory("adventure")}>
              adventure
            </option>
            <option value="animation" onChange={() => setCategory("animation")}>
              animation
            </option>
            <option value="crime" onChange={() => setCategory("crime")}>
              crime
            </option>
            <option
              value="documentary"
              onChange={() => setCategory("documentary")}
            >
              documentary
            </option>
            <option value="family" onChange={() => setCategory("family")}>
              family
            </option>
            <option value="fantasy" onChange={() => setCategory("fantasy")}>
              fantasy
            </option>
            <option value="history" onChange={() => setCategory("history")}>
              history
            </option>
          </select>

          <button
            className="px-2 py-1 font-semibold rounded-md bg-gradient-to-r from-pink-500 to-rose-500 scl hover:scale-105"
            onClick={handleNavigate}
          >
            Search...
          </button>
        </div>

        <div>
          <section className="grid grid-cols-5 gap-5 ">
            {/* {results.filter(movie => ()).map((movie) => (
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                  className="rounded-md"
                />
              </div>
            ))} */}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Category;
