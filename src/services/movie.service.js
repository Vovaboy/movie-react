import {axiosService} from "./axios.service";
import {urls} from "../configs";

 export const movieService = {
    getAllMovies: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getMovieById: (movieId) => axiosService.get(`${urls.movie}/${movieId}`),
    getMovieByGenre: (page = 1, genreId) => axiosService.get(urls.movies, {params: {page, with_genres: `${genreId}`}})


}
