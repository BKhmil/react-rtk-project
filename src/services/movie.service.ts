import {IPage} from "../interfaces/page.interface";
import {apiService} from "./api.service";
import {urls} from "../constants/urls";

const movieService = {
    getPageByNumber: (pageNumber: number): Promise<IPage> =>
        apiService.get(urls.discover.getMoviesPage(pageNumber)).then(response => response.data),
    getMoviesPageWithGenre: (genreIds: number, pageNumber: string): Promise<IPage> =>
        apiService.get(urls.discover.getMoviesByGenre(genreIds, pageNumber)).then(response => response.data),
    searchMoviesByQuery: (query: string): Promise<IPage> =>
        apiService.get(urls.search.getMovieByQuery(query)).then(response => response.data)
}

export {
    movieService
}