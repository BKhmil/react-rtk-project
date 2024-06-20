import {apiService} from "./api.service";
import {urls} from "../constants/urls";
import {IGenresResponse} from "../interfaces/genresResponse.interface";

const genreService = {
    getAllMovieGenres: (): Promise<IGenresResponse> =>
        apiService.get(urls.genres.movieList).then(response => response.data)
};

export {
    genreService
}