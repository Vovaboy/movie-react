import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const movieService = {
    getAllMovies: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getMovieByGenre: (page = 1, genreId) => axiosService.get(urls.movies, {params: {page, with_genres: `${genreId}`}}),
    searchMovies: (movie) => axiosService.get(`${urls.searchMovie}${movie}`),

}
