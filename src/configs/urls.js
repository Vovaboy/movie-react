const baseURL = process.env.REACT_APP_API;

export const urls = {
    movies: `${baseURL}/discover/movie`,
    genres: `${baseURL}/genre/movie/list`,
    movie: `${baseURL}/movie`,
    searchMovie: `${baseURL}//search/movie`
}

export default baseURL