import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const genreService = {
    getAllGenres: () => axiosService.get(urls.genres)
}