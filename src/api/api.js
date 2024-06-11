
export const movies = async () => {
    let api = 'https://api.themoviedb.org/3/movie/now_playing';
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export const popularMovies = async () => {
    let api = 'https://api.themoviedb.org/3/movie/popular';
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export const topMovies = async () => {
    let api = 'https://api.themoviedb.org/3/movie/top_rated';
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export const upcomingMovies = async () => {
    let api = 'https://api.themoviedb.org/3/movie/upcoming';
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export const airingTv = async () => {
    let api = 'https://api.themoviedb.org/3/tv/airing_today';
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export const ontheairTv = async () => {
    let api = 'https://api.themoviedb.org/3/tv/on_the_air';
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export const popularTv = async () => {
    let api = 'https://api.themoviedb.org/3/tv/popular';
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export const topRatedTv = async () => {
    let api = 'https://api.themoviedb.org/3/tv/top_rated';
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export const moviesId = async ({ params }) => {
    // console.log(params);
    let api = `https://api.themoviedb.org/3/movie/${params.id}`;
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export const TvId = async ({ params }) => {
    // console.log(params);
    let api = `https://api.themoviedb.org/3/tv/${params.id}`;
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export const actors = async () => {
    // console.log(params);
    let api = `https://api.themoviedb.org/3/person/popular`;
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
export const actor = async ({ params }) => {
    // console.log(params);
    let api = `https://api.themoviedb.org/3/person/${params.id}`;
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        throw new Error(error)
    }
}

export const searchMovie = async ({ request }) => {
    // le but de request est de recuperer la query ajoutée à url search

    // console.log(request);
    const url = new URL(request.url)
    // console.log(url);
    const searchItem = url.searchParams.get("q")
    // console.log(searchItem);



    let api = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${searchItem}`
    const response = await fetch(api);
    try {
        const data = await response.json();
        // console.log(data);
        return data;

    } catch (error) {
        throw new Error(error)
    }
}

















