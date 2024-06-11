export const getGenre = async () => {
    let api = 'https://api.themoviedb.org/3/genre/movie/list';
    const response = await fetch(api + `?api_key=${import.meta.env.VITE_API_KEY}`)
    try {
        const data = await response.json();
        return data.genres;
    } catch (error) {
        throw new Error(error)
    }
}