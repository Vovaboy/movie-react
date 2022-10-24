const baseURL = process.env.REACT_APP_API;

export const urls = {
    movies: `${baseURL}/discover/movie`,
    genres: `${baseURL}/genre/movie/list`,
    searchMovie: `${baseURL}/search/movie?query=`
}

export {
    baseURL
}